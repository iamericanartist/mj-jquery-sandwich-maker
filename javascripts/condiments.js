// console.log("<<<5 IIFE condiments.js loaded >>>");
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
  // Private variable to store the different condiment prices
  var condimentPrices= {"Ketchup":        1.00, 
                        "Mayo":           1.75, 
                        "Mustard":        1.75, 
                        "Peanut Butter":  3.50};

  // Augment the original object with another method
  maker.addCondimentPrices = function(condiment) {
    var condiment =  condimentPrices[condiment];
    console.log("runningCondiment = ",condiment );
    SandwichMaker.addTopping(condiment);

  };
  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);

console.log("<<<5 IIFE SandwichMaker is fifth >>>");
