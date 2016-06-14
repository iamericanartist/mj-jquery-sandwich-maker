console.log("<<< SandwichMaker.js loaded >>>");

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





// var SolarSystem = (function() {
// 	var planets = ["Mercury", "Venus", "Earth", "Mars", "Xenon6", "Claire"];
// 	var planetsLandedUpon = 234;
// 	// var planetName = "Larry" //PRIVATE AS DEFINED IN THE FUNCTION
// 	var spacecraft = ["U.S.S. Enterprise", "Voyager", "Cassini", "Yo Mama"];

// 	return {
// 		//getter for an array of planets that cannot be modified.
// 		getPlanets: function() {
// 			return planets;
// 		},
// 		//Getter/setter for number of planets that humans have landed people or robots on.
// 		getPlanetsLandedOn: function() {
// 			return planetsLandedUpon;
// 		},
// 		setPlanetsLandedOnNumber: function(num) {
// 			planetsLandedUpon = num;
// 		}, 		
// 		//public property for holding a last modified date.
// 		lastModified: Date.now(),
// 		// planetName:"Fred", //PUBLIC AS DEFINED WITH NO var
// 		//Getter/setter for spacecraft currently exploring solar system. These should be stored in a private
// 		getSpacecraft: function(){
// 			return spacecraft;	
// 		},
// 		addSpacecraft: function(newShip){
// 			spacecraft.push(newShip)
// 		}
// 	}

// })();