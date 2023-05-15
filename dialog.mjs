const modal = document.getElementById("dialog");
const shortModal = document.getElementById("short-dialog");
const openElements = document.querySelectorAll(".open-dialog");
const closeElements = document.querySelectorAll(".close-dialog");
const openShortElements = document.querySelectorAll(".open-short-dialog");
const closeShortElements = document.querySelectorAll(".close-short-dialog");
const nextElements = document.querySelectorAll(".next-dialog");
const prevElements = document.querySelectorAll(".prev-dialog");
const submitForm = document.getElementById("submit-form");
const submitShortForm = document.getElementById("submit-short-form");

submitShortForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = new FormData(submitShortForm);

  try {
    const userName = data.get("name").trim();
    const tel = data.get("tel").trim();

    await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      body: JSON.stringify({
        service_id: "service_4lkvc7f",
        template_id: "template_0tmu33l",
        user_id: "36N-vrVDpOrDBQkdX",
        template_params: {
          from_name: userName,
          to_name: "zhukov.digital",
          message: `Імʼя: ${userName}, Телефон: ${tel}, сайт: ${window.location.href}`,
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
  element.addEventListener("click", () => {
    shortModal.style.display = "block";
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
  }

  if (event.target == modal) {
    modal.style.display = "none";
  }
};
