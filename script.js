// 1. Gestion du menu "3 barres"
const mobileMenu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 2. Gestion des descriptions "Plus"
const buttons = document.querySelectorAll('.btn-more');
const closes = document.querySelectorAll('.close');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});

closes.forEach(close => {
    close.addEventListener('click', () => {
        close.closest('.description-box').classList.remove('active');
    });
});
