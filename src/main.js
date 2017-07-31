import '../src/components/konami'; // Konami Secret code

/* Queries for the DOM elements */
import { panels } from '../src/components/queryDOM';
import { nav } from '../src/components/queryDOM';
import { radials } from '../src/components/queryDOM';

/* Functions to import based on section */
import { toggleOpen } from '../src/components/flex-panels'; //Click on flex panels to grow and shrink
import { toggleActive } from '../src/components/flex-panels'; //Toggle in the text to slide in

import { debounce } from '../src/components/debounce'; //function make another function wait to run

import { fixNav } from '../src/components/fixed-nav'; //Nav fixs to the top of the page.

import { currentPercent } from '../src/components/radial-animation'; // let current% to be updated in animation
import { animateSkillsCircles } from '../src/components/radial-animation'; //Animate the skill circles


/************* STICKY NAV*****************/
window.addEventListener('scroll', debounce(fixNav));

/************* Radial Animations *****************/
/* Animate the radials that come next when scrolled through */

radials.forEach(radial => {
    const id = radial.getAttribute('id');
    const radialCircle = document.querySelector(`#${id}`);
    animateSkillsCircles.call(radialCircle, radialCircle);
});


/************** Flex Panels Open and close ****************/
panels.forEach((panel, index) => panel.addEventListener('click', (e) => toggleOpen(e, index)));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));