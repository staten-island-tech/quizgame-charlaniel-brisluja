import { DOMSelectors } from "./DOM";
import { quizGame } from "./questions";

function start() {
  //let keyIndex = null; trying to figure out how to add key object to state, can't do it until rest of nonsense gets figured out

  //sets currentAnswerIndex to the event page we are currently on, -1 is the welcome page
  let currentAnswerIndex = -1;
  // let currentKeyState = undefined;
  let currentPositiveValue = 0;
  let currentNegativeValue = 0;
  //finds the event whose eventIndex equals the CAI thereby finding the welcome page

  //THESE DON'T WORK ARE MEAN TO US
  //intent is to set the CAI equal to the answerIndex that is updated on click of OPTION button and ONWARDS button (it should be just at option button rn)
  //addEventListener isn't working rn, the rest is

  //inserts info from welcome page (CAI -1) into html, we are having issues w/ it b/c it breaks the going from button option 0 to next page

  //shit dont work

  //DOMSelectors.nextButton.onclick = displayEvent;
  window.onload = displayEvent;

  function displayEvent() {
    let selectedEvent = quizGame.find(
      (event) => event.eventIndex === currentAnswerIndex
    );
    DOMSelectors.question.innerHTML = selectedEvent.question;
    DOMSelectors.buttonOne.innerHTML = selectedEvent.options[0].a;
    DOMSelectors.buttonTwo.innerHTML = selectedEvent.options[1].b;
    DOMSelectors.buttonThree.innerHTML = selectedEvent.options[2].c;
    DOMSelectors.buttonFour.innerHTML = selectedEvent.options[3].d;
    if (
      selectedEvent.options[1].b === "" &&
      selectedEvent.options[2].c === "" &&
      selectedEvent.options[3].d === ""
    ) {
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
      alert("You found a key! This will come in handy later...");
    } else if (selectedEvent.eventIndex === 6) {
      alert("You're a real roguish fellow, aren't ye?");
    } else if (selectedEvent.eventIndex === 16.5) {
      alert("Ha! Choose a real option, wise guy! (see what I did there? hehe)");
    }
    if (currentKeyState === true) {
      alert("true");
    }
    if (selectedEvent.hasOwnProperty("negativeValue")) {
      currentNegativeValue += selectedEvent.negativeValue;
      alert(currentNegativeValue);
    }
    if (selectedEvent.hasOwnProperty("positiveValue")) {
      currentPositiveValue += selectedEvent.positiveValue;
      alert(currentPositiveValue);
    }
    returnKeyState();
  }
  function returnKeyState() {
    return (
      selectedEvent.options[1].b.requiredState == null ||
      selectedEvent.options[1].b.requiredState(keyState)
    );
  }

  DOMSelectors.displayQuiz.addEventListener("click", function (option) {
    let selectedEvent = quizGame.find(
      (event) => event.eventIndex === currentAnswerIndex
    );
    if (option.target === DOMSelectors.buttonOne) {
      currentAnswerIndex = selectedEvent.options[0].answerIndex;
      //alert(currentAnswerIndex);
    } else if (option.target === DOMSelectors.buttonTwo) {
      currentAnswerIndex = selectedEvent.options[1].answerIndex;
      //alert(currentAnswerIndex);
    } else if (option.target === DOMSelectors.buttonThree) {
      currentAnswerIndex = selectedEvent.options[2].answerIndex;
      //alert(currentAnswerIndex);
    } else if (option.target === DOMSelectors.buttonFour) {
      currentAnswerIndex = selectedEvent.options[3].answerIndex;
      //alert(currentAnswerIndex);
    }
    displayEvent();
  });
}

start();
