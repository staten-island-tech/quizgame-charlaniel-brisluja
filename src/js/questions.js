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
    question: `Welcome, traveler, to the start of your Galguddian adventure!`,
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
    question: `You wake up in a dark cave, sitting in cerulean water. You don’t remember how you got here, or even where “here” is, but you are not afraid. There is a statue before you, of a woman who looks to be weeping. Clear water from the cave’s ceiling drips down her stone cheeks. Her face turns to look at you, revealing kind but sorrowful brown eyes.`,
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
    question: `"I need you to find my heart deep within this cave. I can give you paradise in return...you are the only one capable of this task. Do you accept?"`,
    options: [
      {
        a: "Accept", //goes to eventTwo
        answerIndex: 3,
      },
      {
        b: "Walk away",
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
    question: "You wake up in a grassy field… it was a dream?",
    options: [
      {
        a: "Play again?",
        answerIndex: -1,
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
    eventIndex: 4,
    question: "Wow, you didn't even try!",
    options: [
      {
        a: "Play again?",
        answerIndex: -1,
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
    eventIndex: 3,
    question: `"Thank you." You wander deeper into the cave. Before you is a door, about as tall as you are, made of oakwood. What do you do?`,
    options: [
      { a: "Leave", answerIndex: 4 },
      { b: "Look for key", answerIndex: 5 },
      { c: "Pick lock", answerIndex: 6 },
      { d: "Knock", answerIndex: 7 },
    ],
  },
  {
    eventIndex: 5, //either option on the pickKey event gives you key
    question:
      "You feel the cracks in the wall, looking for anything small and...key shaped. You find a tiny black key, the top of which is shaped like a skull.",
    options: [
      { a: "Use key", answerIndex: 8 },
      { b: "Don't use key", answerIndex: 9 },
      { c: "" },
      { d: "" },
    ],
    keyState: { key: true },
  },
  {
    eventIndex: 9,
    question: "You put the key in your pocket and start poking the door. ",
    options: [
      { a: "Leave", answerIndex: 4 },
      { b: "Pick lock", answerIndex: 6 },
      { c: "Knock", answerIndex: 7 },
      { d: "" },
    ],
  },
  {
    eventIndex: 8,
    question:
      "You put the key into the keyhole. It clicks into place, and the door pushes open.",
    options: [
      { a: "Walk through", answerIndex: 10 },
      { b: "" },
      { c: "" },
      { d: "" },
    ],
  },
  {
    eventIndex: 6,
    question:
      "You slide a small piece of metal into the keyhole, poking and prodding until you feel a click. The door swings open.",
    options: [
      { a: "Walk through", answerIndex: 10 },
      { b: "" },
      { c: "" },
      { d: "" },
    ],
  },
  {
    eventIndex: 7,
    question:
      "Nothing happens...but it was worth a try. If you listen closely though, you hear what sounds like distant breathing. That’s...something.",
    options: [
      { a: "Leave", answerIndex: 4 },
      { b: "Pick lock", answerIndex: 6 },
      { c: "" },
      { d: "" },
    ],
  },
  {
    eventIndex: 10,
    question:
      "Beyond the door is a small, dimly lit room. Opposite you in the room is a person lying slumped on the floor. They look like they’re bleeding.",
    options: [
      { a: "Help them", answerIndex: 11 },
      { b: "Loot them", answerIndex: 12 },
      { c: "" },
      { d: "" },
    ],
  },
  {
    eventIndex: 11,
    question:
      "You go over to the person, searching your pockets for bandages as you go. You find some and offer them to the person. They raise their head with effort and offer you a pained smile. 'Ah, you’re just starting', they say. 'Some advice from an experienced traveler? When you get to the fork in the road, go left.",
    options: [{ a: "Nod", answerIndex: 13 }, { b: "" }, { c: "" }, { d: "" }],
    positiveValue: +1,
  },
  {
    eventIndex: 12,
    question:
      "You stride up to them, and shamelessly pat down their sides to see what they have on them. They grunt and sit up, trying to stop you, but you won’t be deterred. Your hand closes around a spherical crystal flecked with blood.",
    options: [
      { a: "Take it and leave", answerIndex: 14 },
      { b: "" },
      { c: "" },
      { d: "" },
    ],
    negativeValue: -1,
  },
  {
    eventIndex: 13,
    question:
      "They nod back to you, holding the bandages closer to their chest. You see an opening in the wall next to them.",
    options: [
      { a: "Walk through", answerIndex: 14 },
      { b: "" },
      { c: "" },
      { d: "" },
    ],
  },
  {
    eventIndex: 14,
    question: `You hear the voice of the statue in the back of your mind. "Things are going to get more dangerous from here. Be careful." You breathe in deeply and face the next room with determination. You can see three identical chests on the floor.`,
    options: [
      { a: "Investigate", answerIndex: 15 },
      { b: "Pick a chest", answerIndex: 16 },
      { c: "" },
      { d: "" },
    ],
  },
  {
    eventIndex: 15,
    question:
      "From afar, you watch the chests. The one in the middle twitches...",
    options: [
      { a: "Pick chest 1", answerIndex: 17 },
      { b: "Pick chest 2", answerIndex: 18 },
      { c: "Pick chest 3", answerIndex: 19 },
      { d: "" },
    ],
  },
  {
    eventIndex: 16,
    question: "Choose wisely!",
    options: [
      { a: "Chest 1", answerIndex: 17 },
      { b: "Chest 2", answerIndex: 18 },
      { c: "Chest 3", answerIndex: 19 },
      { d: "Wisely", answerIndex: 16.5 },
    ], //there should be an alert or smthn here like "haha funny man, pick a real option" or some nonsense
  },
  {
    eventIndex: 16.5,
    question: "Choose a real option this time!",
    options: [
      { a: "Chest 1", answerIndex: 17 },
      { b: "Chest 2", answerIndex: 18 },
      { c: "Chest 3", answerIndex: 19 },
      { d: "" },
    ], //there should be an alert or smthn here like "haha funny man, pick a real option" or some nonsense
  },
  {
    eventIndex: 17,
    question:
      "You walk up to the chest on the left. It opens easily, although its lid is blanketed in a thick layer of dust. Inside, you find a bone. The bone is perfectly clean and white...it could be a femur? A shimmering magic doorway opens behind the chests.",
    options: [
      { a: "Go through", answerIndex: 20 },
      { b: "" },
      { c: "" },
      { d: "" },
    ],
  },
  {
    eventIndex: 19,
    question:
      "You approach the chest on the right. It opens easily, although its lid is blanketed in a thick layer of dust. Inside you find a small bag. When you open it, six perfectly shaped white dice tumble into your palm. The die with 20 sides has a skull where the 20 should be. You wonder how it got here as you tuck it into your pocket. A shimmering magic doorway opens behind the chests.",
    options: [
      { a: "Go through", answerIndex: 20 },
      { b: "" },
      { c: "" },
      { d: "" },
    ],
  },
  {
    eventIndex: 18,
    question:
      "You approach chest number 2, the middle chest. It becomes perfectly still as you reach a hand out to open it. Suddenly, its lid bursts open into a slobbering jaw, biting at your fingers! You jump back in horror!",
    options: [
      { a: "Run", answerIndex: 21 },
      { b: "Fight", answerIndex: 22 },
      { c: "Befriend", answerIndex: 23 },
      { d: "" },
    ],
  },
  {
    eventIndex: 21,
    question:
      "You run away but there’s nowhere to go but backwards! You rush into the other room and the cave’s opening shuts behind you, locking you out forever. The person on the floor chuckles. You almost got eaten!",
    options: [{ a: "AAAAA", answerIndex: 24 }, { b: "" }, { c: "" }, { d: "" }],
  },
  {
    eventIndex: 24,
    question: "Try not to be bitten next time, buddy.",
    options: [
      { a: "Play again?", answerIndex: -1 },
      { b: "" },
      { c: "" },
      { d: "" },
    ],
  },
  {
    eventIndex: 22,
    question:
      "You kick the chest! Oh my god, is it even a chest?? You have no time to wonder about it because its sharp teeth are bearing down on your fragile, human body. It bites, you evade, it roars, you punch! Eventually, you manage to subdue the chest but oh god at what cost...you’re covered in blood. A shimmering magic doorway opens behind the chests.",
    options: [
      { a: "Go Through", answerIndex: 20 },
      { b: "" },
      { c: "" },
      { d: "" },
    ],
    negativeValue: -1,
  },
  {
    eventIndex: 23,
    question:
      "You keep your breathing calm and steady as you get closer. The chest stops its attack, surprised, and looks up at you (y’know, as much as anything without eyes can look at a person). You pet its lid cautiously, and the chest calms down. It cuddles up to you, and after some time it drops a leather bracelet in your hand. A shimmering magic doorway opens behind the chests.", //alert or something: You've befriended Chester!
    options: [
      { a: "Go Through", answerIndex: 20 },
      { b: "" },
      { c: "" },
      { d: "" },
    ],
    positiveValue: +1,
  },
  {
    eventIndex: 20,
    question:
      "You go through the doorway and feel a rush of unease. A booming voice coming from everywhere at once says “What has many keys but can’t open a single lock?”",
    options: [
      { a: "Piano", answerIndex: 25 },
      { b: "Puzzle", answerIndex: 20 },
      { c: "Map", answerIndex: 20 },
      { d: "Chest", answerIndex: 20 }, //idk, I still think we need a text input here,,,and piano music pleaseee
    ],
  },
  {
    eventIndex: 25,
    question:
      "You speak the answer out loud and the booming voice subsides. A cold rush of wind forces your eyes shut and you feel like you’re moving, but you can’t tell what direction you’re going in. When you finally pry your eyes open, there is a fork in the road in front of you.",
    options: [
      { a: "Go left", answerIndex: 26 },
      { b: "Go right", answerIndex: 27 },
      { c: "" },
      { d: "" },
    ],
  },
  {
    eventIndex: 26,
    question:
      "On the left is a simple podium, holding a crystal. The crystal is heart shaped, floating in midair, radiating warmth and a calm white light.",
    options: [
      { a: "Take it", answerIndex: "" },
      { b: "" },
      { c: "" },
      { d: "" },
    ],
  },
  {
    eventIndex: 27,
    question:
      "You head down the right path and a room of glimmering jewels and golden coins reveals itself. There are more riches here than you’ve seen in your entire life, more than you could fathom!",
    options: [
      { a: "Take a coin", answerIndex: 29 },
      { b: "Give a coin", answerIndex: 30 },
      { c: "" },
      { d: "" },
    ],
    //if a -1 negativeValue, if b +1 positive, it should be here b/c it has to be recorded before the next screen
  },
  {
    eventIndex: 29, //positives and negatives,,,,idk
    question:
      "You pick up a large golden coin from the pile. Surely no one will miss this, seeing as there’s so much else here. The ground rumbles as a massive dragon with wiry bat wings bursts through the pile of riches!! It’s eyes are as tall as you are, and its fetid breath washes over you.",
    options: [
      { a: "Fight", answerIndex: 31 },
      { b: "Befriend", answerIndex: 32 },
      { c: "" },
      { d: "" },
    ],
    negativeValue: -1,
  },
  {
    eventIndex: 30,
    question:
      "You scrounge around in your pack and come up with a small, silver coin. It isn’t much but you feel sort of proud as it clinks against the coins beneath you. The ground rumbles as a massive dragon with wiry bat wings bursts through the pile of riches!! Its eyes are as tall as you are, and its fetid breath washes over you.",
    options: [
      { a: "Fight", answerIndex: 31 },
      { b: "Befriend", answerIndex: 32 },
      { c: "" },
      { d: "" },
    ],
    positiveValue: +1,
  },
  {
    eventIndex: 31,
    question:
      "You punch it, as hard as you can, and fight like your life depends on it! It takes everything you’ve got, what feels like more than you can give, but finally you...lose. The dragon roars ferociously and you are rocketed back, hitting a nearby wall.",
    options: [
      { a: "What...", answerIndex: "" },
      { b: "" },
      { c: "" },
      { d: "" },
    ],
    negativeValue: -1,
  }, //check if good or if bad...we'll figure it out, I'm too tired rn
  {
    eventIndex: 32,
    question:
      "You reach your hand out to the dragon, as if it were a large dog. It regards you for a moment, taking stock of your inventory and soul in ways you would not imagine it capable of. After some time, it lowers its head to let you pet it. It moves away, bringing you back a large and glowing white crystal, shaped like a heart. You feel warmth radiating off of it, as the dragon gives you a knowing smile.", //idk
    options: [
      { a: "Take it", answerIndex: "" },
      { b: "" },
      { c: "" },
      { d: "" },
    ],
  },
  {
    eventIndex: 33,
    question:
      "You blink, and when you open your eyes, you are back with the statue in the pool of water cave you woke up in. A smile cracks onto her stony face as she gently takes her heart from you. Her eyes are warm and loving, as she reaches out a hand",
    options: [
      { a: "Take her hand", answerIndex: 34 },
      { b: "" },
      { c: "" },
      { d: "" },
    ],
  },
  {
    eventIndex: 34,
    question:
      "You take her hand and wake up in a grassy field. The sun beats down on you, and your family is waiting. You close your laptop and sit up as your favorite pet rushes to greet you. All is right in the world.",
    options: [
      { a: "Play again?", answerIndex: -1 },
      { b: "Use key?", requiredState: (keyState) => keyState.key },
      { c: "" },
      { d: "" },
      // { b: "Use key?", answerIndex: 35 } should have key option here too? also some sort of alert like "Congratulations! You have achieved contentment. I’m happy for you!"
    ],
  },
  {
    eventIndex: 36,
    question:
      "You pry your eyes open with some effort, and find yourself bloody and tired, slumped on the floor. You move your neck and feel it crack. In fact, all your bones seem to creak at any movement at all. Your parched throat screams for water. You wait. And wait. And wait. And finally, you see a traveler approach. It seems...oh my god, it’s you. It’s you, but without the pain, and without the burden of past choices. You can only hope they make the choices you didn’t.",
    options: [
      { a: "Play again?", answerIndex: -1 },
      { b: "" },
      { c: "" },
      { d: "" },
      //{ b: "Use key", answerIndex: 35 }
    ],
  }, //some kind of alert: "Congratulations! You were subjected to eternal torment!"
];

export { quizGame };
