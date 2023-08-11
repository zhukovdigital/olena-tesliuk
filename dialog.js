const modal = document.getElementById("dialog");
const shortModal = document.getElementById("short-dialog");
const openElements = document.querySelectorAll(".open-dialog");
const closeElements = document.querySelectorAll(".close-dialog");
const openShortElements = document.querySelectorAll(".open-short-dialog");
const closeShortElements = document.querySelectorAll(".close-short-dialog");
const submitBtn = document.querySelectorAll('button[type="submit"]');
const nextElements = document.querySelectorAll(".next-dialog");
const prevElements = document.querySelectorAll(".prev-dialog");
const submitForm = document.getElementById("submit-form");
const submitShortForm = document.getElementById("submit-short-form");

let dialogLabel = "";

function addLoading() {
  submitBtn.forEach((button) => {
    button.innerHTML =
      'Отримати консультацію<span class="spinner"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" fill="currentColor" /></svg></span>';
  });
}

function removeLoading() {
  submitBtn.forEach((button) => {
    button.innerHTML = "Отримати консультацію";
  });
}

submitShortForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = new FormData(submitShortForm);

  try {
    const userName = data.get("name").trim();
    const tel = data.get("tel").trim();
    addLoading();
    await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      body: JSON.stringify({
        service_id: "service_4lkvc7f",
        template_id: "template_0tmu33l",
        user_id: "36N-vrVDpOrDBQkdX",
        template_params: {
          from_name: userName,
          to_name: "zhukov.digital",
          message: `Імʼя: ${userName}, Телефон: ${tel}, сайт: ${window.location.href}, призначення: ${dialogLabel}`,
        },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.error(e);
    window.location.reload();
  } finally {
    removeLoading();
    submitShortForm.classList.add("form_submission");
    shortModal.dataset.selectedStep = +shortModal.dataset.selectedStep + 1;
  }
});

submitForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = new FormData(submitForm);

  try {
    const userName = data.get("name").trim();
    const tel = data.get("tel").trim();
    const step1 = modal.querySelector(
      'div[data-step="1"] input[type="radio"]:checked'
    ).value;
    const step2 = modal.querySelector(
      'div[data-step="2"] input[type="radio"]:checked'
    ).value;
    const step3 = modal.querySelector(
      'div[data-step="3"] input[type="radio"]:checked'
    ).value;
    const step4 = modal.querySelector(
      'div[data-step="4"] input[type="radio"]:checked'
    ).value;
    const step5 = modal.querySelector(
      'div[data-step="5"] input[type="radio"]:checked'
    ).value;

    addLoading();
    await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      body: JSON.stringify({
        service_id: "service_4lkvc7f",
        template_id: "template_0tmu33l",
        user_id: "36N-vrVDpOrDBQkdX",
        template_params: {
          from_name: userName,
          to_name: "zhukov.digital",
          message: `Імʼя: ${userName}, Телефон: ${tel}, Вік: ${step1}, Прикус: ${step2}, Всі зуби прорізалися: ${step3}, Виривали зуби мудрості: ${step4}, Чи проводили лікування раніше: ${step5}`,
        },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.error(e);
    window.location.reload();
  } finally {
    removeLoading();
    submitForm.classList.add("form_submission");
    modal.dataset.selectedStep = +modal.dataset.selectedStep + 1;
  }
});

nextElements.forEach((element) => {
  element.addEventListener("click", () => {
    modal.dataset.selectedStep = +modal.dataset.selectedStep + 1;
  });
});

prevElements.forEach((element) => {
  element.addEventListener("click", () => {
    modal.dataset.selectedStep = modal.dataset.selectedStep - 1;
  });
});

openShortElements.forEach((element) => {
  element.addEventListener("click", (event) => {
    shortModal.style.display = "block";
    dialogLabel = event.target.dataset.label;
  });
});

closeShortElements.forEach((element) => {
  element.addEventListener("click", () => {
    shortModal.style.display = "none";
    shortModal.dataset.selectedStep = 1;
  });
});

openElements.forEach((element) => {
  element.addEventListener("click", () => {
    modal.style.display = "block";
  });
});

closeElements.forEach((element) => {
  element.addEventListener("click", () => {
    modal.style.display = "none";
    modal.dataset.selectedStep = 1;
  });
});

window.onclick = function (event) {
  if (event.target === shortModal) {
    shortModal.style.display = "none";
    dialogLabel = "";
  }

  if (event.target == modal) {
    modal.style.display = "none";
  }
};
