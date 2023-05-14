const howMuchScheduledList = document.querySelectorAll(".how-much-scheduled");
const howMuchAvailable = document.getElementById("how-much-available");
const specialists = document.getElementById("specialists");
const specialist1 = specialists.querySelector(
  'button[data-select-specialist="1"]'
);
const specialist2 = specialists.querySelector(
  'button[data-select-specialist="2"]'
);
const specialist3 = specialists.querySelector(
  'button[data-select-specialist="3"]'
);

specialists.addEventListener("click", (event) => {
  let selected;

  if (specialist1.contains(event.target)) {
    selected = specialist1;
  }
  if (specialist2.contains(event.target)) {
    selected = specialist2;
  }
  if (specialist3.contains(event.target)) {
    selected = specialist3;
  }

  if (selected) {
    event.currentTarget.dataset.selected = selected.dataset.selectSpecialist;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const rand = Math.floor(Math.random() * (20 - 10) + 10);

  for (const howMuchScheduled of howMuchScheduledList) {
    howMuchScheduled.innerText = `${rand} людей`;
    howMuchAvailable.innerText = 20 - rand;
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
