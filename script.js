const form = document.querySelector(".footer__contact-form");
const name_el = document.getElementById("name");
const email_el = document.getElementById("email");
const message_el = document.getElementById("message");

// Regular expressions for validation
const nameRegex = /^[a-zA-Z]{2,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;

  if (!nameRegex.test(name_el.value.trim())) {
    show_or_remove_error(
      name_el,
      "Please enter a valid name (at least 2 characters, letters only)"
    );
    isValid = false;
  } else {
    show_or_remove_error(name_el);
  }

  if (!emailRegex.test(email_el.value.trim())) {
    show_or_remove_error(email_el, "Please enter a valid email address");
    isValid = false;
  } else {
    show_or_remove_error(email_el);
  }

  if (message_el.value.trim() === "") {
    show_or_remove_error(message_el, "Please enter a message");
    isValid = false;
  } else {
    show_or_remove_error(message_el);
  }

  if (isValid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});

function show_or_remove_error(el, message) {
  const parent = el.closest(".contact-form__input-div") || el.parentElement;
  const errorSpan = parent.querySelector("span[id$='-error']");

  if (message) {
    errorSpan.textContent = message;
    errorSpan.classList.add("error");
    el.setAttribute("aria-invalid", "true");
  } else {
    errorSpan.textContent = "";
    errorSpan.classList.remove("error");
    el.setAttribute("aria-invalid", "false");
  }
}
