// Gallery interaction kept simple on purpose: open image, close image, then allow a small style change in the modal.
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalImg = document.getElementById("modalImg");
const panel = document.querySelector(".modal-panel");
const copy = document.querySelector(".modal-copy");
let altTheme = false,
  altFont = false;
document.querySelectorAll(".thumb").forEach((btn) =>
  btn.addEventListener("click", () => {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    modalTitle.textContent = btn.dataset.title;
    modalText.textContent = btn.dataset.text;
    modalImg.src = btn.dataset.img;
  }),
);
document.getElementById("closeModal").addEventListener("click", () => {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
});
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  }
});
document.getElementById("themeToggle").addEventListener("click", () => {
  altTheme = !altTheme;
  panel.style.background = altTheme ? "#0b3954" : "white";
  copy.style.color = altTheme ? "white" : "#143642";
});
document.getElementById("fontToggle").addEventListener("click", () => {
  altFont = !altFont;
  copy.style.fontFamily = altFont
    ? "Georgia, serif"
    : "Arial, Helvetica, sans-serif";
});
