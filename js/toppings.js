//separating code into meaningful pages

// ***** FOR REFERENCE from sandwich.js ******
// var sandwich = (function() {

//   var prices = {
//     "pb&j": 2.00,
//     "cheese": 0.75
//   };

//   var something = ["cheese", "meat", "potato"];

//   return {
//     getSandwichPrice: function(sandwichname){
//       return prices[sandwichname];
//     },
//     getSandwichName: function(whichone){
//       return something[whichone];
//     }
//   };

// })();

"use strict";

var sandwich = (function(originalSandwich){

  var toppingPrices = {
    whippedcream: 0.50,
    mayo: 0.25,
    captaincrunch: 0.10,
    bacon: 1.00
  };

// use the parameter name to tie this object to the original sandwich object we wrote on sandwich.js (reference above):
// This is a POLYMORPHISM
  originalSandwich.getToppingPrice = function(topping){
    return toppingPrices[topping];
  };

  return originalSandwich;
  // console.log "sandwich" returns an Object that contains:
  //   getSandwichName: (whichone)
  //   getSandwichPrice: (sandwichname)
  //   getToppingPrice: (topping)
  //   __proto__: Object


})(sandwich);
// pass in parameter/argument "sandwich" to get it to immediately invoke
