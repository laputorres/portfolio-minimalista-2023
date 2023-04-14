/*Scroll navbar hidden */

const body = document.body;
const nav = document.querySelector(".page-header");
const menu = document.querySelector(".page-header .navbar");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll == 0) {
    nav.classList.remove(scrollUp);
    return;
  }

  if (currentScroll > lastScroll && !nav.classList.contains(scrollDown)) {
    // down
    nav.classList.remove(scrollUp);
    nav.classList.add(scrollDown);
  } else if (currentScroll < lastScroll && nav.classList.contains(scrollDown)) {
    // up
    nav.classList.remove(scrollDown);
    nav.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
});

/* Botons social media animation */
function hoverTrue(event) {
  //add class
  event.target.setAttribute("class", "wave");
}





/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "assets/particles.json", function () {
  console.log("callback - particles.js config loaded");
});

$("input").on("change", function () {
  $("body").toggleClass("blue");
});


