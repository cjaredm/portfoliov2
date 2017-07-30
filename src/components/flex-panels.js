/**************Flex Panels Open and close****************/
const panels = document.querySelectorAll('.panel');

//Toggle Open a new panel
function toggleOpen(e) {
    //This will close all open panels before the new one is opened
    const open = document.querySelector('.open');
    if (open) {
        open.classList.remove('open');
    }
    e.target.classList.toggle('open');
}

//Toggles the fly-in text when panel opens and closes.
function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

//Event Listeners for Flex Panels
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));