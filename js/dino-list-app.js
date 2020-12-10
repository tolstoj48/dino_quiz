// Main block scope
{
  "use strict";
    // UI Controler
    const UICtrlDinoList = (function () {
      const UISelectors = {
        dinoLinks: ".dino-link",
        main: "main",
        pasted: "#pasted",
        navDinos: "#nav-dinos",
        carousel: ".carousel",
        containerCard: ".container-card",
      };
    
      // Shows and switches detail of dino
      const showHTMLDinoDetail = function (dinoDetailData) {
        let htmlResult = `<div class="row">
              <div id="centered" class="col s12 m8 margin-top-2rem centered">`;
        htmlResult += 
                  `<div class="card ${dinoDetailData.cardCls}">\n
                    <div class="card-content">\n
                      <span class="badge ${dinoDetailData.foodCls}">${dinoDetailData.food}</span>
                        <figure class="card-image">
                          <picture>
                            <source srcset="${dinoDetailData.imgSrcSm}" media="(max-width: 600px">
                            <source srcset="${dinoDetailData.imgSrc}" media="(min-width: 601px">
                            <img src="${dinoDetailData.imgSrc}" class="tooltipped" data-tooltip="Autor: ${dinoDetailData.toolTip}" alt="${dinoDetailData.name}">
                          </picture>
                          <figcaption>
                            ${dinoDetailData.name}
                          </figcaption>
                        </figure>
                      <p>
                        <em>Doba:</em> ${dinoDetailData.era}
                      </p>
                      <p>
                        <em>Délka:</em> ${dinoDetailData.length}
                      </p>
                      <p> 
                        <em>Výška:</em> ${dinoDetailData.height}
                      </p>
                      <p> 
                        <em>Váha:</em> ${dinoDetailData.weigth}
                      </p>
                      <p> 
                        <em>Potrava:</em> ${dinoDetailData.food}
                      </p>
                      <p> 
                        <em>Zajímavost:</em>
                        <blockquote cite="${dinoDetailData.source}">
                        ${dinoDetailData.interestingPoint}
                      </blockquote>
                      </p>
                      <p>
                        <em>Zdroj:</em>
                        <a href="${dinoDetailData.source}"> wikipedia.org </a>
                      </p>
                      <div>
                    </div>
                  </div>
                </div>
              </article>
            </div>`;
        if (document.querySelector(UISelectors.pasted) == null ) {
          let div = document.createElement("div");
          div.id = "pasted";
          div.innerHTML = htmlResult;
          document.querySelector(UISelectors.containerCard).appendChild(div);
        } else {
          document.querySelector(UISelectors.pasted).remove();
          let div = document.createElement("div");
          div.id = "pasted";
          div.innerHTML = htmlResult;
          document.querySelector(UISelectors.containerCard).appendChild(div);
        }
        document.addEventListener("mouseover", function() {
          const elems = document.querySelector(".tooltipped");
          M.Tooltip.init(elems);
        });
      };
    
      // Move to position of the detail information
      const moveToDinoDetail = function () {
        document.getElementById("nav-dinos").scrollIntoView();
      };
    
      return {

        // Show dino detail
        showDinoDetail: function(e) {
          // if not img on carousel, then get data and show detail
          if (e.target.tagName !== "img") {
            const dinoDetailData = ItemCtrlDinoList.getDinoDetailData(e.target.textContent);
            showHTMLDinoDetail(dinoDetailData); 
            moveToDinoDetail();
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
      };
    })();

    // Item Controler
    const ItemCtrlDinoList = (function () {
      // Data
      const data = DinosListObjCtrl.getDinosObj();
    
      return {
        getDinoDetailData: function (name) {
          return data[name];
        }
      };
    })();


    // Application controler
    const AppDinoList = (function(UICtrlDinoList) {
      // Get and store UI selectors for the AppDinoList
      const UISelectors = UICtrlDinoList.getSelectors();
      
      // Set the content of the carousel menu
      const initCarouselAndNav = function initCarouselAndNav() {
        let htmlCarousel = "";
        let htmlNavDinos = "";
        const dinosObj = DinosListObjCtrl.getDinosObj();
        // Sort the object alphabetically
        const keys = Object.keys(dinosObj);
        keys.sort();
        for(let i = 0; i < keys.length; ++i){
          htmlCarousel += `<a class="carousel-item dino-link"><img src="${dinosObj[keys[i]]["imgSrcSm"]}" alt="${keys[i]}" >${keys[i]}</a>`
          htmlNavDinos += `<button class="dino-link" type="button">${keys[i]}</button>`
        }
  
        document.querySelector(UISelectors.carousel).innerHTML = htmlCarousel;
        document.querySelector(UISelectors.navDinos).innerHTML = htmlNavDinos;
      };

      // Load event listeners
      const loadEventListeners = function() {
        const dinoLinks = document.querySelectorAll(UISelectors.dinoLinks);
        dinoLinks.forEach( function (element) {
          element.addEventListener("click", UICtrlDinoList.showDinoDetail);   
        })
          // Materialize setup for carousel
         document.addEventListener("DOMContentLoaded", function() {
            const elem = document.querySelector(".carousel");
            M.Carousel.init(elem, {
              numVisible: 12,
              dist: -80,
            })
          })       
          
          // Left, right arrow keypresses for the carousel list of dinos
          document.addEventListener("keydown", function (event) {
            const elem = document.querySelector(".carousel");
            if (event.key == "ArrowLeft") {
              M.Carousel.getInstance(elem).prev();
            } else if (event.key == "ArrowRight") {
              M.Carousel.getInstance(elem).next();
            }
          });
        
      };
    
      // Lists all dinos from dinosData object
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
      };
    
      // Public methods
      return {
        init: function () {
          // Initi carousel
          initCarouselAndNav();          
          // Load event listeners
          loadEventListeners();
          // If redirected through search bar
          redirectedFromSearchBar();
        
        },
        // Lists all dinos from dinosData object
        listDinos: function(){
          listDinos();
        }
      };
    
    })(UICtrlDinoList);
    
    AppDinoList.init();
}