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