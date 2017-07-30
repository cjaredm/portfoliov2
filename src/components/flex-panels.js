/**************Flex Panels Open and close****************/
//Toggle Open a new panel
export function toggleOpen(e, index) {
    //This will close all open panels before the new one is opened
    const open = document.querySelector('.open');
    if (open) {
        open.classList.remove('open');
    }
    document.getElementsByClassName('panel')[index].classList.toggle('open');
}

//Toggles the fly-in text when panel opens and closes.
export function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}