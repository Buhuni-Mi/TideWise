// Simple show / hide interaction for each team member card.
document.querySelectorAll(".member-card").forEach((card) => {
  const btn = card.querySelector(".toggle-btn");
  const extra = card.querySelector(".member-extra");
  function toggle() {
    const hidden = extra.hasAttribute("hidden");
    if (hidden) {
      extra.removeAttribute("hidden");
      btn.textContent = "Hide details";
    } else {
      extra.setAttribute("hidden", "");
      btn.textContent = "Show details";
    }
  }
  btn.addEventListener("click", toggle);
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      toggle();
    }
  });
});
