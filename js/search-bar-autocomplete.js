import { DinosListObjCtrl } from './dinos-data.js';

// Main block scope
;{
    "use strict";

    // Autocomplete solution for the search bar
    const SearchBarCtrl = (function () {
      
      // Load event listeners
      const loadEventListeners = function () {
        // Getting corect obj of all dinos for search autocomplete
        const dinosObj = DinosListObjCtrl.getDinosObj();
        const dinosObjFinal={};
        for (let property in dinosObj) {
          // Init the autocomplete object
          dinosObjFinal[property] = dinosObj[property]["imgSrcSm"];
      }

        // Search bar initialization
        document.addEventListener("DOMContentLoaded", function () {
          const elems = document.querySelectorAll(".autocomplete");
          const instances = M.Autocomplete.init(elems, {
            data: dinosObjFinal,
            limit: 5,
            onAutocomplete: setGlobalVariable,
          });
        })
      };
    
      // Set variable for redirection to list of dinos
      const setGlobalVariable = function (e) {
        localStorage.setItem("clickedDino", e);
        window.location.href = "dinos.html";
      };
    
      return {
        init: function () {
          // Load event listener for the bar
          loadEventListeners();
        }
      };
    })();
    
SearchBarCtrl.init();


}