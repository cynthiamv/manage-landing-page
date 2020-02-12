const hamburgerButton = document.querySelector('.fa-bars');
const mobileMenu = document.querySelector('.mobile-nav-bg')
const closeMenu = document.querySelector('.close-menu')

hamburgerButton.onclick = () => {
    mobileMenu.classList.remove('hidden-nav')
    hamburgerButton.classList.add('hidden-nav')
}

closeMenu.onclick = () => {
    mobileMenu.classList.add('hidden-nav')
    hamburgerButton.classList.remove('hidden-nav')
}