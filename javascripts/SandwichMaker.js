console.log("<<< SandwichMaker.js loaded >>>");


var sandwichCost = Sandwich.getSandwichPrice("cheese");
var toppingCost = Sandwich.getToppingPrice("captainCrunch");
var output = document.getElementById("sandwich");

output.innerHTML = sandwichCost + toppingCost;


var Sandwich = (function() {
  var prices = {"pb&j": 2.00, "cheese": .75};

  return {
    getSandwichPrice: function(sandwich) {
      return prices[sandwich];
    }
  };
})();




//Kick off our IIFE object here... START:
var SandwichMaker = (function() {
var totalPrice = 0;   // Private variable to store the sandwich PRICE

  // Return the public interface that other code can interact with
  return {
    addTopping: function(toppingPrice) {
      totalPrice += toppingPrice;
			console.log(" asdfasdf asdf runningMeat = ",totalPrice );
      return totalPrice;
    }
  };
})();