const howMuchScheduledList = document.querySelectorAll(".how-much-scheduled");
const howMuchAvailable = document.getElementById("how-much-available");
const ourServicesSection = document.getElementById("prices");
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
const adultButton = ourServicesSection.querySelector(
  '.our-services[data-select-service="adult"]'
);
const youngButton = ourServicesSection.querySelector(
  '.our-services[data-select-service="young"]'
);
const currentMonth = document.getElementById("current-month");

ourServicesSection.addEventListener("click", (event) => {
  const selected = adultButton.contains(event.target)
    ? adultButton
    : youngButton.contains(event.target)
    ? youngButton
    : null;

  if (selected) {
    event.currentTarget.dataset.selected = selected.dataset.selectService;
  }
});

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

const swiperCarousel = new Swiper(".our-work-carousel", {
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    1025: {
      slidesPerView: 3,
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

document.querySelectorAll(".our-work-carousel-next").forEach((element) => {
  element.addEventListener("click", () => {
    swiperCarousel.slideNext();
  });
});
document.querySelectorAll(".our-work-carousel-prev").forEach((element) => {
  element.addEventListener("click", () => {
    swiperCarousel.slidePrev();
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
