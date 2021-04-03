import { DOMSelectors } from "./DOM";
import { quizGame } from "./questions";

//listen to selection of answer choice (a-d)
//when next button is clicked, take answerIndexValue of answer choice
//then within the quiz game array, find the object whose eventIndexValue === answerIndexValue of answer choice
//grab object w/ correpsonding index value
//display said object
//rinse and repeat

let currentAnswerIndex = 1;

const nextButton = document.querySelector('#next');
//first, display starting event with eventIndex = 0 using innerHTML ✅ 
//on click of option button, register currentAnswerIndex according to answerIndex of selected option (Do this next!!)
//on click of next button, find event whose eventIndex matches the newly updated currentAnswerIndex ✅
//use inner HTML to display that event, which closes the function and returns back to step 1!!! woohoo ✅

nextButton.addEventListener('click', function() {
  const selectedEvent = quizGame.find(event => event.eventIndex === currentAnswerIndex);
  //TEST: on click of onward button, change h1 to text of eventIndex = 0
  const optionsArray = selectedEvent.options;
  const displayContainer = document.querySelector('.container');
  displayContainer.innerHTML =
  `<div id="quiz">
  <h1 id="text">${selectedEvent.question}</h1>
   <div id="button-options" class="button-box">
      <button class="button button1">${optionsArray[0].a}</button>
      <button class="button button2">${optionsArray[1].b}</button>
      <button class="button button3">${optionsArray[2].c}</button>
      <button class="button button4">${optionsArray[3].d}</button>
  </div> 
  <a class="next">Onwards!</a>`;

  const buttonOne = document.getElementById('button1');
  const buttonTwo = document.getElementById('button2');
  const buttonThree = document.getElementById('button3');
  const buttonFour = document.getElementById('button4');
  
  /*if (optionsArray.length = 1) {
buttonOne.style.display = 'inline-block';
buttonTwo.style.display = 'none';
buttonThree.style.display = 'none';
buttonFour.style.display = 'none';
  } 
  else if (optionsArray.length = 2) {
    buttonOne.style.display = 'inline-block';
    buttonTwo.style.display = 'inline-block';
    buttonThree.style.display = 'none';
    buttonFour.style.display = 'none';
  } 
  else if (optionsArray.length = 3) {
    buttonOne.style.display = 'inline-block';
    buttonTwo.style.display = 'inline-block';
    buttonThree.style.display = 'inline-block';
    buttonFour.style.display = 'none';
  } 
  else {
    buttonOne.style.display = 'inline-block';
buttonTwo.style.display = 'inline-block';
buttonThree.style.display = 'inline-block';
buttonFour.style.display = 'inline-block';
  }
  */
});
