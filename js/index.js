var textWrapper = document.querySelector('.changeColor');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({})
  .add({
    targets: '.changeColor .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 100
  });



  ScrollReveal().reveal('.h1-sect1', {

    delay: 500,
    easing: 'cubic-bezier(0.5, 0, 0, 1)' 
  });