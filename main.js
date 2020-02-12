// MOBILE MENU 

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



// SLIDER

const slider = document.querySelector('.slider');
const scrollSpeed = 3;
let isDown = false;
let startX;
let scrollLeft = 0;


slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('dragging');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('dragging');
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('dragging');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * scrollSpeed;
    slider.scrollLeft = scrollLeft - walk;
});

slider.addEventListener('mousewheel', (e) => {
    const delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)))
    slider.scrollLeft -= (delta * 60);
    e.preventDefault();
});


// EMAIL VALIDATION

const form = document.querySelector("form");
const userEmail = document.querySelector("#inputEmail");
const btnSubmit = document.querySelector(".btn-submit");
const emailMessage = document.querySelector(".error-message");


const re = /^([a-z\d\._-]+)@([a-z\d-_]+)\.([a-z]{2,8})([a-z]{2,8})?$/;

const emailValidation = (e) => {
    e.preventDefault();
    if(!userEmail.value) {
        userEmail.classList.add("error")
        emailMessage.innerHTML = `<p>Please enter an email</p>`
        
    } else if (!re.test(userEmail.value)) {
        userEmail.classList.add("error")
        emailMessage.innerHTML = `<p>Please enter a valid email</p>`
        
    } else {
        emailMessage.innerHTML = `You have been added to our newsletter list.`
        userEmail.classList.remove("error")
        emailMessage.classList.add("success-message")
    }
};
btnSubmit.addEventListener("click", emailValidation); 