const button = document.querySelector('#learnMoreBtn');
const extraText = document.querySelector('#extraText');

button.addEventListener("click", () => {
  extraText.style.display = "block";
  button.textContent = "Thanks for Visiting";
});
