//import {something} from './src/components/queryDOM';
import '../src/components/konami'; //konami backgroun fun thing
import { debounce } from '../src/components/debounce';
import { fixNav } from '../src/components/fixed-nav';
import { toggleOpen } from '../src/components/flex-panels';
import { toggleActive } from '../src/components/flex-panels';
import { animateSkillCirlces } from '../src/components/radial-animation';


/**************Flex Panels Open and close****************/
const panels = document.querySelectorAll('.panel');
const ps = document.querySelectorAll('p');

//Event Listeners for Flex Panels
panels.forEach((panel, index) => panel.addEventListener('click', (e) => toggleOpen(e, index)));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));


//Listen for scroll, every 20 milliseconds or so, and then fix the Nav
window.addEventListener('scroll', debounce(fixNav));

/*************Radial Animations*****************/

let currentPercent = 1; //Compared to endPercent so it knows to end.

const radials = document.querySelectorAll(".radials");

radials.forEach(radial => {
    const id = radial.getAttribute('id');
    const radialCircle = document.querySelector(`#${id}`);
    animateSkillCirlces.call(radialCircle, radialCircle);
});