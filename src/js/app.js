import { DOMSelectors } from "./DOM";
import { quizGame } from "./questions";

let currentAnswerIndex = -1;

// const buttonOne = document.querySelector("#button1");
// const buttonTwo = document.querySelector("#button2");
// const buttonThree = document.querySelector("#button3");
// const buttonFour = document.querySelector("#button4");

DOMSelectors.displayContainer.addEventListener("onload", function () {
  innerHTML = `<div id="quiz">
 <h1 id="text">${quizGame[0].question}</h1>
 <div id="button-options" class="button-box">
    <button class="button button1">${quizGame[0].options.a}</button>
    <button class="button button2">${quizGame[1].options.b}</button>
    <button class="button button3">${quizGame[2].options.c}</button>
    <button class="button button4">${quizGame[3].options.d}</button>
 </div>
 <a class="next">Onwards!</a>`;
  console.log(quizGame[0].question);
});

const selectedEvent = quizGame.find(
  (event) => event.eventIndex === currentAnswerIndex
);

DOMSelectors.buttonOne.addEventListener("click", function () {
  currentAnswerIndex = selectedEvent.options[0].answerIndex;
  alert(currentAnswerIndex);
});
DOMSelectors.buttonTwo.addEventListener("click", function () {
  currentAnswerIndex = selectedEvent.options[1].answerIndex;
  alert(currentAnswerIndex);
});
DOMSelectors.buttonThree.addEventListener("click", function () {
  currentAnswerIndex = selectedEvent.options[2].answerIndex;
  alert(currentAnswerIndex);
});
DOMSelectors.buttonFour.addEventListener("click", function () {
  currentAnswerIndex = selectedEvent.options[3].answerIndex;
  alert(currentAnswerIndex);
});

//first, display starting event with eventIndex = 0 using innerHTML ✅
//on click of option button, register currentAnswerIndex according to answerIndex of selected option (Do this next!!)
//on click of next button, find event whose eventIndex matches the newly updated currentAnswerIndex ✅
//use inner HTML to display that event, which closes the function and returns back to step 1!!! woohoo ✅

DOMSelectors.nextButton.addEventListener("click", function () {
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

  DOMSelectors.displayContainer.innerHTML = `<div id="quiz">
  <h1 id="text">${selectedEvent.question}</h1>
   <div id="button-options" class="button-box">
      <button class="button button1">${selectedEvent.options[0].a}</button>
      <button class="button button2">${selectedEvent.options[1].b}</button>
      <button class="button button3">${selectedEvent.options[2].c}</button>
      <button class="button button4">${selectedEvent.options[3].d}</button>
  </div> 
  <a class="next">Onwards!</a>`;
});
