// Countdown for the splash screen. The page still redirects with the meta tag as required.
let time = 4;
const count = document.getElementById("count");
const timer = setInterval(() => {
  time--;
  count.textContent = time;
  if (time <= 0) clearInterval(timer);
}, 1000);
