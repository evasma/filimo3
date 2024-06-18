import header from "./header/header.js";
import headerxs from "./header/headerxs.js";
import slider from "./slider/slider.js";
import favorite from "./favorite/favorite.js";
import look from "./look/look.js";
import look2 from "./look2/look2.js";
import free from "./free/free.js";
import freexs from "./free/freexs.js";
import various from "./various/various.js";
import footer from "./footer/footer.js";
import online from "./online/online.js";
import daisy from "./daisy/daisy.js";



     

      function slider1(){
        var swiper = new Swiper(".mySwiper", {
            loop: true,
            spaceBetween: 30,
            centeredSlides: true,
            effect: "fade",
            speed: 2500,
            autoplay: {
              delay: 3000,
              disableOnInteraction: false,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          });
    }

    function slider2(){
         
   
     
      var swiper = new Swiper(".mySwiper3", {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      });
  
  
    }

function slider3(){
  
  var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 6,
    spaceBetween: 30,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  });
}
   
function slider4(){
  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  });
}


async function run(){
  header()
  headerxs()
  await slider()
  slider1()
  await favorite()
  slider2()
  look()
  look2()
  await free()
  slider3()
  await freexs()
  slider4()
  various()
  online()
  daisy()
  footer()

}
     
  run()