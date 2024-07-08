window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showButtonWhatsappOnScroll()
}

function showNavOnScroll() {
    if(scrollY > 0) {
        document.querySelector("#navigation").classList.add("scroll")
    } else {
        document.querySelector("#navigation").classList.remove("scroll")
    }
}

function showButtonWhatsappOnScroll() {
    if(scrollY > 200) {
        document.querySelector("#buttonWhatsapp").classList.add("show")
    } else {
        document.querySelector("#buttonWhatsapp").classList.remove("show")
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

function showButtonWhatsappOnScroll() {
    if(scrollY > 200) {
        document.querySelector("#buttonWhatsapp").classList.add("show")
    } else {
        document.querySelector("#buttonWhatsapp").classList.remove("show")
    }
}
// image-slider

let currentSlide = 0;

function changeSlide() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider img');
    const totalSlides = slides.length;

    // Move to the next slide
    currentSlide = (currentSlide + 1) % totalSlides;

    // Calculate the new position for the slider
    const newTransform = -currentSlide * 100;

    // Apply the new transform to move the slider
    slider.style.transform = `translateX(${newTransform}%)`;
}

// Automatically change slide every 5 seconds
setInterval(changeSlide, 5000);


