// IIFE
;(function () {
    "use strict";

    // Autocomplete solution for the search bar
    const SearchBarCtrl = (function () {
    
      // Load event listeners
      const loadEventListeners = function () {
        document.addEventListener("DOMContentLoaded", function () {
          let elems = document.querySelectorAll(".autocomplete");
          let instances = M.Autocomplete.init(elems, {
            data: dinosArray,
            limit: 3,
            onAutocomplete: setGlobalVariable,
          });
          M.Autocomplete.getInstance(elems[0]).updateData({
            "Ankylosaurus": "./images/ankylosaurus.png",
            "Stegosaurus": "./images/stegosaurus.png",
          })
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
    })();

    SearchBarCtrl.init();
  }
)();