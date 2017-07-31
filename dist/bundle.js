/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _queryDOM = __webpack_require__(2);

var _flexPanels = __webpack_require__(3);

var _debounce = __webpack_require__(4);

var _fixedNav = __webpack_require__(5);

var _radialAnimation = __webpack_require__(6);

//Animate the skill circles


/************* STICKY NAV*****************/
//Nav fixs to the top of the page.

//Toggle in the text to slide in

/* Functions to import based on section */
window.addEventListener('scroll', (0, _debounce.debounce)(_fixedNav.fixNav));

/************* Radial Animations *****************/
/* Animate the radials that come next when scrolled through */

// let current% to be updated in animation
//function make another function wait to run

//Click on flex panels to grow and shrink
// Konami Secret code

/* Queries for the DOM elements */
_queryDOM.radials.forEach(function (radial) {
    var id = radial.getAttribute('id');
    var radialCircle = document.querySelector('#' + id);
    _radialAnimation.animateSkillsCircles.call(radialCircle, radialCircle);
});

/************** Flex Panels Open and close ****************/
_queryDOM.panels.forEach(function (panel, index) {
    return panel.addEventListener('click', function (e) {
        return (0, _flexPanels.toggleOpen)(e, index);
    });
});
_queryDOM.panels.forEach(function (panel) {
    return panel.addEventListener('transitionend', _flexPanels.toggleActive);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pressed = [];
var konami = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

window.addEventListener('keyup', function (e) {
    pressed.push(e.key);
    pressed.splice(-konami.length - 1, pressed.length - konami.length);

    if (pressed.join('') == konami.join('')) {
        console.log('Komani Code entered successfully!');

        //Add Something in here that would be fun.
        window.location.href = "https://en.wikipedia.org/wiki/Konami_Code";
    }
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var panels = exports.panels = document.querySelectorAll('.panel');
var nav = exports.nav = document.querySelector('.nav');
var radials = exports.radials = document.querySelectorAll(".radials");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toggleOpen = toggleOpen;
exports.toggleActive = toggleActive;
/**************Flex Panels Open and close****************/
//Toggle Open a new panel
function toggleOpen(e, index) {
    //This will close all open panels before the new one is opened
    var open = document.querySelector('.open');
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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.debounce = debounce;
//This will have it run only every so often instead of every millisecond
function debounce(func) {
    var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
    var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function later() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fixNav = fixNav;
/* Sticky Nav */
function fixNav() {
    var nav = document.querySelector('.nav');
    var navHeight = nav.offsetHeight;
    var topOfNav = nav.offsetTop;
    var landing = document.querySelector('.landing');
    var landingHeight = landing.offsetHeight;
    var almostBottomOfLanding = landingHeight - navHeight;
    var profile = document.querySelector('.profile');

    var landingThing = false;

    if (window.scrollY >= topOfNav) {
        profile.style.paddingTop = nav.offsetHeight + 'px';
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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.animateSkillsCircles = animateSkillsCircles;
// NEXT SECTION
/*************Radial Animations*****************/
//http://jsfiddle.net/loktar/uhVj6/4/

var currentPercent = exports.currentPercent = 1; //Compared to endPercent so it knows to end.

function animateSkillsCircles(rads, current) {
    var context = rads.getContext('2d');
    //Starting coordinates
    var x = rads.width / 2; //middle of canvas
    var y = rads.height / 2; //middle of canvas
    var radius = 0.38 * rads.width; //Radius of circle in pixels
    var endNum = rads.getAttribute('data-num');
    var endPercent = +rads.getAttribute('data-num') + +1; //Ending % of circle
    var fullCircle = Math.PI * 2; //= 360 degrees in radians
    var quarterClock = Math.PI / 2; //This equals 25% of a circle used later to move start point from 3 o'clock to 12.

    context.lineWidth = 10; // Line width
    context.strokeStyle = rads.getAttribute('data-color'); //Line Color

    context.beginPath();
    //https://www.w3schools.com/tags/canvas_arc.asp
    context.arc(x, y, radius, -quarterClock, fullCircle * current - quarterClock, false);
    context.stroke(); //Draw the line
    exports.currentPercent = currentPercent += 1; // +1%

    //Canvas Text
    context.font = 'lighter ' + radius * 0.7 + 'px serif';
    context.textBaseline = "top";
    context.textAlign = "center";
    context.fillStyle = 'white';
    context.fillText(endNum, x, y - y * 0.3);

    if (currentPercent < endPercent) {
        //If the +1 didn't put it to the endPercent then do it again, starting at the current percentage
        requestAnimationFrame(function () {
            return animateSkillsCircles(rads, currentPercent / 100);
        });
    }
    context.closePath();
}

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map