
import { DinosListObjCtrl } from './dinos-data.js';

"use strict";

/* 
Game data controler - fetches all the data 
- random questions - maximum 12 (can be set up), random numbers 0 - length of the data object
*/
;export const GameDataCtrl = (function () {
  // Gametyp const for different functions in the controler
  const gameType = localStorage.getItem("gameTypeId");


  // All possible answers for dynamic generation of the choices in the answers list UI
  const arrayOfAllPossibleAnswers = {
    quiz: [
      "Tohle", 
      "Tamto", 
      "Onohle",
      "Vymohle",
      "Tohle", 
      "Tamto", 
      "Onohle",
      "Vymohle",
    ],
    recognition : [
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
    "Pterodactylus",
    "Spinosaurus",
    "Stegosaurus",
    "Therizinosaurus",
    "Triceratops",
    "Tyrannosaurus",
    "Velociraptor",
  ],
}
  
  // Get dataObj of all dinos for getting image links
  const dataObj = DinosListObjCtrl.getDinosObj();

  // All questions with categories
  const arrOfQuestionsCorrectAnswers = [
    ["quiz", "all", "Co chceš", "Co chceš", "Vymohle"],
    ["recognition", "all", dataObj["Allosaurus"]["imgSrc"], dataObj["Allosaurus"]["imgSrcSm"], "Allosaurus"],
    ["recognition", "all", dataObj["Amargasaurus"]["imgSrc"], dataObj["Amargasaurus"]["imgSrcSm"], "Amargasaurus"],
    ["recognition", "all", dataObj["Amurosaurus"]["imgSrc"], dataObj["Amurosaurus"]["imgSrcSm"], "Amurosaurus"],
    ["recognition", "all", dataObj["Apatosaurus"]["imgSrc"], dataObj["Apatosaurus"]["imgSrcSm"], "Apatosaurus"],
    ["recognition", "all", dataObj["Argentinosaurus"]["imgSrc"], dataObj["Argentinosaurus"]["imgSrcSm"], "Argentinosaurus"],
    ["recognition", "all", dataObj["Archeopteryx"]["imgSrc"], dataObj["Archeopteryx"]["imgSrcSm"], "Archeopteryx"],
    ["recognition", "all", dataObj["Brachiosaurus"]["imgSrc"], dataObj["Brachiosaurus"]["imgSrcSm"], "Brachiosaurus"],
    ["recognition", "all", dataObj["Condorraptor"]["imgSrc"], dataObj["Condorraptor"]["imgSrcSm"], "Condorraptor"],
    ["recognition", "all", dataObj["Carnotaurus"]["imgSrc"], dataObj["Carnotaurus"]["imgSrcSm"], "Carnotaurus"],
    ["recognition", "all", dataObj["Deinonychus"]["imgSrc"], dataObj["Deinonychus"]["imgSrcSm"], "Deinonychus"],
    ["recognition", "all", dataObj["Diplodocus"]["imgSrc"], dataObj["Diplodocus"]["imgSrcSm"], "Diplodocus"],
    ["recognition", "all", dataObj["Gallimimus"]["imgSrc"], dataObj["Gallimimus"]["imgSrcSm"], "Gallimimus"],
    ["recognition", "all", dataObj["Iguanodon"]["imgSrc"], dataObj["Iguanodon"]["imgSrcSm"], "Iguanodon"],
    ["recognition", "all", dataObj["Lycaenops"]["imgSrc"], dataObj["Lycaenops"]["imgSrcSm"], "Lycaenops"],
    ["recognition", "all", dataObj["Pachycephalosaurus"]["imgSrc"], dataObj["Pachycephalosaurus"]["imgSrcSm"], "Pachycephalosaurus"],
    ["recognition", "all", dataObj["Parasaurolophus"]["imgSrc"], dataObj["Parasaurolophus"]["imgSrcSm"], "Parasaurolophus"],
    ["recognition", "all", dataObj["Pteranodon"]["imgSrc"], dataObj["Pteranodon"]["imgSrcSm"], "Pteranodon"],
    ["recognition", "all", dataObj["Pterodactylus"]["imgSrc"], dataObj["Pterodactylus"]["imgSrcSm"], "Pterodactylus"],
    ["recognition", "all", dataObj["Spinosaurus"]["imgSrc"], dataObj["Spinosaurus"]["imgSrcSm"], "Spinosaurus"],
    ["recognition", "all", dataObj["Stegosaurus"]["imgSrc"], dataObj["Stegosaurus"]["imgSrcSm"], "Stegosaurus"],
    ["recognition", "all", dataObj["Therizinosaurus"]["imgSrc"], dataObj["Therizinosaurus"]["imgSrcSm"], "Therizinosaurus"],
    ["recognition", "all", dataObj["Triceratops"]["imgSrc"], dataObj["Triceratops"]["imgSrcSm"], "Triceratops"],
    ["recognition", "all", dataObj["Tyrannosaurus"]["imgSrc"], dataObj["Tyrannosaurus"]["imgSrcSm"], "Tyrannosaurus"],
    ["recognition", "all", dataObj["Velociraptor"]["imgSrc"], dataObj["Velociraptor"]["imgSrcSm"], "Velociraptor"],
    ["recognition", "herbivores", dataObj["Amargasaurus"]["imgSrc"], dataObj["Amargasaurus"]["imgSrcSm"], "Amargasaurus"],
    ["recognition", "herbivores", dataObj["Amurosaurus"]["imgSrc"], dataObj["Amurosaurus"]["imgSrcSm"], "Amurosaurus"],
    ["recognition", "herbivores", dataObj["Ankylosaurus"]["imgSrc"], dataObj["Ankylosaurus"]["imgSrcSm"], "Ankylosaurus"],
    ["recognition", "herbivores", dataObj["Apatosaurus"]["imgSrc"], dataObj["Apatosaurus"]["imgSrcSm"], "Apatosaurus"],
    ["recognition", "herbivores", dataObj["Argentinosaurus"]["imgSrc"], dataObj["Argentinosaurus"]["imgSrcSm"], "Argentinosaurus"],
    ["recognition", "herbivores", dataObj["Brachiosaurus"]["imgSrc"], dataObj["Brachiosaurus"]["imgSrcSm"], "Brachiosaurus"],
    ["recognition", "herbivores", dataObj["Diplodocus"]["imgSrc"], dataObj["Diplodocus"]["imgSrcSm"], "Diplodocus"],
    ["recognition", "herbivores", dataObj["Gallimimus"]["imgSrc"], dataObj["Gallimimus"]["imgSrcSm"], "Gallimimus"],
    ["recognition", "herbivores", dataObj["Iguanodon"]["imgSrc"], dataObj["Iguanodon"]["imgSrcSm"], "Iguanodon"],
    ["recognition", "herbivores", dataObj["Pachycephalosaurus"]["imgSrc"], dataObj["Pachycephalosaurus"]["imgSrcSm"], "Pachycephalosaurus"],
    ["recognition", "herbivores", dataObj["Parasaurolophus"]["imgSrc"], dataObj["Parasaurolophus"]["imgSrcSm"], "Parasaurolophus"],
    ["recognition", "herbivores", dataObj["Stegosaurus"]["imgSrc"], dataObj["Stegosaurus"]["imgSrcSm"], "Stegosaurus"],
    ["recognition", "herbivores", dataObj["Therizinosaurus"]["imgSrc"], dataObj["Therizinosaurus"]["imgSrcSm"], "Therizinosaurus"],
    ["recognition", "herbivores", dataObj["Triceratops"]["imgSrc"], dataObj["Triceratops"]["imgSrcSm"], "Triceratops"],
    ["recognition", "carnivores", dataObj["Allosaurus"]["imgSrc"], dataObj["Allosaurus"]["imgSrcSm"], "Allosaurus"],
    ["recognition", "carnivores", dataObj["Amurosaurus"]["imgSrc"], dataObj["Amurosaurus"]["imgSrcSm"], "Amurosaurus"],
    ["recognition", "carnivores", dataObj["Archeopteryx"]["imgSrc"], dataObj["Archeopteryx"]["imgSrcSm"], "Archeopteryx"],
    ["recognition", "carnivores", dataObj["Carnotaurus"]["imgSrc"], dataObj["Carnotaurus"]["imgSrcSm"], "Carnotaurus"],
    ["recognition", "carnivores", dataObj["Condorraptor"]["imgSrc"], dataObj["Condorraptor"]["imgSrcSm"], "Condorraptor"],
    ["recognition", "carnivores", dataObj["Deinonychus"]["imgSrc"], dataObj["Deinonychus"]["imgSrcSm"], "Deinonychus"],
    ["recognition", "carnivores", dataObj["Gallimimus"]["imgSrc"], dataObj["Gallimimus"]["imgSrcSm"], "Gallimimus"],
    ["recognition", "carnivores", dataObj["Lycaenops"]["imgSrc"], dataObj["Lycaenops"]["imgSrcSm"], "Lycaenops"],
    ["recognition", "carnivores", dataObj["Pteranodon"]["imgSrc"], dataObj["Pteranodon"]["imgSrcSm"], "Pteranodon"],
    ["recognition", "carnivores", dataObj["Pterodactylus"]["imgSrc"], dataObj["Pterodactylus"]["imgSrcSm"], "Pterodactylus"],
    ["recognition", "carnivores", dataObj["Spinosaurus"]["imgSrc"], dataObj["Spinosaurus"]["imgSrcSm"], "Spinosaurus"],
    ["recognition", "carnivores", dataObj["Therizinosaurus"]["imgSrc"], dataObj["Therizinosaurus"]["imgSrcSm"], "Therizinosaurus"],
    ["recognition", "carnivores", dataObj["Tyrannosaurus"]["imgSrc"], dataObj["Tyrannosaurus"]["imgSrcSm"], "Tyrannosaurus"],
    ["recognition", "carnivores", dataObj["Velociraptor"]["imgSrc"], dataObj["Velociraptor"]["imgSrcSm"], "Velociraptor"],
  ];

  // Fetch random numbers for allDataObj getter of answers
  const getRandomAnswers = function getRandomAnswers(numberOfChoices, correctAnswer) {
    let randomNumbersArray = [];
    for (let i = 0; i < numberOfChoices; i ++) {
      // Random number - maximum is numberOfChoices - 1 (the length of the data object)
      const randomInt = Math.floor(Math.random() * arrayOfAllPossibleAnswers[gameType].length);
      if (!randomNumbersArray.includes(randomInt) && arrayOfAllPossibleAnswers[gameType][randomInt] !== correctAnswer) {
        randomNumbersArray.push(randomInt);
      } else {
        i -= 1;
      }
    }
    // Generate final array of answers
    let finalArrayOfAnswers = [];
    randomNumbersArray.forEach(element => {
      finalArrayOfAnswers.push(arrayOfAllPossibleAnswers[gameType][element]);
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

  /* Creating allDataObj object from array of basic data - get all objects with specific prototype - creating dynamically
   answers each time init happens
   */
  const createObjectsFromArOfQuestionsAndCorrectAnswers = function createObjectsFromArOfQuestionsAndCorrectAnswers() {
    // Prototype object to be prototype of the rest of answers objects
    const protoObj = {
      question: "",
      questionSmallImg: "",
      correctAnswer: "",
      // Getter for the answers choices - dynamic generation of the choices
      get answers() {return getRandomAnswers(4, this.correctAnswer)},
    }
    arrOfQuestionsCorrectAnswers.forEach(element => {
      let inserted = Object.create(protoObj);
      inserted.question = element[2];
      inserted.questionSmallImg = gameType == "quiz" ? "" : element[3];
      inserted.correctAnswer = element[4];
      // Get the last key and use it to add the object to the allDataObj - holding all the questions and answers data
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
      return createObjectsFromArOfQuestionsAndCorrectAnswers();
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
      const randomNumbersArray = gameType == "recognition" ? getRandomNumbersArray(12, numberOfChoices) : getRandomNumbersArray(1, numberOfChoices)
      return fetchChoosenData(gameType, gameId, randomNumbersArray);
    },
  };

})();

GameDataCtrl.init();