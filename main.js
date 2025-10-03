const ratingButtons = document.querySelectorAll(".rating-button-items");
const submitButton = document.querySelector(".submit-button");
const ratingPage = document.querySelector(".rating-page");
const submittedPage = document.querySelector(".submitted-page");
const givenRate = document.getElementById("given-rate");

let selectedRating = null;

// Rating selection
ratingButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Clear previous active states
    ratingButtons.forEach(btn => btn.classList.remove("active"));
    // Add active state to clicked button
    button.classList.add("active");
    // Store the selected value
    selectedRating = button.dataset.rate;
  });
});

// Submition page
submitButton.addEventListener("click", () => {
  if (selectedRating) {
    givenRate.textContent = selectedRating; // Update the thank you page
    ratingPage.classList.add("hidden");
    submittedPage.classList.remove("hidden");
  } else {
    alert("Please select a rating before submitting!");
  }
});

