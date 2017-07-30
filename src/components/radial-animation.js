// NEXT SECTION
/*************Radial Animations*****************/
//http://jsfiddle.net/loktar/uhVj6/4/

let currentPercent = 1; //Compared to endPercent so it knows to end.
function animate(rads, current) {
    const context = rads.getContext('2d');
    //Starting coordinates
    const x = rads.width / 2; //middle of canvas
    const y = rads.height / 2; //middle of canvas
    const radius = 0.38 * rads.width; //Radius of circle in pixels
    const endNum = rads.getAttribute('data-num');
    const endPercent = +rads.getAttribute('data-num') + +1; //Ending % of circle
    const fullCircle = Math.PI * 2; //= 360 degrees in radians
    const quarterClock = Math.PI / 2; //This equals 25% of a circle used later to move start point from 3 o'clock to 12.

    context.lineWidth = 10; // Line width
    context.strokeStyle = rads.getAttribute('data-color'); //Line Color

    context.beginPath();
    //https://www.w3schools.com/tags/canvas_arc.asp
    context.arc(x, y, radius, -(quarterClock), ((fullCircle) * current) - quarterClock, false);
    context.stroke(); //Draw the line
    currentPercent++; // +1%

    //Canvas Text
    context.font = "bold " + (radius * 0.7) + "px serif";
    context.textBaseline = "top";
    context.textAlign = "center";
    context.fillText(endNum, x /*- (x * 0.25)*/ , y - (y * 0.3));

    if (currentPercent < endPercent) { //If the +1 didn't put it to the endPercent then do it again, starting at the current percentage
        requestAnimationFrame(() => animate(rads, (currentPercent / 100)));
    }
    context.closePath();
}