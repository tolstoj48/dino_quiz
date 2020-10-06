//ItemCtrl
const ItemCtrl = (function () {
  // Setter of the gameId and gameTypeId variables
  const setCurrentGameId = function (e) {
    localStorage.setItem("gameId", e.target.text);
    localStorage.setItem("gameTypeId", e.target.className);
  }
  // Set questions
  const getQuestions = function () {
    const gameId = localStorage.getItem("gameId");
    const gameType = localStorage.getItem("gameTypeId");
    let questionSet;
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
      window.setInterval(function () {
        let gameTime = document.querySelector(UISelectors.time);
        m = checkTime(m);
        s = checkTime(today.getSeconds() + 1);
        gameTime.innerHTML = m + ":" + s;
        localStorage.setItem("timePassed", m + ":" + s);
        today.setSeconds(today.getSeconds() + 1);
      }, 1000);
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
    // Returns the final time of a game from localStorage
    getFinalTime: function () {
      return localStorage.getItem("timePassed");
    },
    // Starts time counter of quiz/recognition game
    startGameTime: function() {
      setTime();
    },
  }
})();

// UI controler
const UICtrl = (function () {
  UISelectors = {
    quiz: ".quiz",
    recogn: ".recogn",
    gameType: "#game-type",
    resultTable: "#result-table",
    questionImg: "#question-img",
    question: "#question",
    correctAnswers: "#correct-answers",
    incorrectAnswers: "#incorrect-answers",
    time: "#time",
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
  const initilizeGameUIContent = function initilizeGameUI(questions) {
    let title; 

    // Set name of the game type
    let gameTypeName = document.querySelector(UISelectors.gameType);
    // Set title text of the game type
    if (localStorage.getItem("gameTypeId") === "quiz") {
      title = "Kvíz - " + localStorage.getItem("gameId").toLowerCase();
    }
    gameTypeName.innerHTML = title;

  }

  return {
    // Adding listeners
    eventListenersInit: function(){
      eventListenersInit();
  },
    // Initialization of game
    initilizeGameUI: function (questions) {
      // Starts content in the UI
      initilizeGameUIContent(questions);
      // Starts time in UI and ItemCtrl
      ItemCtrl.startGameTime();
    },

}
})();


// Application controler
const App = (function(UICtrl) {
  
  // Public available methods
  return {
    init: function () {
      // Loading event listeners
      UICtrl.eventListenersInit();
      // Get questions
      const questions = ItemCtrl.getQuestions();
      // Inititalization of a game
      UICtrl.initilizeGameUI(questions);
    },
  }

})(UICtrl, ItemCtrl);

App.init();



