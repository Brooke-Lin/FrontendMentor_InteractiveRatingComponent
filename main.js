console.clear();

// interactive with rating numbers
const ratingButtons = document.querySelectorAll(".rating-button-item");
const givenRate = document.getElementById("given-rate");

let selectedRate = null;

  ratingButton.forEach((btn,index)=>{
    btn.addEventListener('click',(e)=>{
      let currentSelection = e.target.dataset.rate;
      console.log(`selectedR:${selectedRate}, CurrentSelection: ${currentSelection},${index}`);
      
        // return early if the number is selected already
      if(selectedRate && selectedRate == currentSelection) return;
      
      // Otherwise  remove selected class
      if(selectedRate){
        ratingButton[Number(selectedRate)-1].classList.remove('selected');
      }
      
      //add class to selected button/number
      ratingButton[currentSelection-1].classList.add('selected');
      
      // Then set current selection as selected rate
      selectedRate = currentSelection;
      
      // The givenRate will be changed when selectedRate is change although it is not display on the screen
      givenRate.innerHTML = selectedRate;
      console.log(givenRate);
          
      // Stop the event from bubbling up
      e.stopPropagation(); 
    })
    
  })



// change page information when hit the submit button
const RatingPage = document.querySelector(".rating-page");
const SubmittedPage = document.querySelector(".submitted-page");
const SumitFormButton = document.querySelector("button.submit-button");


SumitFormButton.addEventListener('click',function(){
  pageRendering(true);
  
})

function pageRendering(isSubmitted=false){
  if(!isSubmitted) return;
  
  RatingPage.classList.add('hidden');
  SubmittedPage.classList.remove('hidden');
}
