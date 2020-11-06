// Man block scope
;{
    "use strict";

    // Autocomplete solution for the search bar
    const SearchBarCtrl = (function () {
    
      // Load event listeners
      const loadEventListeners = function () {
        // Getting corect obj of all dinos for search autocomplete
        const dinosObj = DinosListObjCtrl.getDinosObj();
        const dinosObjFinal = {};
        for (let property in dinosObj) {
          dinosObjFinal[property] = dinosObj[property]["imgSrc"];
        };

        // Search bar initialization
        document.addEventListener("DOMContentLoaded", function () {
          let elems = document.querySelectorAll(".autocomplete");
          let instances = M.Autocomplete.init(elems, {
            data: DinosListObjCtrl.getDinosObj(),
            limit: 3,
            onAutocomplete: setGlobalVariable,
          });
          
        // Data for search bar autocomplete updated base on obj of all dinos
          M.Autocomplete.getInstance(elems[0]).updateData(
            dinosObjFinal
          )
        })
      }
    
      // Set variable for redirection to list of dinos
      const setGlobalVariable = function (e) {
        localStorage.setItem("clickedDino", e);
        window.location.href = "dinos.html";
      
      }
    
      return {
        init: function () {
          // Load event listener for the bar
          loadEventListeners();
        }
      }
    })()
    SearchBarCtrl.init();
}