const mediaquerie768px = window.matchMedia('screen and (max-width: 768px)');
const mediaquerie425px = window.matchMedia('screen and (max-width: 425px)');
const nav = document.querySelector('.nav');
const burgerButton = document.querySelector('#burger-button');

mediaquerie768px.addListener(validation);
mediaquerie425px.addListener(validationSecond);

function validation (event) {
    if (event.matches) {
        burgerButton.addEventListener('click', menu);
    }
    else {
        burgerButton.removeEventListener('click', menu);
    }
}
function validationSecond (event) {
    if (event.matches) {
            burgerButton.addEventListener('click', menu);
    }
    else {
            burgerButton.removeEventListener('click', menu);
    }   
}
function menu () {
    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
    }
    else {
    nav.classList.add('active');
    }
}