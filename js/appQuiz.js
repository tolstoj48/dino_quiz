//ItemCtrl
const ItemCtrl = (function () {
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
    if (gameId === "Všichni dinosauři") {
      questionSet = quizArray.all;
    } else if (gameId === "Býložravci") {
      questionSet = quizArray.herbivores;
    } else {
      questionSet = quizArray.carnivores;
    }
    return questionSet;
  }

    // Setting game timer
    const setTime = function setTime() {
      var today = new Date();
      today.setTime(0);
      let s = today.getMinutes();
      let m = today.getSeconds();
      // Set game timer
      var interval = window.setInterval(function () {
        let gameTime = document.querySelector(UISelectors.time);
        m = checkTime(m);
        s = checkTime(today.getSeconds() + 1);
        gameTime.innerHTML = m + ":" + s;
        localStorage.setItem("timePassed", m + ":" + s);
        today.setSeconds(today.getSeconds() + 1);
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
  }
})();

// UI controler
const UICtrl = (function () {
  UIAnswersCounter = 1;  
  UISelectors = {
    quiz: ".quiz",
    recogn: ".recogn",
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
    const arrAllRecognLinks = document.querySelectorAll(UISelectors.recogn);
    Array.from(arrAllQuizLinks).forEach(element => {
      element.addEventListener("click", ItemCtrl.setCurrentGameId)
    })
    Array.from(arrAllRecognLinks).forEach(element => {
      element.addEventListener("click", ItemCtrl.setCurrentGameId)
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
    }
    gameTypeName.innerHTML = title;
    // Question content after initialization
    let questionContainer = document.querySelector(UISelectors.questionContainer);
    let questionSet = ItemCtrl.getQuestions();
    questionContainer.innerHTML = questionSet[0].question;
    // Answers content after initialization
    let html = ``;
    let answersList = document.querySelector(UISelectors.answersList);
    questionSet[0].answers.forEach((answer, index) => {
      html += `<li id=${index} class="answer-item collection-item col s6">${answer}</li>`
    })
    answersList.innerHTML = html;
    
    // Click event on questions
    const clicker = ItemCtrl.getNextQuestion();
    // Skip first question - given already set first question
    clicker.next();

    // Click event on answers
    answersList.addEventListener("click", function (e) {
      if (e.target.classList.contains("answer-item")) {
        // Answer variable
        let userAnswer = e.target.innerHTML;
        // List items variable
        let correctnessIndicatorList = document.querySelectorAll(UISelectors.indicator);
        // Save answer to ItemCtrl
        ItemCtrl.saveAnswer(userAnswer);
        // Get answers saved in localStorage
        let answersFromLS = ItemCtrl.getAnswersFromLocalStorage();
        let lastCorrectnessIndicator = Array.from(correctnessIndicatorList)[Object.keys(answersFromLS)[Object.keys(answersFromLS).length-1]];
        // Is userAnswer equal to correct question from questions set
        if (userAnswer === ItemCtrl.getQuestions()[Object.keys(answersFromLS).length-1].correctAnswer) {
          // Set correct mark in correctnes indicator list
          lastCorrectnessIndicator.innerHTML="+";
          lastCorrectnessIndicator.classList.add("green");
        } else {
          // Set incorrect mark in correctnes indicator list
          lastCorrectnessIndicator.innerHTML="x";
          lastCorrectnessIndicator.classList.add("red");
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
    }
    gameTypeName.innerHTML = title;
    // Question content - fetching next question
    let questionSet = ItemCtrl.getQuestions();
    // Last answer or not
    if (UIAnswersCounter <= Object.keys(questionSet).length - 1) {
      let questionContainer = document.querySelector(UISelectors.questionContainer);
      questionContainer.innerHTML = questionSet[UIAnswersCounter].question; // 
      // Answers content after fetching next question
      let html = ``;
      let answersList = document.querySelector(UISelectors.answersList);
      questionSet[UIAnswersCounter].answers.forEach((answer, index) => {
        html += `<li id=${index} class="answer-item collection-item col s6">${answer}</li>`
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
    // Container of the questions and answers
    let container = document.querySelector(UISelectors.questionsAnswersContainer);
    // User answers from localStorage
    let userAnswers = ItemCtrl.getAnswersFromLocalStorage();
    // Gets correct answers from array of questions
    let correctAnswers = ItemCtrl.getCorrectAnswers();
    
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
    
    // End html text
    container.innerHTML=`
    <div class="col s12 margin-top-2rem">
      Správně jsi zodpověděl/a celkem
      ${correctAnswersCounter} ze ${correctAnswers.length} otázek, v čase ${ItemCtrl.getFinalTime()}
      <div class="col s12 margin-top-2rem">
        Seznam všech Tvých výsledků: <a href="results.html"> najdeš zde </a>
      </div>
    </div>
    `;

    // Clears the setInterval from ItemCtrl
    clearInterval(interval);
    // Deletes users answers (item "answers") from localStorage
    ItemCtrl.deleteAnswersItem();
  }

  return {
    // Adding listeners
    eventListenersInit: function(){
      return eventListenersInit();

  },
    // Initialization of game
    initilizeGameUI: function (questions) {
      // Starts time in UI and ItemCtrl
      const interval = ItemCtrl.startGameTime();
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
const App = (function(UICtrl, ItemCtrl) {
  
  // Public available methods
  return {
    init: function () {
      // Clear items from localStorage - assures the state of app
      ItemCtrl.deleteAnswersItem();
      // Loading event listeners
      const clicker = UICtrl.eventListenersInit();
      // Inititalization of a game
      UICtrl.initilizeGameUI(clicker);
    },
  }

})(UICtrl, ItemCtrl);

App.init();



