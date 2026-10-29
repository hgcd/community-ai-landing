document.querySelector("#contact-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const status = document.querySelector("#form-status");
  if (status) {
    status.textContent = "Preview only: your message has not been sent. A contact service still needs to be connected.";
  }
});
