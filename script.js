document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#learnMoreBtn");
  const extraText = document.querySelector("#extraText");

  // If either is missing, stop and print a clear error.
  if (!button || !extraText) {
    console.error("Button or extraText not found. Check IDs: #learnMoreBtn and #extraText");
    return;
  }

  // Ensure it starts hidden (works for both hidden attr + inline styles)
  extraText.hidden = true;

  button.addEventListener("click", () => {
    const isNowHidden = !extraText.hidden; // after toggle, will it be hidden?

    extraText.hidden = !extraText.hidden;

    if (extraText.hidden) {
      button.textContent = "Learn More";
      button.setAttribute("aria-expanded", "false");
    } else {
      button.textContent = "See less";
      button.setAttribute("aria-expanded", "true");
    }
  });

  console.log("script.js loaded and button listener attached ✅");
});
