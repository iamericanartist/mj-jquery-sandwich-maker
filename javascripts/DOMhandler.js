// console.log("<<<7 IIFE DOMhandler.js loaded >>>");

var finalSandwichPrice = 0;   //Variable to hold the final price. Default to 0.
var selectedTopping;          //Variable to hold topping that the user selects

// Get references to the <select> elements that have all the varied options
var breadChooser = document.getElementById("breads"),
    meatChooser = document.getElementById("meats"),
    cheeseChooser = document.getElementById("cheeses"),
    condimentChooser = document.getElementById("condiments"),
    veggieChooser = document.getElementById("veggies"),
    sandwichEl = document.getElementById("finalSandwichEl");      //Our Final Sandwich destination on the DOM

// A <select> element broadcasts a change event (I went with "click"), so you listen for it
// and get the value of the topping from your augmented IIFE
breadChooser.addEventListener("click", function(event) {
  selectedTopping = event.target.id;                                      //Get the value chosen from the DOM
  selectedTopping = selectedTopping.split("--");
  console.log("We selected: ",selectedTopping[1]);
  if (selectedTopping[0] === "btn"){
    let breads = SandwichMaker.getBreadPrices();
    let breadKey = selectedTopping[1];

    console.log(breadKey,breads[breadKey]);
    // console.log(breads.Stale); //Stale is key - .5 is value     
  }

  // Add the topping to the SandwichMaker to increase the total price
  

});










// SandwichMaker is the global variable; addBread is the property that we added in the Bread.js file; 
// breadSelector is the event that was targeted in the DOM; value is linking to the index.html which 
// is whatever bread we've selected; that value is then passed in (breadChosen) to the 
// function maker.addBread in the Bread.js file ; which is then immediately returned with the value, 
// which is (price), of what breadType we've selected and it's price is then shown in the DOM


// maker.addBreadPrices = function(bread) {
//     var bread =  breadPrices[bread];
//     console.log("runningBread = ",bread );
//     SandwichMaker.addTopping(bread);


console.log("<<<7 is last... Not IIFE tho >>>");
