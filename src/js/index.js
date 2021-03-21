//grabs text and button elements
/* const textElement = document.getElementById("text");
const optionButtonsElement = document.getElementById("button-options");
//this will be important for keeping track of moral positives/negatives as well as inventory
let state = {};
//the showTextNode starts the player at the first page
function startGame() {
  state = {};
  showTextNode(1);
}
function showTextNode(textNodeIndex) {
  //this grabs the text node, finds the one that has the current ID that we want to show
  const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);
  //the inner text node will be set equal to the text at the idea we grabbed above
  textElement.innerText = textNode.text;
  //removing all the buttons
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }
  //deciding which option to show, cycling through them
  textNode.options.forEach((option) => {
    //check if we can show the option, pass in option and you can show it,
    if (showOption(option)) {
      //creating button
      const button = document.createElement("button");
      //setting text
      button.innerText = option.text;
      //setting class
      button.classList.add("button");
      //click event listener
      button.addEventListener("click", () => selectOption(option));
      //adding button to the option button element group
      optionButtonsElement.appendChild(button);
    }
  });
} */
