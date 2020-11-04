const mediaquerie768px = window.matchMedia('screen and (max-width: 768px)');
const nav = document.querySelector('.nav');
const burgerButton = document.querySelector('#burger-button');

mediaquerie768px.addListener(validation);

function validation (event) {
    if (event.matches) {
        burgerButton.addEventListener('click', menu);
    }
    else {
        burgerButton.removeEventListener('click', menu);
    }
}

validation(mediaquerie768px);

function menu () {
    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
    }
    else {
    nav.classList.add('active');
    }
}