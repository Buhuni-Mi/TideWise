// Small bit of JS for the live character count and a basic success message.
const form = document.getElementById("feedbackForm");
const msg = document.getElementById("formMsg");
const message = document.getElementById("message");
const count = document.getElementById("charCount");

message.addEventListener("input", () => {
  count.textContent = 250 - message.value.length;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    msg.textContent =
      "Please complete all required fields correctly before submitting.";
    msg.style.color = "#b42318";
    return;
  }

  msg.textContent = "Thank you. Your feedback has been recorded successfully.";
  msg.style.color = "#087e8b";
  form.reset();
  count.textContent = "250";
});
