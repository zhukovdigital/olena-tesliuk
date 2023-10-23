const howMuchScheduledList = document.querySelectorAll(".how-much-scheduled");
const howMuchAvailable = document.getElementById("how-much-available");
const specialists = document.getElementById("specialists");
const currentMonth = document.getElementById("current-month");
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
  const months = [
    "січня",
    "лютого",
    "березня",
    "квітня",
    "травня",
    "червня",
    "липня",
    "серпня",
    "вересня",
    "жовтня",
    "листопада",
    "грудня",
  ];
  const date = new Date();
  const rand = getRandomNumber();

  for (const howMuchScheduled of howMuchScheduledList) {
    howMuchScheduled.innerText = `${rand} людей`;
    howMuchAvailable.innerText = 16 - rand;
  }

  currentMonth.innerText = months[date.getMonth()];
});

new Swiper(".guarantee", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".guarantee-pagination",
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
  const seed = +`${date.getFullYear()}${date.getMonth() + 1}-${date.getHours()}`
    .split("")
    .map((el) => el.charCodeAt())
    .join("");
  const random = Math.abs(Math.sin(seed) * 1000);
  const randomNumber = Math.floor(random % 10) + 5;
  return randomNumber;
}
