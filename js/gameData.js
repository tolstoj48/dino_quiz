"use strict";

/* 
Game data controler - fetches all the data 
- random questions - maximum 12 (can be set up), random numbers 0 - length of the data object
*/
;const GameDataCtrl = (function gameDataCtrlIIFE() {
  
  // All data object
  const allDataObj = {
    recognition: {
      all:  {
        0: {
          question: "<img src='./images/images_lg/amargasaurus.png' alt='dino-image'>",
          answers: ["Ankylosaurus", "Tyrannosaurus", "Stegosaurus", "Amargasaurus"],
          correctAnswer: "Amargasaurus",
        },
        1: {
          question: "<img src='./images/images_lg/ankylosaurus.png' alt='dino-image'>",
          answers: ["Stegosaurus", "Triceratops", "Archeopteryx", "Ankylosaurus"],
          correctAnswer: "Ankylosaurus",
        },
        2: {
          question: "<img src='./images/images_lg/apatosaurus.png' alt='dino-image'>",
          answers: ["Megalodon", "Apatosaurus", "Stegosaurus", "Spinosaurus"],
          correctAnswer: "Apatosaurus",
        },
        3: {
          question: "<img src='./images/images_lg/argentinosaurus.jpg' alt='dino-image'>",
          answers: ["Argentinosaurus", "Stagosaurus", "Spinosaurus", "Apatosaurus"],
          correctAnswer: "Argentinosaurus",
        },
        4: {
          question: "<img src='./images/images_lg/archeopteryx.png' alt='dino-image'>",
          answers: ["Pteranodon", "Archeopteryx", "Pterodaktyl", "Kakadu"],
          correctAnswer: "Archeopteryx",
        },
        5: {
          question: "<img src='./images/images_lg/brachiosaurus.png' alt='dino-image'>",
          answers: ["Brachiosaurus", "Iguanodon", "Pteranodon", "Diplodocus"],
          correctAnswer: "Brachiosaurus",
        },
        6: {
          question: "<img src='./images/images_lg/diplodocus.png' alt='dino-image'>",
          answers: ["Titanosaurus", "Lycaenops", "Brachiosaurus", "Diplodocus"],
          correctAnswer: "Diplodocus",
        },
        7: {
          question: "<img src='./images/images_lg/iguanodon.jpg' alt='dino-image'>",
          answers: ["Velociraptor", "Lycaenops", "Spinosaurus", "Iguanodon"],
          correctAnswer: "Iguanodon",
        },
        8: {
          question: "<img src='./images/images_lg/pteranodon.png' alt='dino-image'>",
          answers: ["Pterodaktyl", "Pteranodon", "Archeopteryx", "Ara"],
          correctAnswer: "Pteranodon",
        },
        9: {
          question: "<img src='./images/images_lg/spinosaurus.png' alt='dino-image'>",
          answers: ["Spinosaurus", "Tyrannosaurus", "Apatosaurus", "Brachiosaurus"],
          correctAnswer: "Spinosaurus",
        },
        10: {
          question: "<img src='./images/images_lg/stegosaurus.png' alt='dino-image'>",
          answers: ["Brontosaurus", "Ankylosaurus", "Stegosaurus", "Velociraptor"],
          correctAnswer: "Stegosaurus",
        },
        11: {
          question: "<img src='./images/images_lg/tyrannosaurus.jpg' alt='dino-image'>",
          answers: ["Spinosaurus", "Velociraptor", "Tyrannosaurus", "Gallimimus"],
          correctAnswer: "Tyrannosaurus",
        },
      },
      herbivores: {
        0: {
          question: "<img src='./images/images_lg/amargasaurus.png' alt='dino-image'>",
          answers: ["Ankylosaurus", "Tyrannosaurus", "Stegosaurus", "Amargasaurus"],
          correctAnswer: "Amargasaurus",
        },
        1: {
          question: "<img src='./images/images_lg/ankylosaurus.png' alt='dino-image'>",
          answers: ["Stegosaurus", "Triceratops", "Archeopteryx", "Ankylosaurus"],
          correctAnswer: "Ankylosaurus",
        },
        2: {
          question: "<img src='./images/images_lg/apatosaurus.png' alt='dino-image'>",
          answers: ["Megalodon", "Apatosaurus", "Stegosaurus", "Spinosaurus"],
          correctAnswer: "Apatosaurus",
        },
        3: {
          question: "<img src='./images/images_lg/argentinosaurus.jpg' alt='dino-image'>",
          answers: ["Argentinosaurus", "Stagosaurus", "Spinosaurus", "Apatosaurus"],
          correctAnswer: "Argentinosaurus",
        },
        4: {
          question: "<img src='./images/images_lg/brachiosaurus.png' alt='dino-image'>",
          answers: ["Brachiosaurus", "Iguanodon", "Pteranodon", "Diplodocus"],
          correctAnswer: "Brachiosaurus",
        },
        5: {
          question: "<img src='./images/images_lg/diplodocus.png' alt='dino-image'>",
          answers: ["Titanosaurus", "Lycaenops", "Brachiosaurus", "Diplodocus"],
          correctAnswer: "Diplodocus",
        },
        6: {
          question: "<img src='./images/images_lg/iguanodon.jpg' alt='dino-image'>",
          answers: ["Velociraptor", "Lycaenops", "Spinosaurus", "Iguanodon"],
          correctAnswer: "Iguanodon",
        },
        7: {
          question: "<img src='./images/images_lg/stegosaurus.png' alt='dino-image'>",
          answers: ["Brontosaurus", "Ankylosaurus", "Stegosaurus", "Velociraptor"],
          correctAnswer: "Stegosaurus",
        },
      },  
      carnivores: {
        0: {
          question: "<img src='./images/images_lg/archeopteryx.png' alt='dino-image'>",
          answers: ["Pteranodon", "Archeopteryx", "Pterodaktyl", "Kakadu"],
          correctAnswer: "Archeopteryx",
        },
        1: {
          question: "<img src='./images/images_lg/pteranodon.png' alt='dino-image'>",
          answers: ["Pterodaktyl", "Pteranodon", "Archeopteryx", "Ara"],
          correctAnswer: "Pteranodon",
        },
        2: {
          question: "<img src='./images/images_lg/spinosaurus.png' alt='dino-image'>",
          answers: ["Spinosaurus", "Tyrannosaurus", "Apatosaurus", "Brachiosaurus"],
          correctAnswer: "Spinosaurus",
        },
        3: {
          question: "<img src='./images/images_lg/tyrannosaurus.jpg' alt='dino-image'>",
          answers: ["Spinosaurus", "Velociraptor", "Tyrannosaurus", "Gallimimus"],
          correctAnswer: "Tyrannosaurus",
        },
      }
    }, 
    quiz: {
      all:{
        0: {
          question: "Co máš k žrádlu?",
          answers: ["Hovno", "skovno", "provno", "divno","Hovno", "skovno", "provno", "divno"],
          correctAnswer: "skovno",
        },
        1: {
          question: "Co máš k spánku?",
          answers: ["áčko", "béčk", "céčko", "déčko"],
          correctAnswer: "céčko",
        },
        2: {
          question: "Co máš ke kuku?",
          answers: ["Hovno", "skovno", "provno", "divno"],
          correctAnswer: "provno",
        },
      },
      herbivores:{
        0: {
          question: "Dáš si trávu?",
          answers: ["Hovno", "skovno", "provno", "divno"],
          correctAnswer: "divno",
        },
      },
      carnivores: {
        0: {
          question: "Dáš si mašíšššššškoooo?",
          answers: ["Hovno", "skovno", "provno", "divno"],
          correctAnswer: "provno",
        },
      }
    }
  }

// Gets the final data object from the data object - base on parameters
const fetchChoosenData = function fetchChoosenData (gameType, gameId, randomNumbersArray) {
  let finalDataObj = {};
  // Setting the result object's key/values pairs
  randomNumbersArray.forEach( (element, index) => {
    finalDataObj[index] = allDataObj[gameType][gameId][element];
  })
  console.log(finalDataObj);
  return finalDataObj;
}
  
  // Gets array containing the given number of random numbers - used to get question set
  const getRandomNumbersArray = function getRandomNumbersArray(numberOfNumbers, numberOfChoices) {
    let randomNumbersArray = [];
    for (let i = 0; i < numberOfNumbers; i ++) {
      // Random number - maximum is numberOfChoices - 1 (the length of the data object)
      let randomInt = Math.floor(Math.random() * numberOfChoices);
      if (!randomNumbersArray.includes(randomInt)) {
        randomNumbersArray.push(randomInt);
      } else {
        i -= 1;
      }
    }
    return randomNumbersArray;
  }

  // Gets the length of the data object - given type and game id
  const getNumberOfChoicesFromAllDataObj = function getNumberOfChoicesFromAllDataObj(gameType, gameId) {
    // The length of the data object
    return Object.keys(allDataObj[gameType][gameId]).length;
  }
  
  // Public object
  return {
    // Gets array of random numbers for getting the data from the object containing the data
    getRandomNumbersArray: function (numberOfNumbers, numberOfChoices) {
      return getRandomNumbersArray(numberOfNumbers, numberOfChoices);
    },
    // Gets the length of data objects with the given game type and game id
    getNumberOfChoicesFromAllDataObj: function (gameType, gameId) {
      return getNumberOfChoicesFromAllDataObj(gameType, gameId);
    },
    // Fetches the final data object to the gameApp.js
    fetchChoosenData: function (gameType, gameId) {
      let numberOfChoices = getNumberOfChoicesFromAllDataObj(gameType, gameId);
      let randomNumbersArray = getRandomNumbersArray(12, numberOfChoices);
      return fetchChoosenData(gameType, gameId, randomNumbersArray);
    },
  }

})();

