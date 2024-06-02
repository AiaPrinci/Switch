let container = document.querySelector('.container');
let circle = document.querySelector('.circle');

let body = document.querySelector('.body');

container.addEventListener('click', () => {
    container.classList.toggle('night');
    circle.classList.toggle('moon');
    body.classList.toggle('body-night');
});