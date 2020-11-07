"use strict";

/* 
Game data controler - fetches all the data 
- random questions - maximum 12 (can be set up), random numbers 0 - length of the data object
*/
;const GameDataCtrl = (function gameDataCtrlIIFE() {
  
  // All possible answers for dynamic generation of possible choices in the answers list UI
  const arrayOfAllPossibleAnswers = [
    "Allosaurus",
    "Amargasaurus",
    "Amurosaurus",
    "Ankylosaurus",
    "Apatosaurus",
    "Argentinosaurus",
    "Archeopteryx",
    "Brachiosaurus",
    "Carnotaurus",
    "Condorraptor",
    "Diplodocus",
    "Deinonychus",
    "Gallimimus",
    "Iguanodon",
    "Lycaenops",
    "Pachycephalosaurus",
    "Parasaurolophus",
    "Pteranodon",
    "Pterodaktyl",
    "Spinosaurus",
    "Stegosaurus",
    "Therizinosaurus",
    "Tyrannosaurus",
    "Velociraptor",
  ];
  
  // Get dataObj of all dinos for getting image links
  const dataObj = DinosListObjCtrl.getDinosObj();

  // All questions with categories
  const arrOfQuestionsCorrectAnswers = [
    ["recognition", "all",`<img src='${dataObj["Allosaurus"]["imgSrc"]}' alt='dino-image'>`, "Allosaurus"],
    ["recognition", "all",`<img src='${dataObj["Amargasaurus"]["imgSrc"]}' alt='dino-image'>`, "Amargasaurus"],
    ["recognition", "all",`<img src='${dataObj["Apatosaurus"]["imgSrc"]}' alt='dino-image'>`, "Apatosaurus"],
    ["recognition", "all",`<img src='${dataObj["Argentinosaurus"]["imgSrc"]}' alt='dino-image'>`, "Argentinosaurus"],
    ["recognition", "all",`<img src='${dataObj["Archeopteryx"]["imgSrc"]}' alt='dino-image'>`, "Archeopteryx"],
    ["recognition", "all",`<img src='${dataObj["Brachiosaurus"]["imgSrc"]}' alt='dino-image'>`, "Brachiosaurus"],
    ["recognition", "all",`<img src='${dataObj["Diplodocus"]["imgSrc"]}' alt='dino-image'>`, "Diplodocus"],
    ["recognition", "all",`<img src='${dataObj["Iguanodon"]["imgSrc"]}' alt='dino-image'>`, "Iguanodon"],
    ["recognition", "all",`<img src='${dataObj["Pteranodon"]["imgSrc"]}' alt='dino-image'>`, "Pteranodon"],
    ["recognition", "all",`<img src='${dataObj["Spinosaurus"]["imgSrc"]}' alt='dino-image'>`, "Spinosaurus"],
    ["recognition", "all",`<img src='${dataObj["Stegosaurus"]["imgSrc"]}' alt='dino-image'>`, "Stegosaurus"],
    ["recognition", "all",`<img src='${dataObj["Tyrannosaurus"]["imgSrc"]}' alt='dino-image'>`, "Tyrannosaurus"],
    ["recognition", "all",`<img src='${dataObj["Velociraptor"]["imgSrc"]}' alt='dino-image'>`, "Velociraptor"],
    ["recognition", "all",`<img src='${dataObj["Carnotaurus"]["imgSrc"]}' alt='dino-image'>`, "Carnotaurus"],
    ["recognition", "all",`<img src='${dataObj["Parasaurolophus"]["imgSrc"]}' alt='dino-image'>`, "Parasaurolophus"],
    ["recognition", "herbivores",`<img src='${dataObj["Amargasaurus"]["imgSrc"]}' alt='dino-image'>`, "Amargasaurus"],
    ["recognition", "herbivores",`<img src='${dataObj["Ankylosaurus"]["imgSrc"]}' alt='dino-image'>`, "Ankylosaurus"],
    ["recognition", "herbivores",`<img src='${dataObj["Apatosaurus"]["imgSrc"]}' alt='dino-image'>`, "Apatosaurus"],
    ["recognition", "herbivores",`<img src='${dataObj["Argentinosaurus"]["imgSrc"]}' alt='dino-image'>`, "Argentinosaurus"],
    ["recognition", "herbivores",`<img src='${dataObj["Brachiosaurus"]["imgSrc"]}' alt='dino-image'>`, "Brachiosaurus"],
    ["recognition", "herbivores",`<img src='${dataObj["Diplodocus"]["imgSrc"]}' alt='dino-image'>`, "Diplodocus"],
    ["recognition", "herbivores",`<img src='${dataObj["Iguanodon"]["imgSrc"]}' alt='dino-image'>`, "Iguanodon"],
    ["recognition", "herbivores",`<img src='${dataObj["Stegosaurus"]["imgSrc"]}' alt='dino-image'>`, "Stegosaurus"],
    ["recognition", "herbivores",`<img src='${dataObj["Parasaurolophus"]["imgSrc"]}' alt='dino-image'>`, "Parasaurolophus"],
    ["recognition","carnivores",`<img src='${dataObj["Allosaurus"]["imgSrc"]}' alt='dino-image'>`, "Allosaurus"],
    ["recognition","carnivores",`<img src='${dataObj["Archeopteryx"]["imgSrc"]}' alt='dino-image'>`, "Archeopteryx"],
    ["recognition","carnivores",`<img src='${dataObj["Carnotaurus"]["imgSrc"]}' alt='dino-image'>`, "Carnotaurus"],
    ["recognition","carnivores",`<img src='${dataObj["Pteranodon"]["imgSrc"]}' alt='dino-image'>`, "Pteranodon"],
    ["recognition","carnivores",`<img src='${dataObj["Spinosaurus"]["imgSrc"]}' alt='dino-image'>`, "Spinosaurus"],
    ["recognition","carnivores",`<img src='${dataObj["Tyrannosaurus"]["imgSrc"]}' alt='dino-image'>`, "Tyrannosaurus"],
    ["recognition","carnivores",`<img src='${dataObj["Velociraptor"]["imgSrc"]}' alt='dino-image'>`, "Velociraptor"],
  ];

  // Fetch random numbers for allDataObj getter of answers
  const getRandomAnswers = function getRandomAnswers(numberOfChoices, correctAnswer) {
    let randomNumbersArray = [];
    for (let i = 0; i < numberOfChoices; i ++) {
      // Random number - maximum is numberOfChoices - 1 (the length of the data object)
      const randomInt = Math.floor(Math.random() * arrayOfAllPossibleAnswers.length);
      if (!randomNumbersArray.includes(randomInt) && arrayOfAllPossibleAnswers[randomInt] !== correctAnswer) {
        randomNumbersArray.push(randomInt);
      } else {
        i -= 1;
      }
    }
    // Generate final array of answers
    let finalArrayOfAnswers = [];
    randomNumbersArray.forEach(element => {
      finalArrayOfAnswers.push(arrayOfAllPossibleAnswers[element]);
    });
    // Insert correct answer to the final answers array
    const randomInt = Math.floor(Math.random() * numberOfChoices);
    finalArrayOfAnswers[randomInt] = correctAnswer;
    return finalArrayOfAnswers;
  };


  // All data object
  const allDataObj = {
    recognition: {
      all:  {},
      herbivores: {},  
      carnivores: {},
    }, 
    quiz: {
      all:{},
      herbivores:{},
      carnivores: {},
    }
  };

  // Creating allDataObj object from array of basic data - get all objects with specific prototype
  const createObjectsFromArOfQuestionsAndCorrectAnswers = function createObjectsFromArOfQuestionsAndCorrectAnswers() {
    // Prototype object to be prototype of the rest of answers objects
    const protoObj = {
      question: "<img src='./images/images_lg/ankylosaurus.png' alt='dino-image'>",
      correctAnswer: "Ankylosaurus",
      // Getter for the answers choices - dynamic generation of the choices
      get answers() {return getRandomAnswers(4, this.correctAnswer)},
    }
    arrOfQuestionsCorrectAnswers.forEach(element => {
      let inserted = Object.create(protoObj);
      inserted.question = element[2];
      inserted.correctAnswer = element[3];
      allDataObj[element[0]][element[1]][Object.keys(allDataObj[element[0]][element[1]]).length] = inserted;
    })
  };

  // Gets the final data object from the data object - base on parameters
  const fetchChoosenData = function fetchChoosenData (gameType, gameId, randomNumbersArray) {
    let finalDataObj = {};
    // Setting the result object's key/values pairs
    randomNumbersArray.forEach( (element, index) => {
      finalDataObj[index] = allDataObj[gameType][gameId][element];
    })
    return finalDataObj;
  };
  
  // Gets array containing the given number of random numbers - used to get question set
  const getRandomNumbersArray = function getRandomNumbersArray(numberOfNumbers, numberOfChoices) {
    let randomNumbersArray = [];
    for (let i = 0; i < numberOfNumbers; i ++) {
      // Random number - maximum is numberOfChoices - 1 (the length of the data object)
      const randomInt = Math.floor(Math.random() * numberOfChoices);
      if (!randomNumbersArray.includes(randomInt)) {
        randomNumbersArray.push(randomInt);
      } else {
        i -= 1;
      }
    }
    return randomNumbersArray;
  };

  // Gets the length of the data object - given type and game id
  const getNumberOfChoicesFromAllDataObj = function getNumberOfChoicesFromAllDataObj(gameType, gameId) {
    // The length of the data object
    return Object.keys(allDataObj[gameType][gameId]).length;
  };
  
  // Public object
  return {
    // Game init
    init: function () {
      createObjectsFromArOfQuestionsAndCorrectAnswers();
    },
    // Gets array of random numbers for getting the data from the object containing the data
    getRandomNumbersArray: function (numberOfNumbers, numberOfChoices) {
      return getRandomNumbersArray(numberOfNumbers, numberOfChoices);
    },
    // Gets the length of data object with the given game type and game id
    getNumberOfChoicesFromAllDataObj: function (gameType, gameId) {
      return getNumberOfChoicesFromAllDataObj(gameType, gameId);
    },
    // Fetches the final data object to the gameApp.js
    fetchChoosenData: function (gameType, gameId) {
      const numberOfChoices = getNumberOfChoicesFromAllDataObj(gameType, gameId);
      const randomNumbersArray = getRandomNumbersArray(12, numberOfChoices);
      return fetchChoosenData(gameType, gameId, randomNumbersArray);
    },
  };

})();

GameDataCtrl.init();