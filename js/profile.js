// Prompt-based profile flow for Student 4. This follows the brief instead of using a normal HTML form.
const state = { basic: {}, interests: {}, commitments: {} };
const skipped = [];
const steps = [
  {
    key: "basic",
    title: "Step 1: Basic details",
    fields: [
      ["name", "Enter your full name"],
      ["username", "Enter a preferred username"],
      ["location", "Enter your city or country"],
    ],
  },
  {
    key: "interests",
    title: "Step 2: Interests",
    fields: [
      ["activity", "Favourite coastal activity"],
      ["concern", "Biggest marine concern"],
      ["volunteering", "Preferred type of volunteering"],
    ],
  },
  {
    key: "commitments",
    title: "Step 3: Commitments",
    fields: [
      ["action", "One action you already take"],
      ["goal", "One new goal for this month"],
      ["join", "Would you join a cleanup or event?"],
    ],
  },
];
function render() {
  const set = (id, obj, empty) =>
    (document.getElementById(id).innerHTML = Object.keys(obj).length
      ? "<ul>" +
        Object.entries(obj)
          .map(([k, v]) => `<li><strong>${k}:</strong> ${v}</li>`)
          .join("") +
        "</ul>"
      : `<p>${empty}</p>`);
  set("basicDetails", state.basic, "No details added yet.");
  set("interestDetails", state.interests, "No interests added yet.");
  set("commitmentDetails", state.commitments, "No commitments added yet.");
  const filled = Object.values(state).reduce(
    (a, b) => a + Object.keys(b).length,
    0,
  );
  const percent = Math.round((filled / 9) * 100);
  document.getElementById("profileBar").style.width = percent + "%";
  document.getElementById("profileProgress").textContent =
    percent + "% completed";
  document.getElementById("summaryBox").innerHTML = percent
    ? `<p><strong>${state.basic.name || "User"}</strong> is building a marine-friendly lifestyle profile focused on ${state.interests.concern || "ocean protection"} and practical action.</p>`
    : "<p>Your personalised ocean-friendly profile will appear here.</p>";
}
function runStep(step) {
  const answers = {};
  for (const [field, promptText] of step.fields) {
    const response = window.prompt(
      `${step.title}
${promptText}
(Type SKIP to skip this field)`,
      state[step.key][field] || "",
    );
    if (response === null || response.trim().toUpperCase() === "SKIP") {
      skipped.push(step.key);
      continue;
    }
    if (response.trim()) answers[field] = response.trim();
  }
  state[step.key] = { ...state[step.key], ...answers };
  render();
}
document.getElementById("startProfile").addEventListener("click", () => {
  steps.forEach(runStep);
});
document.getElementById("resumeSkipped").addEventListener("click", () => {
  [...new Set(skipped)].forEach((key) => {
    const step = steps.find((s) => s.key === key);
    if (step) runStep(step);
  });
});
render();
