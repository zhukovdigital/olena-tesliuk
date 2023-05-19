const howMuchScheduledList = document.querySelectorAll(".how-much-scheduled");

document.addEventListener("DOMContentLoaded", () => {
  const rand = getRandomNumber();

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
  zoom: {
    maxRatio: 3,
  },
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1025: {
      slidesPerView: 4,
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

document.querySelectorAll(".close-sidebar").forEach((element) => {
  const sidebar = document.querySelector(".sidebar");

  element.addEventListener("click", () => {
    sidebar.dataset.closed = true;
  });
});

document.querySelector(".hamburger").addEventListener("click", () => {
  const sidebar = document.querySelector(".sidebar");

  sidebar.dataset.closed = sidebar.dataset.closed === "true" ? false : true;
});

function getRandomNumber() {
  const date = new Date();
  const seed = +`${date.getFullYear()}${date.getMonth() + 1}-${date.getDate()}`
    .split("")
    .map((el) => el.charCodeAt())
    .join("");
  const random = Math.abs(Math.sin(seed) * 1000);
  const randomNumber = Math.floor(random % 10) + 5;
  return randomNumber;
}
