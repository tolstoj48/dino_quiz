
//Data Controler
;const DataCtrl = (function () {

  // Setter of the gameId and gameTypeId variables
  const setCurrentGameId = function (e) {
    localStorage.setItem("gameId", e.target.text);
    localStorage.setItem("gameTypeId", e.target.className);
  }

  //Get results
  const getResults = function () {
    let resultsFromLocalStorage = JSON.parse(localStorage.getItem("resultsArray"));
    if (resultsFromLocalStorage) {
      return resultsFromLocalStorage;
    } else {
      return false;
    }
  }
  
  // Get sorted data
  const getSortedData = function (accordingToKey, gameTypeId, gameId) {
    let sortedData;
    let resultsFromLocalStorage = JSON.parse(localStorage.getItem("resultsArray"));
    if (gameTypeId === "Kvíz") {
      gameTypeId = "quiz";
    } else {
      gameTypeId = "recognition";
    }
    if (gameId === "Všichni dinosauři ") {
      gameId = "all";
    } else if (gameId === "Býložravci") {
      gameId = "herbivores";
    } else {
      gameId = "carnivores";
    }
    sortedData = resultsFromLocalStorage[gameTypeId][gameId];
    for (const property in sortedData) {
      console.log(sortedData[property]);
    }
    return sortedData
  }

  return {
    // To set current game type and id based on the last link click
    setCurrentGameId: function (e) {
      setCurrentGameId(e);
    },
    // To set current game type and id based on the last link click
    getResults: function () {
      return getResults();
    },
    // Sorting of the tables results
    getSortedData: function (accordingToKey, gameTypeId, gameId) {
      return getSortedData(accordingToKey, gameTypeId, gameId);
    },
    }
  }
)();

// UI controler
const UICtrlResults = (function () {
  // UI Selectors
  UISelectors = {
    quiz: ".quiz",
    recogn: ".recogn",
    mainFrameResults: "#main-frame-results",
    quizFrame: "#quiz-frame",
    recognitionFrame: "#recognition-frame",
    correctAnswersKey: ".correct-answers-key",
    endTimeKey: ".end-time-key"
  }
  // Map for UI names of results tables
  UIMapNames = {
    all: `Všichni dinosauři <i class="fas fa-leaf right"></i><i class="fas fa-drumstick-bite right"></i>`,
    herbivores: `Býložravci <i class="fas fa-leaf right"></i>`,
    carnivores: `Masožravci <i class="fas fa-drumstick-bite right"></i>`,
    quiz: "Kvíz",
    recognition: "Poznávačka"
  }
  // Map for UI classes
  UIMapClasses = {
    all: "my-blue",
    herbivores: "my-green",
    carnivores: "my-red",    
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
      element.addEventListener("click", DataCtrl.setCurrentGameId)
    })
    Array.from(arrAllRecognLinks).forEach(element => {
      element.addEventListener("click", DataCtrl.setCurrentGameId)
    })

    const mainFrameResults = document.querySelector(UISelectors.mainFrameResults);
    mainFrameResults.addEventListener("click", function (e) {
      if (e.target.className === "correct-answers-key" || e.target.className === "end-time-key") {
        sortResults(e);
      }
    })
  }

  // Showing all the results from localStorage
  const showResults = function showResults(data) {
    let mainFrameResults = document.querySelector(UISelectors.mainFrameResults);
    if (!data) {
      mainFrameResults.innerHTML = `
      <div class="row">
        <div class="col s12 margin-top-2rem">
          <h4> Ještě jste neodehráli žádnou hru a nebo jste si vymazali pamět prohlížeče.</h4>
        </div>
      </div>`;
    } else {    
      let html = "";
      for (const property in data) {
        let mainDivToAppend = document.createElement("div");
        mainDivToAppend.className = "col s12";
        mainDivToAppend.innerHTML = `<h4>${UIMapNames[property]}`
        for (const gameId in data[property]) {
          let classOfTitle = UIMapClasses[gameId];
          let counter = 0;
          let divToAppend = document.createElement("div");
          divToAppend.className = "col s12";
          html += `
          <h5 class=${classOfTitle}>${UIMapNames[gameId]}</h5>
          <table class="striped centered">
            <thead>
              <tr>
                <th>Pořadí</th>
                <th class="correct-answers-key">Správných odpovědí <i class="fas fa-sort-amount-up"></i></th>
                <th class="end-time-key">Výsledný čas <i class="fas fa-sort-amount-up"></i></th>
              </tr>
            </thead>
            <tbody>
          `;
          for (const propertyResult in data[property][gameId]) {
            if (`${data[property][gameId][propertyResult]["result"]}` !== "undefined") {
              counter += 1;
              html += `
              <tr>
                <td>${counter}.</td>
                <td>${data[property][gameId][propertyResult]["result"]}</td>
                <td>${data[property][gameId][propertyResult]["time"]}</td>
              </tr>`;
            }
          }
        html += `
          </tbody>
        </table>
        `;
        divToAppend.innerHTML = html;
        mainDivToAppend.appendChild(divToAppend);
        html = "";
        counter = 0;
      }
      let remark = document.createElement("div");
      remark.innerHTML = "<small>* Výsledky jsou ukládány a zobrazovány v/z localStorage resp. místního úložiště Vašeho prohlížeče. Smazaním paměti prohlížeče smažete také výsledky kvízů a poznávaček.</small>";
      mainDivToAppend.appendChild(remark);
      mainFrameResults.appendChild(mainDivToAppend);
    }}
  }
  
  // Inititalize sorting UI
  const sortResults = function (e) {
    // Get the key according which is sorted
    let accordingToKey = e.target.className;
    // Get gameId by traversing from the clicked key
    let gameId = e.target.parentElement.parentElement.parentElement.previousElementSibling.textContent;
    let gameTypeId = e.target.parentElement.parentElement.parentElement.parentElement.previousElementSibling.textContent;
    let sortedData = DataCtrl.getSortedData(accordingToKey, gameTypeId, gameId);
    // Send sorted data
    showResults(sortedData);
  }

  return {
    eventListenersInit: function(){
    // Inititalization of event listeners
      eventListenersInit();
    },
    // Showing all the results from localStorage
    showResults: function (data) {
      showResults(data);
    },
  }
})();


// Application controler
const resultsApp = (function(UICtrlResults, DataCtrl) {
  
  // Public available methods
  return {
    init: function () {
      // Getting all results data from localStorage
      let data = DataCtrl.getResults();
      // Loading event listeners
      UICtrlResults.eventListenersInit();
      // Showing all the results from localStorage
      UICtrlResults.showResults(data);
    },
  }

})(UICtrlResults, DataCtrl);

resultsApp.init();



