/*Questions Notes:

Positives and Negatives Info:
There are four positive choices and two negatives for the dragon interaction. 
IF THE PERSON GOT TWO OUT OF FOUR OF THE POSITIVES, THEY HAVE THE OPPORTUNITY TO BEFRIEND THE DRAGON. IF THE PERSON HAS TWO OF TWO NEGATIVES, THEY MUST FIGHT THE DRAGON.
POSITIVES = GOT FEMUR BONE FROM CHEST, BEFRIENDED CHESTER, GIVE COIN (it is possible to get two of four if and only if one of the conditions in the chest room is met)
NEGATIVES = STOLE FROM PERSON AND GOT CRYSTAL, FOUGHT CHESTER 

the endings are at: 2(waking up in grassy field), 4(wow you didn't even try),33+34(good),36(bad)
FOR ENDINGS: THERE ARE FIVE POSITIVES AND THREE NEGATIVES, IF 3/5 POSITIVES ARE MET, GO TO GOOD, IF 2/3 NEGATIVES, GO TO BAD (additional positive/negatives are in the dragon fight, befriend is positive and fight is negative)

36 is use key, it's not written yet

ENDINGS AREN'T CONNECTED YET, ANYTHING WITH AN EMPTY anwerIndex IS SUPPOSED TO TAKE YOU TO AN ENDING

We have to figure out the door room, if they already tried one of the options it shouldn't show up for them again. 

The piano options show up vertically instead of in a grid for reasons I don't understand,,,maybe cause 3/4 of them have an answerIndex equal to the eventIndex of that page??
*/

const quizGame = [
  {
    eventIndex: -1,
    question: `Welcome, Mr. Whalen, to the start of your Galguddian adventure!`,
    //name prompt, eventually ??
    options: [
      { a: "Start Adventure!", answerIndex: 0 },
      {
        b: "",
      },
      {
        c: "",
      },
      {
        d: "",
      },
    ],
  },
  {
    eventIndex: 0,
    question: `You see a statue of a woman.`,
    options: [
      {
        a: "Listen to her",
        answerIndex: 1,
      },
      {
        b: "",
      },
      {
        c: "",
      },
      {
        d: "",
      },
    ],
  },
  {
    eventIndex: 1,
    question: `The statue pleads, "Your favorite students Charley and Daniel don't want to have a "next" button for their project. They think it looks cooler without it. What is your decision?"`,
    options: [
      {
        a: "Accept your students' wishes", //goes to eventTwo
        answerIndex: 3,
      },
      {
        b: "Be a monkey (a gibbon)",
        answerIndex: 2,
      },
      {
        c: "",
      },
      {
        d: "",
      },
    ],
  },
  {
    eventIndex: 2,
    question: "So you have chosen death. You shall now incur the wrath of our giant bug. The solution, if it exists, is so complicated your head will explode.",
    options: [
      {
        a: "Play again? (choose the right option this time, Mr. Whalen...)",
        answerIndex: -1,
      },
      {
        b: "Accept your fate and help Daniel with the bug",
        answerIndex: 4,
      },
      {
        c: "",
      },
      {
        d: "",
      },
    ],
  },
  {
    eventIndex: 3,
    question: `"Thank you." The statue's stone surface evaporates, revealing a beautiful angel. The angel flies away into heaven, splashing a puddle of water on its way. The water droplets create a mirage of Charley and Daniel's smiling faces.`,
    options: [
      { a: "You are not a monkey. You are King Kong. Amazing. You win!!", answerIndex: -1},
      {
        b: "",
      },
      {
        c: "",
      },
      {
        d: "",
      },
    ],
  },
  {
    eventIndex: 4,
    question: `End of quiz game. It's debugging time.`,
    options: [
      { a: "Try again (last chance!!)", answerIndex: -1},
      {
        b: "",
      },
      {
        c: "",
      },
      {
        d: "",
      },
    ],
  }
];

export { quizGame };
