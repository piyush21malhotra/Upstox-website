// ------------------- Product Slides ---------------------

const product_slides = document.querySelector(".product_description_section").children;
const product_slides_indicator = document.querySelector(".products_heading_section").children;
let productIndex = 0;

function updateSlideIndicator() {
    for (let i = 0; i < product_slides_indicator.length; i++) {
        product_slides_indicator[i].classList.remove("active");
    }
    product_slides_indicator[productIndex].classList.add("active");
}

function changeProductSlide() {
    for (let i = 0; i < product_slides.length; i++) {
        product_slides[i].classList.remove("active");
    }

    product_slides[productIndex].classList.add("active");
}

function indicateProductSlide(index) {
    productIndex = index;
    changeProductSlide();
    updateSlideIndicator();
}


const slides = document.querySelector(".owl-stage").children;
const indicator = document.querySelector(".owl-dots");
let index = 0;

// create circle indicators
function circleIndicator() {
    for (let i = 0; i < slides.length; i++) {
        const div = document.createElement("div");
        div.setAttribute("onclick", "indicateSlide(this)")
        div.id = i;
        if (i == 0) {
            div.className = "active";
        }
        indicator.appendChild(div);
    }
}

circleIndicator();

function indicateSlide(element) {
    index = element.id;
    changeSlide();
    updateCircleIndicator();
    resetTimer();
}

function updateCircleIndicator() {
    for (let i = 0; i < indicator.children.length; i++) {
        indicator.children[i].classList.remove("active");
    }
    indicator.children[index].classList.add("active");
}

function prevSlide() {
    if (index == 0) {
        index = slides.length - 1;
    }
    else {
        index--;
    }
    changeSlide();
}

function nextSlide() {
    if (index == slides.length - 1) {
        index = 0;
    }
    else {
        index++;
    }
    changeSlide();
}

function changeSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    slides[index].classList.add("active");
}

function resetTimer() {
    // when click to indicator or controls button 
    // stop timer 
    clearInterval(timer);
    // then started again timer
    timer = setInterval(autoPlay, 4000);
}


function autoPlay() {
    nextSlide();
    updateCircleIndicator();
}

let timer = setInterval(autoPlay, 4000);