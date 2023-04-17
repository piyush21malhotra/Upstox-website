/* ------------------------------ Sample Test Code -------------------------

 // To Manually change the slide  
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    alert("Hello Msg");
    let i;
    let slides = document.getElementsByClassName("owl-item");
    let dots = document.getElementsByClassName("dots");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


// To Automatically Chnage the slide

// let slide_index = 0;
// show_slides();

// function show_slides() {
//   let i;
//   let slides = document.getElementsByClassName("owl-item");
//   let dots = document.getElementsByClassName("dots");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slide_index++;
//   if (slide_index > slides.length) {slide_index = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slide_index-1].style.display = "block";  
//   dots[slide_index-1].className += " active";
//   setTimeout(show_slides, 2000); // Change image every 2 seconds
// }

------------------------------ Sample Test Code -------------------------
*/

// ------------------- Dark Banner Slides ---------------------

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


// ------------------- Language Slides ---------------------

// To Manually change the slide  

var now = 0;
function plusSlides() {
    showSlides(now += 100);
}

function minusSlides() {
    showSlides(now -= 100);
}

function showSlides(n) {
    var next_button = document.querySelector(".nav-next")
    var prev_button = document.querySelector(".nav-prev")
    if(now == 200) {
        next_button.disabled = true
        next_button.style.opacity = ".5";
    }
    else {
        next_button.disabled = false
        next_button.style.opacity = "1";
    }

    if(now == 0) {
        prev_button.disabled = true
        prev_button.style.opacity = ".5";
    }
    else {
        prev_button.disabled = false
        prev_button.style.opacity = "1";
    }

    let slide = document.querySelector(".language-stage")
    var postion_translate = slide.clientWidth
    slide.style.transform="translate3d(" + -((postion_translate/3)) * (now/100)+ "px, 0px, 0px)";
}

window.addEventListener("resize", myFunction);
function myFunction() {
    now = 0
    var next_button = document.querySelector(".nav-next")
    var prev_button = document.querySelector(".nav-prev")
    if(now == 200) {
        next_button.disabled = true
        next_button.style.opacity = ".5";
    }
    else {
        next_button.disabled = false
        next_button.style.opacity = "1";
    }

    if(now == 0) {
        prev_button.disabled = true
        prev_button.style.opacity = ".5";
    }
    else {
        prev_button.disabled = false
        prev_button.style.opacity = "1";
    }
    let slide = document.querySelector(".language-stage")
    slide.style.transform="translate3d(0px, 0px, 0px)";
}