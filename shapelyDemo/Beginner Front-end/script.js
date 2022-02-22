let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("customer");
//   let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
  slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000);
}

// var responsiveSlider = function() {

//   var slider = document.getElementById("customer");
//   var sliderWidth = slider.offsetWidth;
//   var slideList = document.getElementById("customers");
//   var count = 1;
//   var items = slideList.querySelectorAll("li").length;
//   var prev = document.getElementById("prev");
//   var next = document.getElementById("next");
  
//   window.addEventListener('resize', function() {
//     sliderWidth = slider.offsetWidth;
//   });
  
//   var prevSlide = function() {
//     if(count > 1) {
//       count = count - 2;
//       slideList.style.left = "-" + count * sliderWidth + "px";
//       count++;
//     }
//     else if(count = 1) {
//       count = items - 1;
//       slideList.style.left = "-" + count * sliderWidth + "px";
//       count++;
//     }
//   };
  
//   var nextSlide = function() {
//     if(count < items) {
//       slideList.style.left = "-" + count * sliderWidth + "px";
//       count++;
//     }
//     else if(count = items) {
//       slideList.style.left = "0px";
//       count = 1;
//     }
//   };
  
//   next.addEventListener("click", function() {
//     nextSlide();
//   });
  
//   prev.addEventListener("click", function() {
//     prevSlide();
//   });
  
//   setInterval(function() {
//     nextSlide()
//   }, 5000);
  
// };
  
// window.onload = function() {
//   responsiveSlider();  
// }

$(document).ready(function(){
  $('.clients').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 4
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 3
          }
      }]
  });
});