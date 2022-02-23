const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const dotsContainer = document.querySelector(".dots");

let currentSlide = 0;
const maxSlide = slides.length;

//Functions
const createDots = function () {
  slides.forEach(function (el, i) {
    dotsContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

//Activate the current dot
const activateDots = function (slide) {
  document.querySelectorAll(".dots__dot").forEach(function (dot) {
    dot.classList.remove("dots__dot--active");
  });
  document
    .querySelector(`.dots__dot[data-slide = "${slide}"]`)
    .classList.add("dots__dot--active");
};

const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

const init = function () {
  goToSlide(0);
  createDots();
  activateDots(0);
};

init();

const nextSlide = function () {
  currentSlide += 1;
  if (currentSlide === maxSlide) currentSlide = 0;

  goToSlide(currentSlide);
  activateDots(currentSlide);
};

const prevSlide = function () {
  currentSlide -= 1;
  if (currentSlide < 0) currentSlide = maxSlide - 1;

  goToSlide(currentSlide);
  activateDots(currentSlide);
};

//EVENTS
document
  .querySelector(".slider__btn--right")
  .addEventListener("click", nextSlide);

document
  .querySelector(".slider__btn--left")
  .addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    nextSlide();
  } else if (e.key === "ArrowLeft") {
    prevSlide();
  }
});

dotsContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    currentSlide = e.target.dataset.slide;
    goToSlide(currentSlide);
    activateDots(currentSlide);
  }
});
