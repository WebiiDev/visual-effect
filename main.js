let elementToAnimate = document.querySelector(".img");

let topOfTheElement;
window.onscroll = function() {
  topOfTheElement =
    elementToAnimate.getBoundingClientRect().top +
    window.pageYOffset +
    elementToAnimate.getBoundingClientRect().height / 2;
  if (window.innerHeight + window.pageYOffset >= topOfTheElement) {
    elementToAnimate.classList.add("img-animation");
  }
};
