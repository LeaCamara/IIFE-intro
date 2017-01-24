"use strict";

// This is invoking the function right away:
var sandwich = (function() {

  var prices = {
    "pb&j": 2.00,
    "cheese": 0.75
  };

  var something = ["cheese", "meat", "potato"];

  return {
    getSandwichPrice: function(sandwichname){
      return prices[sandwichname];
    },
    getSandwichName: function(whichone){
      return something[whichone];
    }
  };

})(); // THIS IS THE IIFE PART!!! where you call it right away
// }()); this will probably work too

// sandwich returns as an object
// sandwich.prices returns as undefined
// sandwich.getSandwichPrice("cheese") returns 0.75

// prices is an object with key/value pairs
// what is being returned is an object, and that object has two items in it
// a function can return a variable, and that variable can be an array, a function, an object, or even another variable
// in this case, it's a variable that returns two functions
// we're attaching getSandwichName and getSandwichPrice to the sandwich variable
