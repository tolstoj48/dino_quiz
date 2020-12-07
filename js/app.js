// Main block scope
{
   ("use strict");
  //ItemCtrl
  const ItemCtrl = (function () {
    // Setter of the gameId and gameTypeId variables
    const setCurrentGameId = function (e) {
      localStorage.setItem("gameId", e.target.text);
      localStorage.setItem("gameTypeId", e.target.className);
    };

    return {
      // To set current game type and id based on the last link click
      setCurrentGameId: function (e) {
        setCurrentGameId(e);
      },
      // To get current game type and id based on the last link click
      getCurrentGame: function () {
        return {
          id: localStorage.getItem("gameId"),
          type: localStorage.getItem("gameTypeId"),
        };
      },
    };
  })();

  // UI controler
  const UICtrl = (function () {
    const UISelectors = {
      quiz: ".quiz",
      recognition: ".recognition",
    };

    const eventListenersInit = function eventListenersInit() {
      // Materialize setup for dropdowns in menu
      const dropdown = document.querySelectorAll(".dropdown-trigger");
      dropdown.forEach(function () {
        M.Dropdown.init(dropdown, {
          hover: true,
          inDuration: 500,
          coverTrigger: false,
          constrainWidth: false,
        });
      });

      // Materialize setup for sidenav menu
      document.addEventListener("DOMContentLoaded", function () {
        const elems = document.querySelectorAll(".sidenav");
        M.Sidenav.init(elems);
      });

      /* 
        Event listener for quiz and recognition - sets up variable to 
         identify the kind of quiz or recognition game 
         */
      const arrAllQuizLinks = document.querySelectorAll(UISelectors.quiz);
      const arrAllRecognLinks = document.querySelectorAll(
        UISelectors.recognition
      );
      Array.from(arrAllQuizLinks).forEach((element) => {
        element.addEventListener("click", ItemCtrl.setCurrentGameId);
      });
      Array.from(arrAllRecognLinks).forEach((element) => {
        element.addEventListener("click", ItemCtrl.setCurrentGameId);
      });
    };

    return {
      eventListenersInit: function () {
        eventListenersInit();
      },
    };
  })();

  // Application controler
  const App = (function (UICtrl) {
    // Public available methods
    return {
      init: function () {
        // Loading event listeners
        UICtrl.eventListenersInit();
      },
    };
  })(UICtrl);

  App.init();
}
