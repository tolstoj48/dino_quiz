// Man block scope
;{
    "use strict";

    //Data Controler
    ;const DataCtrl = (function () {

      // Setter of the gameId and gameTypeId variables
      const setCurrentGameId = function (e) {
        localStorage.setItem("gameId", e.target.text);
        localStorage.setItem("gameTypeId", e.target.className);
      };

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
        let presortedDataObj;
        let arrPresorted = [];
        let resultsFromLocalStorage = JSON.parse(localStorage.getItem("resultsArray"));
        if (gameTypeId == "Kvíz") {
          gameTypeId = "quiz";
        } else {
          gameTypeId = "recognition";
        }
        if (gameId == "Všichni dinosauři") {
          gameId = "all";
        } else if (gameId == "Býložravci") {
          gameId = "herbivores";
        } else {
          gameId = "carnivores";
        }
        presortedDataObj = resultsFromLocalStorage[gameTypeId][gameId];
        for (const property in presortedDataObj) {
          arrPresorted.push(presortedDataObj[property]);
        }

        window.accordingToKey = accordingToKey;
        sortedData = accordingToKey == "result" ? arrPresorted.sort(Helpers.compare) : arrPresorted.sort(Helpers.negativeCompare);
        window.accordingToKey = undefined;

        if (sortedData) {
          return sortedData;
        } else {
          return false;
        }
      };

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
      };
    })();

    // UI controler
    const UICtrlResults = (function () {
      // UI Selectors
      const UISelectors = {
        quiz: ".quiz",
        recognition: ".recognition",
        mainFrameResults: "#main-frame-results",
        quizFrame: "#quiz-frame",
        recognitionFrame: "#recognition-frame",
        correctAnswersKey: ".result",
        endTimeKey: ".time"
      };

      // Map for UI names of results tables
      const UIMapNames = {
        all: "Všichni dinosauři <i class='fas fa-leaf right'></i><i class='fas fa-drumstick-bite right'></i>",
        herbivores: "Býložravci <i class='fas fa-leaf right'></i>",
        carnivores: "Masožravci <i class='fas fa-drumstick-bite right'></i>",
        quiz: "Kvíz",
        recognition: "Poznávačka"
      };

      // Map for UI classes
      const UIMapClasses = {
        all: "my-blue-results",
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
          const elems = document.querySelectorAll('.carousel');
          const instances = M.Carousel.init(elems, {
            numVisible: 10,
            dist: -60,
          });
        });

        // Materialize setup for sidenav menu
        document.addEventListener('DOMContentLoaded', function() {
          const elems = document.querySelectorAll('.sidenav');
          const instances = M.Sidenav.init(elems);
        });

        /* 
        Event listener for quiz and recognition - sets up variable to 
         identify the kind of quiz or recognition game 
         */
        const arrAllQuizLinks = document.querySelectorAll(UISelectors.quiz);
        const arrAllRecognLinks = document.querySelectorAll(UISelectors.recognition);
        Array.from(arrAllQuizLinks).forEach(element => {
          element.addEventListener("click", DataCtrl.setCurrentGameId)
        });
        Array.from(arrAllRecognLinks).forEach(element => {
          element.addEventListener("click", DataCtrl.setCurrentGameId)
        });

        const mainFrameResults = document.querySelector(UISelectors.mainFrameResults);
        mainFrameResults.addEventListener("click", function (e) {
          if (e.target.className == "result" || e.target.className == "time") {
            sortResults(e);
          }
        });
      };

      // Showing all the results from localStorage
      const showResults = function showResults(data) {
        let mainFrameResults = document.querySelector(UISelectors.mainFrameResults);
        if (!data) {
          mainFrameResults.innerHTML = `<div class="row">
            <div class="col s12 margin-top-2rem">
              <h4> Ještě jste neodehráli žádnou hru a nebo jste si vymazali pamět prohlížeče.</h4>
            </div>
          </div>`;
        } else {    
          let html = "";
          for (const property in data) {
            let mainSection = document.createElement("section");
            let mainDivToAppend = document.createElement("div");
            mainDivToAppend.className = "col s12 card";
            mainDivToAppend.innerHTML = `<h4 id="${UIMapNames[property]}" class="bold">${UIMapNames[property]}`
            for (const gameId in data[property]) {
              let classOfTitle = UIMapClasses[gameId];
              let article = document.createElement("article");
              let divToAppend = document.createElement("div");
              divToAppend.className = "col s12 card-content";
              html += `<h5 class=" ${classOfTitle} bold">${UIMapNames[gameId]}</h5>
              <table class="striped centered">
                <thead>
                  <tr>
                    <th>Datum s časem</th>
                    <th class="result">Správných odpovědí <i class="fas fa-sort-numeric-down-alt fa-lg"></i></th>
                    <th class="time">Celkový čas hry <i class="fas fa-sort-numeric-up fa-lg"></i></th>
                  </tr>
                </thead>
                <tbody>`;
              for (const propertyResult in data[property][gameId]) {
                if (`${data[property][gameId][propertyResult]["result"]}` !== "undefined") {
                  html += `<tr>
                    <td>${data[property][gameId][propertyResult]["date"]}</td>
                    <td>${data[property][gameId][propertyResult]["result"]}</td>
                    <td>${data[property][gameId][propertyResult]["time"]}</td>
                  </tr>`;
                }
              }
            html += `</tbody>
            </table>`;
            divToAppend.innerHTML = html;
            article.appendChild(divToAppend);
            mainDivToAppend.appendChild(article);
            html = "";
          }
          let remark = document.createElement("div");
          remark.innerHTML = "<small>* Výsledky jsou ukládány a zobrazovány v/z localStorage resp. místního úložiště Vašeho prohlížeče. Smazaním paměti prohlížeče smažete také výsledky kvízů a poznávaček.</small>";
          mainDivToAppend.appendChild(remark);
          mainSection.appendChild(mainDivToAppend);
          mainFrameResults.appendChild(mainSection);
        }}
      };

      const showSortedData = function (sortedData, e) {
        let html = "";
        if (e.target.textContent.trim() == "Správných odpovědí") {
          e.target.classList.add("active-sorter");
          e.target.parentElement.children[2].classList.remove("active-sorter");
        } else {
          e.target.classList.add("active-sorter");
          e.target.parentElement.children[1].classList.remove("active-sorter");
        }
        sortedData.forEach(element => {
          if (sortedData !== "undefined") {
            html += `<tr>
              <td>${element["date"]}</td>
              <td>${element["result"]}</td>
              <td>${element["time"]}</td>
            </tr>`;
          }
        });
        e.target.parentElement.parentElement.parentElement.childNodes[3].innerHTML = html;
      };

      // Inititalize sorting UI
      const sortResults = function (e) {
        // Get the key according which is sorted
        const accordingToKey = e.target.className;
        // Get gameId by traversing from the clicked key
        const gameId = e.target.parentElement.parentElement.parentElement.previousElementSibling.textContent.trim();
        const gameTypeId = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.firstChild.textContent.trim();
        const sortedData = DataCtrl.getSortedData(accordingToKey, gameTypeId, gameId);
        // Send sorted data
        showSortedData(sortedData, e);
      };

      return {
        eventListenersInit: function(){
        // Inititalization of event listeners
          eventListenersInit();
        },
        // Showing all the results from localStorage
        showResults: function (data) {
          showResults(data);
        },
      };
    })();


    // Application controler
    const ResultsApp = (function(UICtrlResults, DataCtrl) {

      // Public available methods
      return {
        init: function () {
          // Getting all results data from localStorage
          const data = DataCtrl.getResults();
          // Loading event listeners
          UICtrlResults.eventListenersInit();
          // Showing all the results from localStorage
          UICtrlResults.showResults(data);
        },
      };

    })(UICtrlResults, DataCtrl);
    ResultsApp.init();
}


