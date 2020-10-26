// IIEF
;(function () {
		"use strict";

		const TypeWriterEffect = (function(){
		  // List of words
		  let content = [ 
		  	"stegosaurus", 
		  	"ankylosaurus", 
		  	"apatosaurus", 
		    "tyrannosaurus",
		    "amargosaurus",
		  ];
		
		  // Current sentence being processed
		  let part = 0;
		
		  // Character number of the current sentence being processed 
		  let partIndex = 0;
		
		  // Holds the handle returned from setInterval
		  let intervalVal;
		
		  // Element that holds the text
		  let element = document.querySelector("#text-twe");
		
		  // Implements typing effect
		  function Type() { 
		  	// Get substring with 1 characater added
		  	let text =  content[part].substring(0, partIndex + 1);
		  	element.innerHTML = text;
		  	partIndex++;
			
		  	// If full sentence has been displayed then start to delete the sentence after some time
		  	if(text === content[part]) {
		  		// Hide the cursor
		  		clearInterval(intervalVal);
		  		setTimeout(function() {
		  			intervalVal = setInterval(Delete, 100);
		  		}, 1000);
		  	}
		  }
		
		  // Implements deleting effect
		  function Delete() {
		  	// Get substring with 1 characater deleted
		  	let text =  content[part].substring(0, partIndex - 1);
		  	element.innerHTML = text;
		  	partIndex--;
			
		  	// If sentence has been deleted then start to display the next sentence
		  	if(text === '') {
		  		clearInterval(intervalVal);
				
		  		// If current sentence was last then display the first one, else move to the next
		  		if(part == (content.length - 1))
		  			part = 0;
		  		else
		  			part++;
				
		  		partIndex = 0;
				
		  		// Start to display the next sentence after some time
		  		setTimeout(function() {
		  			intervalVal = setInterval(Type, 150);
		  		}, 200);
		  	}
		  }
		
		  const init = function() {
		    intervalVal = setInterval(Type, 150);
		  }
		
		return {
		  init: function () {
		    init();
		  }
		}

		})();

		TypeWriterEffect.init();
	}
)();