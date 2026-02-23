const button = document.querySelector("#learnMoreBtn");
const extraText = document.querySelector("#extraText");

button.addEventListener("click", () => {
  const isHidden = extraText.hasAttribute("hidden");

  if (isHidden) {
    extraText.removeAttribute("hidden");
    button.textContent = "See less";
    button.setAttribute("aria-expanded", "true");
  } else {
    extraText.setAttribute("hidden", "");
    button.textContent = "Show context + why it matters";
    button.setAttribute("aria-expanded", "false");
  }
});
