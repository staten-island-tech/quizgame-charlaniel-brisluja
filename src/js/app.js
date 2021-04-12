import { DOMSelectors } from "./DOM";
import { quizGame } from "./questions";

function start() {
  let currentAnswerIndex = -1; //-1 is the starting "welcome" page
  let currentKeyState = undefined; //leaving undefined, undefined returns false, at key event it will return true (see variable below)
  let currentPositiveValue = 0; //we...haven't figured these out yet
  let currentNegativeValue = 0;

  //inserts info from welcome page (CAI -1) into html, we are having issues w/ it b/c it breaks the going from button option 0 to next page

  //shit dont work

  //DOMSelectors.nextButton.onclick = displayEvent;
  window.onload = displayEvent;

  function displayEvent() {
    let selectedEvent = quizGame.find(
      (event) => event.eventIndex === currentAnswerIndex
    ); //main function, finds the event whose evenIndex is currently on the screen and makes it equal to the currentAnswerIndex
    DOMSelectors.question.innerHTML = selectedEvent.question;
    DOMSelectors.buttonOne.innerHTML = selectedEvent.options[0].a;
    DOMSelectors.buttonTwo.innerHTML = selectedEvent.options[1].b;
    DOMSelectors.buttonThree.innerHTML = selectedEvent.options[2].c;
    DOMSelectors.buttonFour.innerHTML = selectedEvent.options[3].d;
  
    if (
      (selectedEvent.options[1].b === "" && selectedEvent.options[2].c === "" && selectedEvent.options[3].d === "") || (selectedEvent.hasOwnProperty("keyState") && currentKeyState === undefined)) {
      DOMSelectors.buttonOne.style.display = "inline-block";
      DOMSelectors.buttonTwo.style.display = "none";
      DOMSelectors.buttonThree.style.display = "none";
      DOMSelectors.buttonFour.style.display = "none";
    } else if (
      selectedEvent.options[2].c === "" && selectedEvent.options[3].d === ""
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
    if (selectedEvent.hasOwnProperty("keyState")) {
      DOMSelectors.buttonTwo.style.backgroundColor = "var(--cyan-color)";
      DOMSelectors.buttonTwo.style.fontSize = "4rem";
      DOMSelectors.buttonTwo.style.border = "0.5rem solid var(--purple-color)";
    } else {
      DOMSelectors.buttonTwo.style.backgroundColor = "var(--blue-color)";
      DOMSelectors.buttonTwo.style.fontSize = "2.25rem";
      DOMSelectors.buttonTwo.style.border = "0.5rem solid var(--yellow-color)";
    }
  }
  function alerts () {
    let selectedEvent = quizGame.find(
      (event) => event.eventIndex === currentAnswerIndex
    );
    if (selectedEvent.eventIndex === 5) {
    currentKeyState = true;
    alert("You found a key! This will come in handy later...");
    return currentKeyState;
  } else if (selectedEvent.eventIndex === 6) {
    alert("You're a real roguish fellow, aren't ye?");
  } else if (selectedEvent.eventIndex === 16.5) {
    alert("Ha! Choose a real option, wise guy! (see what I did there? hehe)");
  }
}
function moralState () {
  let selectedEvent = quizGame.find(
    (event) => event.eventIndex === currentAnswerIndex
  );
  if (selectedEvent.hasOwnProperty("negativeValue")) {
    currentNegativeValue += selectedEvent.negativeValue;
    return currentNegativeValue;
  } else if (selectedEvent.hasOwnProperty("positiveValue")) {
    currentPositiveValue += selectedEvent.positiveValue;
    return currentPositiveValue;
  }
}


  DOMSelectors.displayQuiz.addEventListener("click", function (option) {
    let selectedEvent = quizGame.find(
      (event) => event.eventIndex === currentAnswerIndex
    ); //same as above! shoutout to us for making our entire game work by putting this goblin in both functions
    if (option.target === DOMSelectors.buttonOne) {
      currentAnswerIndex = selectedEvent.options[0].answerIndex;
      console.log(currentKeyState);
    } else if (option.target === DOMSelectors.buttonTwo) {
      currentAnswerIndex = selectedEvent.options[1].answerIndex;
      console.log(currentKeyState);
    } else if (option.target === DOMSelectors.buttonThree) {
      currentAnswerIndex = selectedEvent.options[2].answerIndex;
      console.log(currentKeyState);
    } else if (option.target === DOMSelectors.buttonFour) {
      currentAnswerIndex = selectedEvent.options[3].answerIndex;
      console.log(currentKeyState);
    }
    console.log(selectedEvent.hasOwnProperty("keyState"));
    displayEvent();
    alerts();
    moralState();
  });
}

start();
