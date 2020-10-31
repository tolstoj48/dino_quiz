// IIFE
;(function dinoListAppIIFE () {
  "use strict";

    // UI Controler
    const UICtrlDinoList = (function () {
      const UISelectors = {
        dinoLinks: ".dino-link",
        main: "main",
        pasted: "#pasted",
        navDinos: "#nav-dinos",
      }
    
      // Shows and switches detail of dino
      const showHTMLDinoDetail = function (dinoDetailData) {
        let htmlResult = `
            <div class="row">
              <article>
                <div id="centered" class="col s12 m8 margin-top-2rem centered">`;
        htmlResult += 
                  `<div class="card ${dinoDetailData.cardCls}">\n
                    <div class="card-content">\n
                      <span class="badge ${dinoDetailData.foodCls}">${dinoDetailData.food}</span>
                      <div class="card-image">
                        <picture>
                          <source srcset="${dinoDetailData.imgSrcSm}" media="(max-width: 600px">
                          <source srcset="${dinoDetailData.imgSrc}" media="(min-width: 601px">
                          <img src="${dinoDetailData.imgSrc}" class="tooltipped" data-tooltip="Autor: ${dinoDetailData.toolTip}" alt="${dinoDetailData.name}">
                        </picture>
                      </div>
                      <span class="card-title"><h5>${dinoDetailData.name}</h5></span>
                      <p>
                        <b> Doba:</b> ${dinoDetailData.era}
                      </p>
                      <p>
                        <b> Délka:</b> ${dinoDetailData.length}
                      </p>
                      <p> 
                        <b> Výška:</b> ${dinoDetailData.height}
                      </p>
                      <p> 
                        <b> Váha:</b> ${dinoDetailData.weigth}
                      </p>
                      <p> 
                        <b> Potrava:</b> ${dinoDetailData.food}
                      </p>
                      <p> 
                        <b> Zajímavost:</b>
                        <blockquote cite="${dinoDetailData.source}">
                        ${dinoDetailData.interestingPoint}
                      </blockquote>
                      </p>
                      <p>
                        <b>Zdroj:</b>
                        <a href="${dinoDetailData.source}"> wikipedia.org </a>
                      </p>
                      <div>
                    </div>
                  </div>
                </div>
              </article>
            </div>`;
        if (document.querySelector(UISelectors.pasted) === null ) {
          let div = document.createElement("div");
          div.className = "container";
          div.id = "pasted";
          div.innerHTML = htmlResult;
          document.querySelector(UISelectors.main).appendChild(div);
        } else {
          document.querySelector(UISelectors.pasted).remove();
          let div = document.createElement("div");
          div.className = "container";
          div.id = "pasted";
          div.innerHTML = htmlResult;
          document.querySelector(UISelectors.main).appendChild(div);
        }
        document.addEventListener('mouseover', function() {
          var elems = document.querySelector('.tooltipped');
          var instances = M.Tooltip.init(elems);
        });
      }
    
      // Move to position of the detail information
      const moveToDinoDetail = function () {
        let rect = document.querySelector(UISelectors.navDinos);
        rect.scrollIntoView();
      }
    
      return {

        // Show dino detail
        showDinoDetail: function(e) {
          // if not img on carousel, then get data and show detail
          if (e.target.tagName !== "IMG") {
            const dinoDetailData = ItemCtrlDinoList.getDinoDetailData(e.target.text);
            showHTMLDinoDetail(dinoDetailData); 
            moveToDinoDetail();
            e.preventDefault();
          }
        },
        // Show dino detail after search bar visit
        showDinoDetailFromSearchBar: function(dinoName) {

          const dinoDetailData = ItemCtrlDinoList.getDinoDetailData(dinoName);
          showHTMLDinoDetail(dinoDetailData); 
          moveToDinoDetail();
        },
      
        // Returns all selectors used
        getSelectors: function () {
          return UISelectors;
        }
      
      }
    })();

    // Item Controler
    const ItemCtrlDinoList = (function () {
      // Data
      const data = DinosListObjCtrl.getDinosArray();
    
      return {
        getDinoDetailData: function (name) {
          return data[name];
        }
      }
    })();


    // Application controler
    const AppDinoList = (function(UICtrlDinoList) {

      // Load event listeners
      const loadEventListeners = function() {

        // Get UI selectors
        const UISelectors = UICtrlDinoList.getSelectors();
        const dinoLinks = document.querySelectorAll(UISelectors.dinoLinks);
        dinoLinks.forEach( function (element) {
          element.addEventListener("click", UICtrlDinoList.showDinoDetail);        
        })
      }

        // Materialize setup for carousel
       document.addEventListener('DOMContentLoaded', function() {
          let elem = document.querySelector('.carousel');
          let instances = M.Carousel.init(elem, {
            numVisible: 12,
            dist: -80,
          })});

        // Left, right arrow keypresses for the carousel on the page
        document.addEventListener("keydown", function (event) {
          let elem = document.querySelector('.carousel');
          if (event.which == 37) {
            M.Carousel.getInstance(elem).prev();
          } else if (event.which == 39) {
            M.Carousel.getInstance(elem).next();
          }
        });

    
      // Lists all dinos from dinsoData object
      const listDinos = function () {
        let result=[];
        Object.keys(dinosArray).forEach(function (key) {
          result.push(dinosArray[key]);
        });
        return result;
      };
    
      // Redirection through the search bar handling
      const redirectedFromSearchBar = function () {
        // Get clickedDino variable from localStorage set by searchBarAutocomplete.js and send to show detail

        if (localStorage.getItem("clickedDino")) {
          UICtrlDinoList.showDinoDetailFromSearchBar(localStorage.getItem("clickedDino"));
          localStorage.removeItem("clickedDino");
       }
      }
    
      // Public methods
      return {
        init: function () {
          // Load event listeners
          loadEventListeners();
          // If redirected through search bar
          redirectedFromSearchBar();
        
        },
        listDinos: function(){
          listDinos()
        }
      }
    
    })(UICtrlDinoList)
    
    AppDinoList.init();
  }
)();



