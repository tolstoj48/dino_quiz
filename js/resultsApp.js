
//dataCtrl
const dataCtrl = (function () {
  // Setter of the gameId and gameTypeId variables
  const setCurrentGameId = function (e) {
    localStorage.setItem("gameId", e.target.text);
    localStorage.setItem("gameTypeId", e.target.className);
  }

  return {
    // To set current game type and id based on the last link click
    getResults: function () {
      return JSON.parse(localStorage.getItem("resultsArray"));
    }
    }
  }
)();

// UI controler
const UICtrlResults = (function () {
  UISelectors = {
    quiz: ".quiz",
    recogn: ".recogn",
    mainFrameResults: "#main-frame-results",
    quizFrame: "#quiz-frame",
    recognitionFrame: "#recognition-frame",
    
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
      element.addEventListener("click", dataCtrl.setCurrentGameId)
    })
    Array.from(arrAllRecognLinks).forEach(element => {
      element.addEventListener("click", dataCtrl.setCurrentGameId)
    })
  }

  // Showing all the results from localStorage
  const showResults = function showResults(data) {
    let mainFrameResults = document.querySelector(UISelectors.mainFrameResults);
    mainFrameResults.innerHTML = data;
    console.log(data["quiz"]["all"]);
  }

  return {
    eventListenersInit: function(){
      eventListenersInit()
    },
    // Showing all the results from localStorage
    showResults: function (data) {
      showResults(data);
    }
  }
})();


// Application controler
const resultsApp = (function(UICtrlResults, dataCtrl) {
  
  // Public available methods
  return {
    init: function () {
      // Getting all results data from localStorage
      let data = dataCtrl.getResults();
      console.log(data);      
      // Loading event listeners
      UICtrlResults.eventListenersInit();
      // Showing all the results from localStorage
      UICtrlResults.showResults(data);
    },
  }

})(UICtrlResults, dataCtrl);

resultsApp.init();



