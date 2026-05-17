// MOBILE NAVIGATION
const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.navigation-links');

menuBtn.addEventListener('click', function () {
    navLinks.classList.toggle('active');
});

// FUN FACT BUTTON
const factBtn = document.getElementById('factBtn');
const factText = document.getElementById('factText');

factBtn.addEventListener('click', function () {

    factText.textContent =
        'A day on Venus is longer than a year on Venus!';

});