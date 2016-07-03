// console.log("<<<3 IIFE meat.js loaded >>>");
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
  // Private variable to store the different meat prices
  var meatPrices= {"Turkey":    2.00, 
                    "Ham":      2.75, 
                    "Spam":     3.75, 
                    "Bologna":  0.50};

  // Augment the original object with another method
  maker.addMeatPrices = function(meat) {
  	var meat =  meatPrices[meat];
  	console.log("runningMeat = ",meat );
    SandwichMaker.addTopping(meat);

  };
  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);


console.log("<<<3 IIFE SandwichMaker is third >>>");
