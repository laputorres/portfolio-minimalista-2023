//ANIMATION
const animationSkills = anime ({
    targets: ".skills__list .card-top",
    translateY: [200,0],
    duration: 4000,
    scale: [0.5,1],
    borderRadius: ['50%', '10%'],
    backgroundColor: '#313131',
  easing: 'steps(2)',
  delay: anime.stagger(1200),
    autoplay: false,
    });
const animationSkillsBottom = anime ({
    targets: ".card-bottom",
    translateY: [200,0],
    duration: 4000,
    scale: [0.5,1],
    borderRadius: ['50%', '10%'],
    backgroundColor: '#313131',
  easing: 'easeInOutQuad',
  delay: anime.stagger(1200),
    autoplay: false,
    });
const aboutLeft = anime ({
    targets: ".about .title",
    translateX: [-650,0],
    duration: 4000,
    scale: [0.5,1],    
  easing: 'steps(10)',
    autoplay: false,
    });
const aboutRight = anime ({
    targets: ".about .text",
    translateX: [650,0],
    duration: 4000,
    scale: [0.5,1],    
  easing: 'steps(10)',
    autoplay: false,
    });
    

//Anime Scroll 

const skills = document.querySelector(".skills");
const about = document.querySelector(".about");
const contact = document.querySelector(".contact");


const animateOnScroll = function (div, speed = 100, offset = 300){
  const scrollPorcent = window.pageYOffset - div.offsetTop;
  return (scrollPorcent + offset) / speed;
}

//SCROLL LISTENER 
window.onscroll = function () {
  
    
    animationSkills.seek(animateOnScroll(skills, 200,200) * animationSkills.duration);
    animationSkillsBottom.seek(animateOnScroll(skills, 200,-200) * animationSkillsBottom.duration);
    aboutLeft.seek(animateOnScroll(about, 200,300) * aboutLeft.duration);
    aboutRight.seek(animateOnScroll(about, 200,300) * aboutRight.duration);

  
  }

     
   

//LOADER

window.addEventListener("load", function () {
  document.getElementById("loader").classList.add("hidden");
  
  
});



/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "assets/particles.json", function () {
  console.log("callback - particles.js config loaded");
});

$("input").on("change", function () {
  $("body").toggleClass("blue");
});

