const ratingButtons = document.querySelectorAll(".rating-button-items"); 
const submitButton = document.querySelector(".submit-button");
const ratingPage = document.querySelector(".rating-page");
const submittedPage = document.querySelector(".submitted-page");
const givenRate = document.getElementById("given-rate");

let selectedRating = null;

// Rating selection
ratingButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    ratingButtons.forEach(btn => btn.classList.remove("active"));
    // Add active class to clicked button
    button.classList.add("active");
    // Store the selected rating
    selectedRating = button.dataset.rate;
  });
});

// Submit button click
submitButton.addEventListener("click", (e) => {
  e.preventDefault(); // prevent form reload if inside <form>
  
  if (selectedRating) {
    givenRate.textContent = selectedRating; // update rating on thank you page
    ratingPage.classList.add("hidden");
    submittedPage.classList.remove("hidden");
  } else {
    alert("Please select a rating before submitting!");
  }
});
