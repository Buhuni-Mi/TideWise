// This simulator only adds points and changes the feedback area. No advanced logic was needed for the coursework.
const cards = [...document.querySelectorAll(".action-card")];
const scoreEl = document.getElementById("score");
const label = document.getElementById("impactLabel");
const scoreBar = document.getElementById("scoreBar");
const simHero = document.querySelector(".sim-hero");
function updateScore() {
  let score = 0;
  cards.forEach((card) => {
    if (card.classList.contains("selected"))
      score += Number(card.dataset.points);
  });
  scoreEl.textContent = score;
  scoreBar.style.width = Math.min((score / 19) * 100, 100) + "%";
  if (score <= 5) {
    label.textContent = "Current impact level: Low impact";
    document.body.style.background =
      "linear-gradient(180deg,#f4f4f4,#e5ecee), url(images/impact-low.jpg) top center / 100% 280px no-repeat";
    simHero.style.backgroundImage =
      "linear-gradient(135deg, rgba(8,126,139,.48), rgba(255,127,80,.18)), url('images/impact-low.jpg')";
  } else if (score <= 12) {
    label.textContent = "Current impact level: Medium impact";
    document.body.style.background =
      "linear-gradient(180deg,#f4fdfd,#e8f8f5), url(images/impact-medium.jpg) top center / 100% 280px no-repeat";
    simHero.style.backgroundImage =
      "linear-gradient(135deg, rgba(8,126,139,.42), rgba(255,127,80,.2)), url('images/impact-medium.jpg')";
  } else {
    label.textContent = "Current impact level: High impact";
    document.body.style.background =
      "linear-gradient(180deg,#f7fffd,#e8fff7), url(images/impact-high.jpg) top center / 100% 280px no-repeat";
    simHero.style.backgroundImage =
      "linear-gradient(135deg, rgba(8,126,139,.35), rgba(255,127,80,.16)), url('images/impact-high.jpg')";
  }
}
cards.forEach((card) => {
  function toggle() {
    card.classList.toggle("selected");
    updateScore();
  }
  card.addEventListener("click", toggle);
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  });
});
updateScore();
