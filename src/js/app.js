import { DOMSelectors } from "./DOM";
import { quizGame, endings } from "./questions";

function hellYeah() {
  const um = document.getElementById("next");
  um.addEventListener("click", alert("trying"));
}
hellYeah();
