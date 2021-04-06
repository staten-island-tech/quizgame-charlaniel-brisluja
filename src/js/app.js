import { DOMSelectors } from "./DOM";
import { quizGame } from "./questions";

function start() {
  //let keyIndex = null; trying to figure out how to add key object to state, can't do it until rest of nonsense gets figured out

  //sets currentAnswerIndex to the event page we are currently on, -1 is the welcome page
  let currentAnswerIndex = -1;
  //finds the event whose eventIndex equals the CAI thereby finding the welcome page
  let selectedEvent = quizGame.find(
    (event) => event.eventIndex === currentAnswerIndex
  );
  //THESE DON'T WORK ARE MEAN TO US
  //intent is to set the CAI equal to the answerIndex that is updated on click of OPTION button and ONWARDS button (it should be just at option button rn)
  //addEventListener isn't working rn, the rest is

  //inserts info from welcome page (CAI -1) into html, we are having issues w/ it b/c it breaks the going from button option 0 to next page
  DOMSelectors.displayContainer.innerHTML = `<div id="quiz">
  <h1 id="text">${selectedEvent.question}</h1>
   <div id="button-options" class="button-box">
      <button class="button button1">${selectedEvent.options[0].a}</button>
      <button class="button button2">${selectedEvent.options[1].b}</button>
      <button class="button button3">${selectedEvent.options[2].c}</button>
      <button class="button button4">${selectedEvent.options[3].d}</button>
  </div> 
  <a class="next">Onwards!</a>`;

  DOMSelectors.buttonOne.addEventListener("click", function () {
    currentAnswerIndex = selectedEvent.options[0].answerIndex;
    alert(currentAnswerIndex);
  });
  //this is supposed to repeat what is done for the start of the game above with the subsequent eventIndexes and CAIs, it works but isn't currently b/c the above function is not working
  DOMSelectors.nextButton.addEventListener("click", function () {
    let selectedEvent = quizGame.find(
      (event) => event.eventIndex === currentAnswerIndex
    );
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
}

start();
