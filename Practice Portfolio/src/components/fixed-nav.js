/* Sticky Nav */

export function fixNav() {
    const nav = document.querySelector('.nav');
    const navHeight = nav.offsetHeight;
    const topOfNav = nav.offsetTop;
    const landing = document.querySelector('.landing');
    const landingHeight = landing.offsetHeight;
    const almostBottomOfLanding = landingHeight - navHeight;
    const profile = document.querySelector('.profile');
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