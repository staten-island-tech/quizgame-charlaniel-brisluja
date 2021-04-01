import { DOMSelectors } from "./DOM";
import { quizGame, endings } from "./questions";

//listen to selection of answer choice (a-d)
//when next button is clicked, take answerIndexValue of answer choice
//then within the quiz game array, find the object whose eventIndexValue === answerIndexValue of answer choice
//grab object w/ correpsonding index value
//display said object
//rinse and repeat

// function hellYeah() {
//   const um = document.getElementById("next");
//   next.addEventListener("click", alert("hiya"));
// }
const nextButton = document.querySelector('#next');
nextButton.addEventListener('click', function(alertTest) {
  alert("Great success!!");
});

