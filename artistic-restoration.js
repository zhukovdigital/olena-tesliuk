const howMuchScheduledList = document.querySelector(".how-much-scheduled");
const submitAddPeople = document.getElementById("submit-short-form");
const container = document.querySelector('.comparison-container');
const beforeImageContainer = document.querySelector('.wrapper-image-before')

let scheduledPeople = 0;

document.addEventListener("DOMContentLoaded", () => {
  const rand = getRandomNumber();
 
  scheduledPeople = rand;
  howMuchScheduledList.innerText = `${scheduledPeople} людей`

  beforeImageContainer.style.width = container.offsetWidth + 'px'

});

visualViewport.addEventListener("resize", (e) => {
  beforeImageContainer.style.width = container.offsetWidth + 'px'
});


submitAddPeople.addEventListener("submit", async (event) => {
  event.preventDefault();

  scheduledPeople += 1;
  howMuchScheduledList.innerHTML = `${scheduledPeople} людей`
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

document.querySelector('.comparison-slider').addEventListener('input', (e) => {
  container.style.setProperty('--position', `${e.target.value}%`);
})