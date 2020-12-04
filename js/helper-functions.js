"use strict";  

;export const Helpers = (function helpersIIFE() {
  
  // Adds zeros in front of numbers
  const checkTime = function checkTime(i) {
    if (i < 10 && i > 0) {i = "0" + i};
    return i;
  };
  
  // Function to compare used in Array.sort ()
  const compare = function compare(a, b) {
    const resultA = a[accordingToKey];
    const resultB = b[accordingToKey];
  
    let comparison = 0;
    if (resultA > resultB) {
      comparison = 1;
    } else if (resultA < resultB) {
      comparison = -1;
    }
    return comparison * -1;
  };

  // Function to compare used in Array.sort ()
  const negativeCompare = function negativeCompare(a, b) {
    const resultA = a[accordingToKey];
    const resultB = b[accordingToKey];
  
    let comparison = 0;
    if (resultA > resultB) {
      comparison = 1;
    } else if (resultA < resultB) {
      comparison = -1;
    }
    return comparison;
  };
  
  return {
    checkTime: function(i) {
      return checkTime(i);
    },
    compare: function (a, b) {
      return compare(a,b);
    },
    negativeCompare: function (a, b) {
      return negativeCompare(a, b);
    },
  };
})()