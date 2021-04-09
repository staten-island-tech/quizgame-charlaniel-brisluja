import { DOMSelectors } from "./DOM";
import { quizGame } from "./questions";

function start() {
  let currentAnswerIndex = -1; //-1 is the starting "welcome" page
  let currentKeyState = undefined; //leaving undefined, undefined returns false, at key event it will return true (see variable below)
  let currentPositiveValue = 0; //we...haven't figured these out yet
  let currentNegativeValue = 0;

  DOMSelectors.nextButton.onclick = displayEvent;
  window.onload = displayEvent; //makes displayEvent happen both when the next button (which we're getting rid of??) is clicked + when page is loaded

  function displayEvent() {
    let selectedEvent = quizGame.find(
      (event) => event.eventIndex === currentAnswerIndex
    ); //main function, finds the event whose evenIndex is currently on the screen and makes it equal to the currentAnswerIndex
    DOMSelectors.question.innerHTML = selectedEvent.question;
    DOMSelectors.buttonOne.innerHTML = selectedEvent.options[0].a;
    DOMSelectors.buttonTwo.innerHTML = selectedEvent.options[1].b;
    DOMSelectors.buttonThree.innerHTML = selectedEvent.options[2].c;
    DOMSelectors.buttonFour.innerHTML = selectedEvent.options[3].d; //these guys just make the innerHTMl (text) of the questions/answers equal the current question/answers displated at the currentAnswerIndex based on given values (defined mainly by a-d)
    if (selectedEvent.options[1].b === "") {
      DOMSelectors.buttonOne.style.display = "inline-block";
      DOMSelectors.buttonTwo.style.display = "none";
      DOMSelectors.buttonThree.style.display = "none";
      DOMSelectors.buttonFour.style.display = "none";
    } else if (
      selectedEvent.options[2].c === "" &&
      selectedEvent.options[3].d === ""
    ) {
      DOMSelectors.buttonOne.style.display = "inline-block";
      DOMSelectors.buttonTwo.style.display = "inline-block";
      DOMSelectors.buttonThree.style.display = "none";
      DOMSelectors.buttonFour.style.display = "none";
    } else if (selectedEvent.options[3].d === "") {
      DOMSelectors.buttonOne.style.display = "inline-block";
      DOMSelectors.buttonTwo.style.display = "inline-block";
      DOMSelectors.buttonThree.style.display = "inline-block";
      DOMSelectors.buttonFour.style.display = "none";
    } else {
      DOMSelectors.buttonOne.style.display = "inline-block";
      DOMSelectors.buttonTwo.style.display = "inline-block";
      DOMSelectors.buttonThree.style.display = "inline-block";
      DOMSelectors.buttonFour.style.display = "inline-block";
    }
    if (
      selectedEvent.options[1].b === "" &&
      selectedEvent.options[2].c === "" &&
      selectedEvent.options[3].d === ""
    ) {
      DOMSelectors.buttonBox.style.gridTemplateColumns = "1fr";
      DOMSelectors.buttonBox.style.padding = "0 25%";
    } else {
      DOMSelectors.buttonBox.style.gridTemplateColumns = "1fr 1fr";
      DOMSelectors.buttonBox.style.padding = "0";
    }
    if (selectedEvent.eventIndex === 5) {
      currentKeyState = true; //makes key value equal true :)
      alert("You found a key! This will come in handy later...");
    } else if (selectedEvent.eventIndex === 6) {
      alert("You're a real roguish fellow, aren't ye?");
    } //alerts for key values + rogue at eventIndexes
    if (selectedEvent.hasOwnProperty("negativeValue")) {
      currentNegativeValue += selectedEvent.negativeValue;
      alert(currentNegativeValue);
    } //negatives + positives, still developing
    if (selectedEvent.hasOwnProperty("positiveValue")) {
      currentPositiveValue += selectedEvent.positiveValue;
      alert(currentPositiveValue);
    }
    //if (selectedEvent.eventIndex === x) {
    //alert("Ha! Choose a real option, wise guy! (see what I did there? hehe)")
    //}
  }

  document.addEventListener("click", function (option) {
    let selectedEvent = quizGame.find(
      (event) => event.eventIndex === currentAnswerIndex
    ); //same as above! shoutout to us for making our entire game work by putting this goblin in both functions
    if (option.target === DOMSelectors.buttonOne) {
      currentAnswerIndex = selectedEvent.options[0].answerIndex;
      alert(currentAnswerIndex);
    } else if (option.target === DOMSelectors.buttonTwo) {
      currentAnswerIndex = selectedEvent.options[1].answerIndex;
      alert(currentAnswerIndex);
    } else if (option.target === DOMSelectors.buttonThree) {
      currentAnswerIndex = selectedEvent.options[2].answerIndex;
      alert(currentAnswerIndex);
    } else if (option.target === DOMSelectors.buttonThree) {
      currentAnswerIndex = selectedEvent.options[3].answerIndex;
      alert(currentAnswerIndex);
    } //these address iffff each individual button is clicked, then the currentAnswerIndex will be updated according to the answerIndex of the button clicked!
  });
}

start();
