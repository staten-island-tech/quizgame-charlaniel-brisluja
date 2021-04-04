import { DOMSelectors } from "./DOM";
import { quizGame } from "./questions";

const displayContainer = document.getElementByClassName("container");
const buttonBox = document.getElementByClassName("button-box");
const buttonOne = document.getElementById("button1");
const buttonTwo = document.getElementById("button2");
const buttonThree = document.getElementById("button3");
const buttonFour = document.getElementById("button4");
const nextButton = document.getElementById("next");

let currentAnswerIndex = 1;

// buttonBox.addEventListener("click", function () {
//   alert("shit's happenin' man");
//   console.log(buttonBox);
// });

//first, display starting event with eventIndex = 0 using innerHTML ✅
//on click of option button, register currentAnswerIndex according to answerIndex of selected option (Do this next!!)
//on click of next button, find event whose eventIndex matches the newly updated currentAnswerIndex ✅
//use inner HTML to display that event, which closes the function and returns back to step 1!!! woohoo ✅

nextButton.addEventListener("click", function () {
  const selectedEvent = quizGame.find(
    (event) => event.eventIndex === currentAnswerIndex
  );
  //TEST: on click of onward button, change h1 to text of eventIndex = 0

  /* 
if (selectedEvent.options[1].b === '' && selectedEvent.options[2].c === '' && selectedEvent.options[3].d === '') {
buttonOne.style.visibility = 'visible';
buttonTwo.style.visibility = 'hidden';
buttonThree.style.visibility = 'hidden';
buttonFour.style.visibility = 'hidden';
}
  else if (selectedEvent.options[2].c === '' && selectedEvent.options[3].d === '') {
    buttonOne.style.visibility = 'visible';
    buttonTwo.style.visibility = 'visible';
    buttonThree.style.visibility = 'hidden';
    buttonFour.style.visibility = 'hidden';
  } 
  else if (selectedEvent.options[3].d === '') {
    buttonOne.style.visibility = 'visible';
    buttonTwo.style.visibility = 'visible';
    buttonThree.style.visibility = 'visible';
    buttonFour.style.visibility = 'hidden';
  } 
  else {
    buttonOne.style.visibility = 'visible';
buttonTwo.style.visibility = 'visible';
buttonThree.style.visibility = 'visible';
buttonFour.style.visibility = 'visible';
  }*/

  displayContainer.innerHTML = `<div id="quiz">
  <h1 id="text">${selectedEvent.question}</h1>
   <div id="button-options" class="button-box">
      <button class="button button1">${selectedEvent.options[0].a}</button>
      <button class="button button2">${selectedEvent.options[1].b}</button>
      <button class="button button3">${selectedEvent.options[2].c}</button>
      <button class="button button4">${selectedEvent.options[3].d}</button>
  </div> 
  <a class="next">Onwards!</a>`;
});
