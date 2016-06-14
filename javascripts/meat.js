console.log("<<< meat.js loaded >>>");

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
  // Private variable to store the different meat prices
	var meatPrices= {"turkey": 2.00, "spam": 2.75, "Bologna": 1.50};


  // Augment the original object with another method
  // maker.addMeat = function(price) {
  //   meatPrices += price;
  // };

  maker.getMeatPrices = function() {
  	return meatPrices;
  };
  maker.addMeatPrices = function(meat) {
  	var runningMeat =  meatPrices[meat];

  	SandwichMaker.addTopping(runningMeat);

  	// console.log("runningMeat = ",runningMeat );
  	// console.log("HELLO", meatPrices[meat]);
  	return meatPrices[meat];

  };
  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);



// SandwichMaker.addMeat(20);
// SandwichMaker.addTopping(SandwichMaker.getMeatPrices());
// console.log("totalPrice", SandwichMaker.getTotalPrice());
