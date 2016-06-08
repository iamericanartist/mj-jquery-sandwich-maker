console.log("<<< meat.js loaded >>>");

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
  // Private variable to store the different meat prices
  var meatPrices = 0;

  // Augment the original object with another method
  maker.addMeat = function(price) {
    meatPrices += price;
  };
  maker.getMeatPrices = function() {
  	return meatPrices;
  }

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);

SandwichMaker.addMeat(20);
SandwichMaker.addTopping(SandwichMaker.getMeatPrices());
console.log("totalPrice", SandwichMaker.getTotalPrice());
