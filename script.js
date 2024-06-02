let container = document.querySelector('.container');
let circle = document.querySelector('.circle');

let body = document.querySelector('.body');
let innerNight = document.querySelector('.inner-container');

container.addEventListener('click', () => {
    container.classList.toggle('night');
    circle.classList.toggle('moon');
    body.classList.toggle('body-night');
    innerNight.classList.toggle('inner-container-night');
});