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
    }
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

  const initializeGame = function initializeGame(questions) {
    const mainDiv = document.querySelector(UISelectors.petr);
    // Iterate questions and generate quiz - musím dodělat
    console.log(questions);

  }

  return {
    // Adding listeners
    eventListenersInit: function(){
      eventListenersInit();
  },
    // Initialization of game
    initializeGame: function (questions) {
      initializeGame(questions);
    }
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
      UICtrl.initializeGame(questions);
    },
  }

})(UICtrl);

App.init();



