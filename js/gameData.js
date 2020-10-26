"use strict";

/* 
Game data controler - fetches all the data 
- random questions - maximum 12 (can be set up), random numbers 0 - length of the data object
*/
;const GameDataCtrl = (function () {
  
  // All data object
  const allDataObj = {
    recognition: {
      all:  {
        0: {
          question: "<img src='./images/stegosaurus.png' alt='dino-image'>",
          answers: ["Hovno", "skovno", "provno", "divno","Hovno", "skovno", "provno", "divno"],
          correctAnswer: "skovno",
        },
        1: {
          question: "<img src='./images/ankylosaurus.png' alt='dino-image'>",
          answers: ["áčko", "béčk", "céčko", "déčko"],
          correctAnswer: "céčko",
        },
        2: {
          question: "<img src='./images/tyrannosaurus.jpg' alt='dino-image'>",
          answers: ["Hovno", "skovno", "provno", "divno"],
          correctAnswer: "provno",
        },
        3: {
          question: "<img src='./images/stegosaurus.png' alt='dino-image'>",
          answers: ["Hovno", "skovno", "provno", "divno","Hovno", "skovno", "provno", "divno"],
          correctAnswer: "skovno",
        },
        4: {
          question: "<img src='./images/ankylosaurus.png' alt='dino-image'>",
          answers: ["áčko", "béčk", "céčko", "déčko"],
          correctAnswer: "céčko",
        },
        5: {
          question: "<img src='./images/argentinosaurus.jpg' alt='dino-image'>",
          answers: ["Hovno", "skovno", "provno", "divno"],
          correctAnswer: "provno",
        },
        6: {
          question: "<img src='./images/triceratops.png' alt='dino-image'>",
          answers: ["Hovno", "skovno", "provno", "divno","Hovno", "skovno", "provno", "divno"],
          correctAnswer: "skovno",
        },
        7: {
          question: "<img src='./images/spinosaurus.png' alt='dino-image'>",
          answers: ["áčko", "béčk", "céčko", "déčko"],
          correctAnswer: "céčko",
        },
        8: {
          question: "<img src='./images/pteranodon.png' alt='dino-image'>",
          answers: ["Hovno", "skovno", "provno", "divno"],
          correctAnswer: "provno",
        },
        9: {
          question: "<img src='./images/diplodocus.png' alt='dino-image'>",
          answers: ["Hovno", "skovno", "provno", "divno","Hovno", "skovno", "provno", "divno"],
          correctAnswer: "skovno",
        },
        10: {
          question: "<img src='./images/archeopteryx.png' alt='dino-image'>",
          answers: ["áčko", "béčk", "céčko", "déčko"],
          correctAnswer: "céčko",
        },
        11: {
          question: "<img src='./images/iguanodon.jpg' alt='dino-image'>",
          answers: ["Hovno", "skovno", "provno", "divno"],
          correctAnswer: "provno",
        },
      },
      herbivores: {
        0: {
          question: "<img src='./images/pteranodon.png' alt='dino-image'>",
          answers: ["Hovno", "skovno", "provno", "divno"],
          correctAnswer: "provno",
        },
      },  
      carnivores: {
        0: {
          question: "<img src='./images/tyrannosaurus.jpg' alt='dino-image'>",
          answers: ["Hovno", "skovno", "provno", "divno"],
          correctAnswer: "provno",
        },
        1: {
          question: "<img src='./images/tyrannosaurus.jpg' alt='dino-image'>",
          answers: ["Hovno", "skovno", "provno", "divno"],
          correctAnswer: "provno",
        },
        2: {
          question: "<img src='./images/tyrannosaurus.jpg' alt='dino-image'>",
          answers: ["Hovno", "skovno", "provno", "divno"],
          correctAnswer: "provno",
        },
        3: {
          question: "<img src='./images/tyrannosaurus.jpg' alt='dino-image'>",
          answers: ["Hovno", "skovno", "provno", "divno"],
          correctAnswer: "provno",
        },
        4: {
          question: "<img src='./images/tyrannosaurus.jpg' alt='dino-image'>",
          answers: ["Hovno", "skovno", "provno", "divno"],
          correctAnswer: "provno",
        },
        5: {
          question: "<img src='./images/tyrannosaurus.jpg' alt='dino-image'>",
          answers: ["Hovno", "skovno", "provno", "divno"],
          correctAnswer: "provno",
        },
        6: {
          question: "<img src='./images/tyrannosaurus.jpg' alt='dino-image'>",
          answers: ["Hovno", "skovno", "provno", "divno"],
          correctAnswer: "provno",
        },
        7: {
          question: "<img src='./images/tyrannosaurus.jpg' alt='dino-image'>",
          answers: ["Hovno", "skovno", "provno", "divno"],
          correctAnswer: "provno",
        },
        8: {
          question: "<img src='./images/tyrannosaurus.jpg' alt='dino-image'>",
          answers: ["Hovno", "skovno", "provno", "divno"],
          correctAnswer: "provno",
        },
        9: {
          question: "<img src='./images/tyrannosaurus.jpg' alt='dino-image'>",
          answers: ["Hovno", "skovno", "provno", "divno"],
          correctAnswer: "provno",
        },
        10: {
          question: "<img src='./images/tyrannosaurus.jpg' alt='dino-image'>",
          answers: ["Hovno", "skovno", "provno", "divno"],
          correctAnswer: "provno",
        },
        11: {
          question: "<img src='./images/tyrannosaurus.jpg' alt='dino-image'>",
          answers: ["Hovno", "skovno", "provno", "divno"],
          correctAnswer: "provno",
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
  randomNumbersArray.forEach( (x, index) => {
    finalDataObj[index] = allDataObj[gameType][gameId][x]
  })
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

