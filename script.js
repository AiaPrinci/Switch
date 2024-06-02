let container = document.querySelector('.container');
let circle = document.querySelector('.circle');

container.addEventListener('click', () => {
    container.classList.toggle('night');
    circle.classList.toggle('moon');
});