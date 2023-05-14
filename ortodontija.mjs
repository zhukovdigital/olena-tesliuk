const howMuchScheduledList = document.querySelectorAll(".how-much-scheduled");

document.addEventListener("DOMContentLoaded", () => {
  const rand = Math.floor(Math.random() * (20 - 10) + 10);

  for (const howMuchScheduled of howMuchScheduledList) {
    howMuchScheduled.innerText = `${rand} людей`;
  }
});

new Swiper(".guarantee", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".guarantee-pagination",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1025: {
      slidesPerView: 4,
      enabled: false,
    },
  },
});

const pricesCarousel = new Swiper(".price-carousel", {
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    768: {
      enabled: false,
      spaceBetween: 0,
    },
  },
});

const feedbackCarousel = new Swiper(".feedback-carousel", {
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    1025: {
      slidesPerView: 2,
    },
  },
});

document.querySelectorAll(".price-next").forEach((element) => {
  element.addEventListener("click", () => {
    pricesCarousel.slideNext();
  });
});

document.querySelectorAll(".price-prev").forEach((element) => {
  element.addEventListener("click", () => {
    pricesCarousel.slidePrev();
  });
});

document.querySelectorAll(".feedback-next").forEach((element) => {
  element.addEventListener("click", () => {
    feedbackCarousel.slideNext();
  });
});

document.querySelectorAll(".feedback-prev").forEach((element) => {
  element.addEventListener("click", () => {
    feedbackCarousel.slidePrev();
  });
});

document.querySelector(".hamburger").addEventListener("click", () => {
  const sidebar = document.querySelector(".sidebar");

  sidebar.dataset.closed = sidebar.dataset.closed === "true" ? false : true;
});
