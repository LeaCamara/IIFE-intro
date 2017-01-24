"use strict";

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

console.log("sandwich", sandwich);

var sandwichCost = sandwich.getSandwichPrice("pb&j");
console.log("sandwichCost", sandwichCost);

var toppingCost = sandwich.getToppingPrice("captaincrunch");

var output = document.getElementById("sandwich");
var output2 = document.getElementById("sandwich2");

// output.innerHTML = `<h2>Your sandwich cost: ${sandwichCost}</h2>`;
// prints this to page: Your sandwich cost: 2

output.innerHTML = `<h2>Your sandwich cost: $ ${(sandwichCost.toFixed(2))}</h2>`;
// Your sandwich cost: $ 2.00
output2.innerHTML = `<h2>Your sandwich cost: $ ${(sandwichCost + toppingCost).toFixed(2)}</h2>`;
// Your sandwich cost: $ 2.10

// ADDING MUSTARD TO THE TOPPINGS LIST:
var obj = {mustard: .50};
// obj.mustard = ".50";
sandwich.setTopping(obj);
