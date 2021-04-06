//I have to go back and replace all the quotation marks with backtics for the questions that have dialogue
//this is actually so tedious
//there are six events and five questions because I counted the door as an event in the code and not on the doc
/*Positives and Negatives Info:
There are four positive choices and two negatives for the dragon interaction. 
IF THE PERSON GOT TWO OUT OF FOUR OF THE POSITIVES, THEY HAVE THE OPPORTUNITY TO BEFRIEND THE DRAGON. IF THE PERSON HAS TWO OF TWO NEGATIVES, THEY MUST FIGHT THE DRAGON.
POSITIVES = GOT FEMUR BONE FROM CHEST, BEFRIENDED CHESTER, GIVE COIN (it is possible to get two of four if and only if one of the conditions in the chest room is met)
NEGATIVES = STOLE FROM PERSON AND GOT CRYSTAL, FOUGHT CHESTER */

// object >> array >> ((object))

const quizGame = [
  {
    eventIndex: -1,
    question: `Welcome traveler, to the start of your Galguddian adventure!`,
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
    question: `You wake up in a dark cave, submerged in crystalline water. You don’t remember how you got here, or even where “here” is, but you are not afraid. There is a statue before you, of a woman who looks to be weeping. Clear water from the cave’s ceiling drips down her stone cheeks. Her face turns to look at you, revealing kind but sorrowful brown eyes.`,
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
    question: `"I need you to find my heart, deep within this cave. I can give you paradise in return...you are the only one capable of this task. Do you accept?"`,
    options: [
      {
        a: "Accept", //goes to eventTwo
        answerIndex: 3,
      },
      {
        b: "Walk away",
        answerIndex: 2,
        keyState: { key: true },
      },
      {
        c: "",
      },
      {
        d: "",
      },
    ],
  },
];
/*
const quizGame = [
  {
    startScreen: {
      eventIndex: -1,
      question: `You wake up in a dark cave, submerged in crystalline water. You don’t remember how you got here, or even where “here” is, but you are not afraid. There is a statue before you, of a woman who looks to be weeping. Clear water from the cave’s ceiling drips down her stone cheeks. Her face turns to look at you, revealing kind but sorrowful brown eyes.`,
      options: [
        {
          a: "Listen to her",
          answerIndex: 1,
        },{
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
    eventOne: {
      eventIndex: 1,
      question: `"I need you to find my heart, deep within this cave. I can give you paradise in return...you are the only one capable of this task. Do you accept?"`,
      options: [
        {
          a: "Accept", //goes to eventTwo
          answerIndex: 3,
        },
        {
          b: "Walk away",
          answerIndex: 2,
        },
      ],
    },
    ifNoOne: {
      eventIndex: 2,
      question: "You wake up in a grassy field….it was a dream?", //Here you'd get an ending:Reward for least effort possible (or smthn like this)
      options: {
        a: "Play again?", 
      },
    },
    eventTwo: {
      eventIndex: 3,
      question:
        "'Thank you.' You wander deeper into the cave. Before you is a door, about as tall as you are, made of oakwood. What do you do?",
      options: {
        a: "Leave", //ending
        b: "Look for key",
        c: "Pick Lock", //goes to eventThree
        d: "Knock",
      },
    },
    ifLeave: {
      question: "Wow, you didn't even try.", //Here you'd get an ending:Reward for least effort possible (or smthn like this)
      options: {
        a: "Play again (for real this time!)", 
      },
    },
    ifKey: {
      question:
        "You feel the cracks in the wall, looking for anything small and...key shaped. You find a tiny black key, the top of which is shaped like a skull.",
      options: {
        a: "Use key", //goes to eventThree
        b: "Don't use key",
      },
    },
    ifKeyA: {
      question:
        "You put the key into the keyhole. It clicks into place, and the door pushes open.",
      value: "key", //idk
    },
    ifKeyB: {
      question: "You put the key in your pocket and start poking the door. ",
      options: {
        a: "Leave", //ending
        b: "Pick lock", //eventThree
      },
      value: "key", //idk
    },
    ifLock: {
      question:
        "You slide a small piece of metal into the keyhole, poking and prodding until you feel a click. The door swings open.",
    },
    ifKnock: {
      question:
        "Nothing happens...but it was worth a try. If you listen closely though, you hear what sounds like distant breathing. That’s...something. ",
      options: {
        a: "Leave",
        b: "Pick lock",
        c: "Look for key", //we'll have to talk ab these because they shouldn't have the option to look for the key if they've already looked
      },
    },
    eventThree: {
      question:
        "Beyond the door is a small, dimly lit room. Opposite you in the room is a person lying slumped on the floor. They look like they’re bleeding.",
      options: {
        a: "Help them", //positive, eventFour
        b: "Steal from them", //negative, eventFour
      },
    },
    helpThem: {
      question:
        "You go over to the person, searching your pockets for bandages as you go. You find some and offer them to the person. They raise their head with effort and offer you a pained smile. 'Ah, you’re just starting', they say. 'Some advice from an experienced traveler? When you get to the fork in the road, go left.'",
      options: {
        a: "Nod",
      },
      value: +1,
    },
    nod: {
      question:
        "They nod back to you, holding the bandages closer to their chest. You see an opening in the wall next to them",
    },
    steal: {
      question:
        "You stride up to them, and shamelessly pat down their sides to see what they have on them. They grunt and sit up, trying to stop you, but you won’t be deterred. Your hand closes around a spherical crystal flecked with blood.",
      options: {
        a: "Take it and leave",
      },
      value: -1,
    },
    takeItAndLeave: {
      question:
        "You put the crystal in your pocket and walk through the opening next to them",
    },
    eventFour: {
      question:
        "You hear the voice of the statue in the back of your mind. 'Things, are going to get more dangerous from here. Be careful.' You breathe in deeply and face the next room with determination. You can see three identical chests on the floor.",
      options: {
        a: "Investigate",
        b: "Pick a chest",
      },
    },
    investigate: {
      question:
        "From afar, you watch the chests. The one in the middle twitches.",
      options: {
        a: "Chest 1",
        b: "Chest 2",
        c: "Chest 3",
      },
    },
    pickChest: {
      options: {
        a: "Chest 1",
        b: "Chest 2",
        c: "Chest 3",
      },
    },
    chestOne: {
      question:
        "You walk up to the chest on the left. It opens easily, although its lid is blanketed in a thick layer of dust. Inside, you find a bone. The bone is perfectly clean and white...it could be a femur? A shimmering magic doorway opens behind the chests.",
      value: +1,
    },
    chestTwo: {
      question:
        "You approach chest number 2, the middle chest. It becomes perfectly still as you reach a hand out to open it. Suddenly, its lid bursts open into a slobbering jaw, biting at your fingers! You jump back in horror!",
      options: {
        a: "Run",
        b: "Fight",
        c: "Befriend",
      },
    },
    ifRun: {
      question:
        "You run away but there’s nowhere to go but backwards! You rush into the other room and the cave’s opening shuts behind you, locking you out forever. The person on the floor chuckles. You almost got eaten!", //here you'd get an ending: You almost got eaten!
        options: {
          a: "Play again?", 
        },
      },
    ifFight: {
      question:
        "You kick the chest! Oh my god, is it even a chest?? You have no time to wonder about it because its sharp teeth are bearing down on your fragile, human body. It bites, you evade, it roars, you punch! Eventually, you manage to subdue the chest but oh god at what cost...you’re covered in blood. A shimmering magic doorway opens behind the chests.",
      value: -1,
    },
    ifBefriend: {
      question:
        "You keep your breathing calm and steady as you get closer. The chest stops its attack, surprised, and looks up at you (y’know, as much as anything without eyes can look at a person). You pet its lid cautiously, and the chest calms down. It cuddles up to you, and after some time it drops a leather bracelet in your hand.A shimmering magic doorway opens behind the chests.", //Here you'd get an alert or popup: You've befriended Chester!
    },
    chestThree: {
      question:
        "You approach the chest on the right. It opens easily, although its lid is blanketed in a thick layer of dust. Inside you find a small bag. When you open it, six perfectly shaped white dice tumble into your palm. The die with 20 sides has a skull where the 20 should be. You wonder how it got here as you tuck it into your pocket. A shimmering magic doorway opens behind the chests.",
        options: {
          a: "Go through the doorway",
        },
      },
    eventFive: {
      question:
        `You go through the doorway and feel a rush of unease. A booming voice coming from everywhere at once says “What has many keys but can’t open a single lock?”`, //here we'd need a space for inserting text, idk how to do that and I am not gonna look it up rn
        options: {
          a: "Puzzle",
          b: "Map",
          c: "Piano",
          d: "Chest",
        },
    },
    eventSix: {
      question:
        "You speak the answer out loud and the booming voice subsides. A cold rush of wind forces your eyes shut and you feel like you’re moving, but you can’t tell what direction you’re going in. When you finally pry your eyes open, there is a fork in the road in front of you.",
      options: {
        a: "Left",
        b: "Right",
      },
    },
    left: {
      question:
        "On the left is a simple podium, holding a crystal. The crystal is heart shaped, floating in midair, radiating warmth and a calm white light.",
      //here could be a calming gif of a heart crystal,,,
      options: {
        a: "Take it",
      }, //the whole positives/negatives deal at this point, look at doc
    },
    right: {
      question:
        "You head down the right path and a room of glimmering jewels and golden coins reveals itself. There are more riches here than you’ve seen in your entire life, more than you could fathom!",
      options: {
        a: "Take a coin",
        b: "Leave a coin",
      },
    },
    takeCoin: {
      question: `You pick up a large golden coin from the pile. Surely no one will miss this, seeing as there’s so much else here. The ground rumbles as a massive dragon with wiry bat wings bursts through the pile of riches!! It’s eyes are as tall as you are, and its fetid breath washes over you.`,
      options: {
        a: "Fight",
        b: "Befriend",
      }, //positives and negatives here too, not gonna write the value rn cause I'm not sure how to or even if that's what I'm supposed to do
    },
    giveCoin: {
      question:
        "You scrounge around in your pack and come up with a small, silver coin. It isn’t much but you feel sort of proud as it clinks against the coins beneath you. The ground rumbles as a massive dragon with wiry bat wings bursts through the pile of riches!! It’s eyes are as tall as you are, and its fetid breath washes over you.",
      options: {
        a: "Fight",
        b: "Befriend",
      }, //positives and negatives here too, not gonna write the value rn cause I'm not sure how to or even if that's what I'm supposed to do
    },
    fight: {
      question: `You punch it, as hard as you can, and fight like your life depends on it! It takes everything you’ve got, what feels like more than you can give, but finally you...lose. The dragon roars ferociously and you are rocketed back, hitting a nearby wall.`,
      //bad ending
    },
    befriend: {
      question: `You reach your hand out to the dragon, as if it were a large dog. It regards you for a moment, taking stock of your inventory and soul in ways you would not imagine it capable of. After some time, it lowers its head to let you pet it. It moves away, bringing you back a large and glowing white crystal, shaped like a heart. You feel warmth radiating off of it, as the dragon gives you a knowing smile.`,
      //you'd get an alert/message: You've befriended a dragon!
      //good ending
    },
    leave: {
      question: "Reward for least effort ever or something",
      options: {
        a: "Play again (for real this time!)",
      },
    }, //taken to ending screen: Reward for least effort possible (or smthn like this)
    bad: {
      question: `You pry your eyes open with some effort, and find yourself bloody and tired, slumped on the floor. You move your neck and feel it crack. In fact, all your bones seem to creak at any movement at all. Your parched throat screams for water. You wait. And wait. And wait. And finally, you see a traveler approach. It seems...oh my god, it’s you. It’s you, but without the pain, and without the burden of past choices. You can only hope they make the choices you didn’t.`, //taken to bad ending screen
      options: {
        a: "Try again?",
      },
    },
    good: {
      question: `You blink, and when you open your eyes, you are back with the statue in the pool of water cave you woke up in. A smile cracks onto her stony face as she gently takes her heart from you. Her eyes are warm and loving, as she reaches out a hand`,
      options: { a: "Take her hand" },
    },
    takeHand: {
      question: `You take her hand and wake up in a grassy field. The sun beats down on you, and your family is waiting. You close your laptop and sit up as your favorite pet rushes to greet you. All is right in the world.`, //taken to good ending screen
      options: {
        a: "Play again!",
      },
    },
  },
];
//bad:Congratulations! You were subjected to eternal torment! Play again?
//good: Congratulations! You have achieved contentment. I’m happy for you! Play again?
//easter egg:
/* IF, WITH EITHER ENDINGS, YOU ACQUIRED A KEY AT THE LOOK FOR KEY OPTION IN QUESTION 1:
  The player will have another option next to Play again? Called ‘use key’. 
  USE KEY:
  This takes them to a screen with pictures of both of our dogs on it :)) Kacey and JoJo :)) */

export { quizGame };
