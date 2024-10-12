const slider = document.querySelector('.wrapslid');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

// Get the total number of slides
const totalSlides = document.querySelectorAll('.slidel').length;
let currentSlide = 0;

// Function to move the slider to the current slide
function updateSliderPosition() {
    const slideWidth = document.querySelector('.slidel').offsetWidth;
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Right Arrow Click Event
rightArrow.addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateSliderPosition();
    }
});

// Left Arrow Click Event
leftArrow.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSliderPosition();
    }
});