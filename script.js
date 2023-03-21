
//  // To Manually change the slide  
// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     alert("Hello Msg");
//     let i;
//     let slides = document.getElementsByClassName("owl-item");
//     let dots = document.getElementsByClassName("dots");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
// }


// // To Automatically Chnage the slide

// // let slide_index = 0;
// // show_slides();

// // function show_slides() {
// //   let i;
// //   let slides = document.getElementsByClassName("owl-item");
// //   let dots = document.getElementsByClassName("dots");
// //   for (i = 0; i < slides.length; i++) {
// //     slides[i].style.display = "none";  
// //   }
// //   slide_index++;
// //   if (slide_index > slides.length) {slide_index = 1}    
// //   for (i = 0; i < dots.length; i++) {
// //     dots[i].className = dots[i].className.replace(" active", "");
// //   }
// //   slides[slide_index-1].style.display = "block";  
// //   dots[slide_index-1].className += " active";
// //   setTimeout(show_slides, 2000); // Change image every 2 seconds
// // }*/
