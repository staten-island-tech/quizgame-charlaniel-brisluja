import { DOMSelectors } from "./DOM";
import { quizGame, endings } from "./questions";

//listen to selection of answer choice (a-d)
//when next button is clicked, take answerIndexValue of answer choice
//then within the quiz game array, find the object whose eventIndexValue === answerIndexValue of answer choice
//grab object w/ correpsonding index value
//display said object
//rinse and repeat

let currentAnswerIndex = 0;

const nextButton = document.querySelector('#next');
//first, display starting event with eventIndex = 0 using innerHTML
//on click of option button, register currentAnswerIndex according to answerIndex of selected option
//on click of next button, find event whose eventIndex matches the newly updated currentAnswerIndex
//use inner HTML to display that event, which closes the function and returns back to step 1!!! woohoo

nextButton.addEventListener('click', function() {
  const selectedEvent = quizGame.find(event => event.eventIndex === currentAnswerIndex);
  //TEST: on click of onward button, change h1 to text of eventIndex = 0
  const displayContainer = document.querySelector('.container');
  displayContainer.innerHTML =
  `<div id="quiz">
  <h1 id="text">${selectedEvent.question}</h1>
   <div id="button-options" class="button-box">
      <button class="button">${selectedEvent.options[0].a}</button>
      <button class="button">${selectedEvent.options[0].b}</button>
      <button class="button">${selectedEvent.options[0].c}</button>
      <button class="button">${selectedEvent.options[0].d}</button>
  </div> 
  <a class="next">Onwards!</a>`;
  //console.log(selectedEvent.options${this.name});
});
/*
const gross = 
[
  {
    grossIndex: 9,
    grossStuff: [
  {fart: 'smelly'},
  {poop: 'sticky'},
  {pee: 'secretion'},
  ],
},
];

const array = gross.grossStuff;
console.log(array);
*/

// const selectedAnswer = quizGame.startScreen;
// console.log(selectedAnswer);




//const selected answer = grab the answerIndex of the selected answer/option (console.log it to see if you got it but actually that prob wont work bcuz we didnt even get up to that yet????????????????????)
//this changes the currentAnswerIndex
//which prepares you for the find event function

//on click of next button, the currentAnswerIndex changes to the answerIndex of the selected option

//after that you do this

const selectedEvent = quizGame.find(event => event.eventIndex === currentAnswerIndex);
//change inner HTML of h1 and buttons to the "question" and "options" of selectedEvent