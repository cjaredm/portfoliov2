//import {something} from './src/components/queryDOM';
import '../src/components/konami';
import { debounce } from '../src/components/debounce';

/**************Flex Panels Open and close****************/
const panels = document.querySelectorAll('.panel');
const ps = document.querySelectorAll('p');

//Toggle Open a new panel
function toggleOpen(e, index) {
    //This will close all open panels before the new one is opened
    const open = document.querySelector('.open');
    if (open) {
        open.classList.remove('open');
    }
    document.getElementsByClassName('panel')[index].classList.toggle('open');
}

//Toggles the fly-in text when panel opens and closes.
function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

//Event Listeners for Flex Panels
panels.forEach((panel, index) => panel.addEventListener('click', (e) => toggleOpen(e, index)));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));




/* Sticky Nav */
const nav = document.querySelector('.nav');
const navHeight = nav.offsetHeight;
const topOfNav = nav.offsetTop;
const landing = document.querySelector('.landing');
const landingHeight = landing.offsetHeight;
const almostBottomOfLanding = landingHeight - navHeight;
const profile = document.querySelector('.profile');

function fixNav() {
    console.log('scroll');
    let landingThing = false;
    if (window.scrollY >= topOfNav) {
        profile.style.paddingTop = `${nav.offsetHeight}px`;
        document.body.classList.add('fixed-nav');
        landingThing = true;
    } else {
        profile.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
        landingThing = false;
    }

    if (window.scrollY >= almostBottomOfLanding) {
        nav.style.backgroundColor = 'black';

    } else if (landingThing) {
        nav.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        nav.style.backgroundColor = 'transparent';
    }
}

window.addEventListener('scroll', debounce(fixNav));










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
    context.font = `lighter ${radius * 0.7}px serif`;
    context.textBaseline = "top";
    context.textAlign = "center";
    context.fillStyle = 'white';
    context.fillText(endNum, x, y - (y * 0.3));

    if (currentPercent < endPercent) { //If the +1 didn't put it to the endPercent then do it again, starting at the current percentage
        requestAnimationFrame(() => animate(rads, (currentPercent / 100)));
    }
    context.closePath();
}

/* Animate the radials that come next when scrolled through */

const radials = document.querySelectorAll(".radials");

function onScreenYet(e) {
    radials.forEach(rad => {
        const radOnScreen = (window.scrollY + window.innerHeight) - rad.height;
        const radBottom = rad.offsetTop + rad.height;

        const isOnScreen = radOnScreen > rad.offsetTop;
        const isNotScrolledPassed = window.scrollY < radBottom;

        if (isOnScreen && isNotScrolledPassed) {
            rad.classList.add('animate');
        } else {
            rad.classList.remove('animate');
        }
    });
}
window.addEventListener('scroll', debounce(onScreenYet));



//leave this here.
radials.forEach(radial => {
    const id = radial.getAttribute('id');
    const radialCircle = document.querySelector(`#${id}`);
    animate.call(radialCircle, radialCircle);
});