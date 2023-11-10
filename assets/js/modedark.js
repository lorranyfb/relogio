let button = document.getElementById('button');
let body = document.querySelector('body');
let number = document.querySelector('.number')

button.addEventListener('click', () => {
    button.classList.toggle('dark');
    body.classList.toggle('dark');
    clock.classList.toggle('dark');
    number.classList.toggle('dark');
})