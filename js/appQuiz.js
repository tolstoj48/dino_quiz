//Data Controler
;const dataCtrl = (function () {
  // Setter of the gameId and gameTypeId variables
  const setCurrentGameId = function (e) {
    localStorage.setItem("gameId", e.target.text);
    localStorage.setItem("gameTypeId", e.target.className);
  }
  // Set questions
  const getQuestions = function getQuestions() {
    let questionSet;
    const gameId = localStorage.getItem("gameId");
    const gameType = localStorage.getItem("gameTypeId");
    let q = {};
    gameType === "quiz" ? q = quizArray : q = recognArray;
    if (gameId === "Všichni dinosauři") {
      questionSet = q.all;
    } else if (gameId === "Býložravci") {
      questionSet = q.herbivores;
    } else {
      questionSet = q.carnivores;
    }
    return questionSet;
  }

    // Setting game timer
    const setTime = function setTime() {
      var today = new Date();
      today.setTime(0);
      let m = today.getMinutes();
      let s = today.getSeconds();
      // Set game timer
      var interval = window.setInterval(function () {
        let gameTime = document.querySelector(UISelectors.time);
        s = checkTime(today.getSeconds());
        if (s === 60) {
          s = checkTime(today.getSeconds() + 1);
        } else if (s === 0) {
          s = "00";
        }
        m = checkTime(today.getMinutes());
        if (m === 0) {
          m = "00";
        }
        gameTime.innerHTML = m + ":" + s;
        localStorage.setItem("timePassed", m + ":" + s);
        if ((today.getSeconds() + 1) <= 59 ) {
          today.setSeconds(today.getSeconds() + 1);
        } else {
          today.setSeconds(00);
          today.setMinutes(today.getMinutes() + 1);
        }
      }, 1000);
      return interval;
    }

    // Generator fetching next question
    const getNextQuestion = function* gen(questionsObj) {
      for (const property in questionsObj) {
        yield questionsObj[property];
      }
    }

  // Saves answers to localStorage
  const answers = {};
  const saveAnswer = function saveAnswer(answer) {
    if (localStorage.getItem("answers") === null || !localStorage.getItem("answers")) {
      answers[0] = answer;
      localStorage.setItem("answers", JSON.stringify(answers));
    } else {
      let localStorageAnswers = JSON.parse(localStorage.getItem("answers"));
      localStorageAnswers[Object.keys(localStorageAnswers).length] = answer;
      localStorage.setItem("answers", JSON.stringify(localStorageAnswers));
    }
    }

  // Gets answers from localStorage
  const getAnswersFromLocalStorage = function getAnswersFromLocalStorage() {
    return JSON.parse(localStorage.getItem("answers"));
  }
    
  // Deletes answers item in localStorage
  const deleteAnswersItem = function deleteAnswersItem() {
    localStorage.removeItem("answers");
  }

  // Get correct answers from JS array file based on choosen type game saved in localStorage
  const getCorrectAnswers = function getCorrectAnswers() {
    let counter = 0;
    let correctAnswers = {}
    let questionsObj = getQuestions();
    for (const property in questionsObj) {
      correctAnswers[counter] = questionsObj[property].correctAnswer;
      counter += 1;
    }
    return correctAnswers;
  }

  // Saves correct answers number and the user´s end time to localStorage
  const saveResultsToLocalStorage = function (date, numberOfCorrectAnswers, finalTime) {
    let gameTypeId = localStorage.getItem("gameTypeId");
    let gameId = localStorage.getItem("gameId");
    let resultsTable = {};
    let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    // If localStorage doesnt contain results, set up the table
    if (localStorage.getItem("resultsArray") === null) {
      resultsTable = {
        quiz: {
          all: {
          },
          herbivores: {
          },
          carnivores: {
          },
        },
        recognition: {
          all: {
          },
          herbivores: {
          },
          carnivores: {
          },
        }
      }
    } else {
      // If there are results then get the table from LS
      resultsTable = JSON.parse(localStorage.getItem("resultsArray"));
    }

    if (gameId === "Všichni dinosauři") {
      gameId = "all";
    } else if (gameId === "Býložravci") {
      gameId = "herbivores";
    } else {
      gameId = "carnivores";
    }
    console.log(gameTypeId);
    console.log(resultsTable[gameTypeId]);
    // Set the values
    resultsTable[gameTypeId][gameId][Object.keys(resultsTable[gameTypeId][gameId]).length] = {
      date: date.getUTCDate() + ". " + months[date.getUTCMonth()] + ". " + date.getUTCFullYear() + " " + date.getHours() + ":" + date.getUTCMinutes(),
      result: numberOfCorrectAnswers,
      time: finalTime
    }
    // Save new results to the localStorage variable
    localStorage.setItem("resultsArray", JSON.stringify(resultsTable));
    
  }

  return {
    // To set current game type and id based on the last link click
    setCurrentGameId: function(e){
      setCurrentGameId(e);
    },
    // To get current game type and id based on the last link click
    getCurrentGame: function () {
      return {
        id: localStorage.getItem("gameId"),
        type: localStorage.getItem("gameTypeId"),
      }
    },
    // Set questions
    getQuestions: function () {
      return getQuestions();
    },
    // Starts time counter of quiz/recognition game
    startGameTime: function() {
      return setTime();
    },
    // Returns the final time of a game from localStorage
    getFinalTime: function () {
      const finalTime = localStorage.getItem("timePassed");
      localStorage.removeItem("timePassed");
      return finalTime;
    },
    getNextQuestion: function () {
      let questions = getQuestions();
      return getNextQuestion(questions);
    },
    saveAnswer: function (answer) {
      saveAnswer(answer);
    },
    getAnswersFromLocalStorage: function () {
      return getAnswersFromLocalStorage();
    },
    deleteAnswersItem: function () {
      return deleteAnswersItem();
    }, 
    getCorrectAnswers: function() {
      return getCorrectAnswers();
    },
    // Saves restult to the localStorage
    saveResultsToLocalStorage: function (date, numberOfCorrectAnswers, finalTime) {
      saveResultsToLocalStorage(date, numberOfCorrectAnswers, finalTime);
      return true;
    }
}
})();

// UI controler
const UICtrl = (function () {
  UIAnswersCounter = 1;  
  UISelectors = {
    quiz: ".quiz",
    recognition: ".recognition",
    gameType: "#game-type",
    resultTable: "#result-table",
    questionContainer: "#question-container",
    answersList: "#answers-list",
    correctAnswers: "#correct-answers",
    incorrectAnswers: "#incorrect-answers",
    time: "#time",
    questionsAnswersContainer: "#question-answers-container",
    indicator: ".indicator",
  }
  
  const eventListenersInit = function eventListenersInit() {
    // Materialize setup for dropdowns in menu
    const dropdown = document.querySelectorAll(".dropdown-trigger");
    dropdown.forEach(function (element) {
      M.Dropdown.init(dropdown,{
        hover: true,
        inDuration: 500,
        coverTrigger: false,
        constrainWidth: false,
      });

    });

    // Materialize setup for carousel
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems, {
        numVisible: 10,
        dist: -60,
      });
    });

    // Materialize setup for sidenav menu
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems);
    });

    /* Event listener for quiz and recognition - sets up variable to 
     identify the kind of quiz or recognition game */
    const arrAllQuizLinks = document.querySelectorAll(UISelectors.quiz);
    const arrAllRecognLinks = document.querySelectorAll(UISelectors.recognition);
    Array.from(arrAllQuizLinks).forEach(element => {
      element.addEventListener("click", dataCtrl.setCurrentGameId)
    })
    Array.from(arrAllRecognLinks).forEach(element => {
      element.addEventListener("click", dataCtrl.setCurrentGameId)
    })

  }

  // Init of the game UI
  const initilizeGameUIContent = function initilizeGameUI(interval) {
    let title; 
    // Set name of the game type
    let gameTypeName = document.querySelector(UISelectors.gameType);
    // Set title text of the game type
    if (localStorage.getItem("gameTypeId") === "quiz") {
      title = "Kvíz - " + localStorage.getItem("gameId").toLowerCase();
    } else {
      title = "Poznávačka - " + localStorage.getItem("gameId").toLowerCase();
    }
    gameTypeName.innerHTML = title;
    // Question content after initialization
    let questionContainer = document.querySelector(UISelectors.questionContainer);
    let questionSet = dataCtrl.getQuestions();
    questionContainer.innerHTML = questionSet[0].question;
    // Answers content after initialization
    let html = ``;
    let answersList = document.querySelector(UISelectors.answersList);
    questionSet[0].answers.forEach((answer, index) => {
      html += `<li id=${index} class="answer-item collection-item col s4">${answer}</li>`
    })
    answersList.innerHTML = html;
    
    // Click event on questions
    const clicker = dataCtrl.getNextQuestion();
    // Skip first question - given already set first question
    clicker.next();

    // Click event on answers
    answersList.addEventListener("click", function (e) {
      if (e.target.classList.contains("answer-item")) {
        // Answer variable
        let userAnswer = e.target.innerHTML;
        // List items variable
        let correctnessIndicatorList = document.querySelectorAll(UISelectors.indicator);
        // Save answer to dataCtrl
        dataCtrl.saveAnswer(userAnswer);
        // Get answers saved in localStorage
        let answersFromLS = dataCtrl.getAnswersFromLocalStorage();
        let lastCorrectnessIndicator = Array.from(correctnessIndicatorList)[Object.keys(answersFromLS)[Object.keys(answersFromLS).length-1]];
        // Is userAnswer equal to correct question from questions set
        if (userAnswer === dataCtrl.getQuestions()[Object.keys(answersFromLS).length-1].correctAnswer) {
          // Set correct mark in correctnes indicator list
          lastCorrectnessIndicator.innerHTML="+";
          lastCorrectnessIndicator.classList.add("my-grey-green");
        } else {
          // Set incorrect mark in correctnes indicator list
          lastCorrectnessIndicator.innerHTML="x";
          lastCorrectnessIndicator.classList.add("my-red");
        }       
        // Get another question from generator function
        clicker.next();
        // Call next question UI
        nextQuestionUI(clicker, interval);
      }
    })
  }

  // Next question UI
  const nextQuestionUI = function nextQuestionUI(clicker, interval) {
    let title; 
    // Set name of the game type
    let gameTypeName = document.querySelector(UISelectors.gameType);
    // Set title text of the game type
    if (localStorage.getItem("gameTypeId") === "quiz") {
      title = "Kvíz - " + localStorage.getItem("gameId").toLowerCase();
    } else {
      title = "Poznávačka - " + localStorage.getItem("gameId").toLowerCase();
    }
    gameTypeName.innerHTML = title;
    // Question content - fetching next question
    let questionSet = dataCtrl.getQuestions();
    // Last answer or not
    if (UIAnswersCounter <= Object.keys(questionSet).length - 1) {
      let questionContainer = document.querySelector(UISelectors.questionContainer);
      questionContainer.innerHTML = questionSet[UIAnswersCounter].question; // 
      // Answers content after fetching next question
      let html = ``;
      let answersList = document.querySelector(UISelectors.answersList);
      questionSet[UIAnswersCounter].answers.forEach((answer, index) => {
        html += `<li id=${index} class="answer-item collection-item col s">${answer}</li>`
      })
      answersList.innerHTML = html;
      // Counter of number of answered questions
      UIAnswersCounter += 1;
    // The end of a game
    } else {
      UIAnswersCounter = 1;
      endOfGameStateUI(interval);
  }
  }

  const endOfGameStateUI = function endOfGameStateUI(interval) {
    // Final time for results table and UI
    let finalTime= dataCtrl.getFinalTime();
    // Container of the questions and answers
    let container = document.querySelector(UISelectors.questionsAnswersContainer);
    // User answers from localStorage
    let userAnswers = dataCtrl.getAnswersFromLocalStorage();
    // Gets correct answers from array of questions
    let correctAnswers = dataCtrl.getCorrectAnswers();
    
    // Counts number of correct answers
    let index = 0;
    let correctAnswersCounter = 0;
    correctAnswers = Object.values(correctAnswers)
    for (const element of Object.values(userAnswers)) {
      if (element === correctAnswers[index]) {
        correctAnswersCounter +=1;
      }
      index += 1;
    }
    
    // End state html markup
    container.innerHTML=`
    <div class="col s12 margin-top-2rem">
      Správně jsi zodpověděl/a celkem
      ${correctAnswersCounter} ze ${correctAnswers.length} otázek, v čase ${finalTime}
      <br><br>
      Seznam všech Tvých výsledků: <a href="results.html"> najdeš zde </a>
      <br><br>
      <a href="${localStorage.getItem("gameTypeId")}.html"> <em>Zopakovat </em> <i class="fas fa-redo-alt"></i></a>
    </div>
    `;

    // Send the number of correct answers and user´s final time to localStorage
    dataCtrl.saveResultsToLocalStorage(new Date(), correctAnswersCounter, finalTime);
    // Clears the setInterval from dataCtrl
    clearInterval(interval);
    // Deletes users answers (item "answers") from localStorage
    dataCtrl.deleteAnswersItem();
  }

  return {
    // Adding listeners
    eventListenersInit: function(){
      return eventListenersInit();

  },
    // Initialization of game
    initilizeGameUI: function (questions) {
      // Starts time in UI and dataCtrl
      const interval = dataCtrl.startGameTime();
      // Starts content in the UI
      initilizeGameUIContent(interval);
    },
    // Get answersCounter
    getUIAnswersCounter: function() {
      return UIAnswersCounter;
    }

}
})();


// Application controler
const App = (function(UICtrl, dataCtrl) {
  
  // Public available methods
  return {
    init: function () {
      // Clear items from localStorage - assures the state of app
      dataCtrl.deleteAnswersItem();
      // Loading event listeners
      const clicker = UICtrl.eventListenersInit();
      // Inititalization of a game
      UICtrl.initilizeGameUI(clicker);
    },
  }

})(UICtrl, dataCtrl);

App.init();



