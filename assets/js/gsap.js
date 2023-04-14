//LOADER

window.addEventListener("load", function () {
  tl.fromTo(
    ".loading-page",
    { opacity: 1 },
    {
      opacity: 0,
      display: "none",
      duration: 1.5,
    }
  );

  
});

//DIV´s Animations


var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "skills",
    markers: true,
    start: "top top",
    end: "100% 100%",
    scrub: true,
    pin: true,
  },
});

const leftToRight = document.querySelector(".leftToRight");
const rightToLeft = document.querySelectorAll(".rightToLeft");
const backToTop = document.querySelectorAll(".backToTop");
const topToBack = document.querySelectorAll(".topToBack");
const loader__background = document.querySelector(".background-loader");


  
  
tl.to(backToTop,{

});