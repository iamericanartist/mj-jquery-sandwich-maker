// console.log("<<<7 IIFE DOMhandler.js loaded >>>");

var finalSandwichPrice = 0;   //Variable to hold the final price. Default to 0.
var selectedTopping;          //Variable to hold topping that the user selects

// Get references to the <select> elements that have all the varied options
var breadChooser = document.getElementById("breads"),
    meatChooser = document.getElementById("meats"),
    cheeseChooser = document.getElementById("cheeses"),
    condimentChooser = document.getElementById("condiments"),
    veggieChooser = document.getElementById("veggies"),
    sandwichEl = document.getElementById("finalSandwichEl"),  //Our Final Sandwich destination on the DOM
    totalEl = document.getElementById("totalEl");

// A <select> element broadcasts a change event (I went with "click"), so you listen for it
// and get the value of the topping from your augmented IIFE
breadChooser.addEventListener("click", function(event) {
  selectedTopping = event.target.id;                      //Get the value chosen from the DOM
  selectedTopping = selectedTopping.split("--");          //Splitting the selectedTopping gives us an array of "btn [0]" and "(bread choosen [1])"
  
  if (selectedTopping[0] === "btn"){
    let breads = SandwichMaker.getBreadPrices();          //Returns the object representing our breads and prices
    let breadKey = selectedTopping[1];                    //Represents the bread chosen
    finalSandwichPrice += breads[breadKey];               // Add the topping to the SandwichMaker to increase the total price
    sandwichEl.innerHTML += `+$${breads[breadKey]} for ${selectedTopping[1]}<br>`; //Output to DOM
    totalEl.innerHTML = `$${finalSandwichPrice} current total`;

    console.log("We selected: ",selectedTopping[1], "at $",breads[breadKey]);   
    console.log("finalSandwichPrice",finalSandwichPrice );
  }
});

meatChooser.addEventListener("click", function(event) {
  selectedTopping = event.target.id;
  selectedTopping = selectedTopping.split("--");
  
  if (selectedTopping[0] === "btn"){
    let meats = SandwichMaker.getMeatPrices();
    let meatKey = selectedTopping[1];
    finalSandwichPrice += meats[meatKey];
    sandwichEl.innerHTML += `+$${meats[meatKey]} for ${selectedTopping[1]}<br>`;
    totalEl.innerHTML = `$${finalSandwichPrice} current total`;

    console.log("We selected: ",selectedTopping[1], "at $",meats[meatKey]);
    console.log("finalSandwichPrice",finalSandwichPrice );
  }
});

cheeseChooser.addEventListener("click", function(event) {
  selectedTopping = event.target.id;
  selectedTopping = selectedTopping.split("--");
  
  if (selectedTopping[0] === "btn"){
    let cheeses = SandwichMaker.getCheesePrices();
    let cheeseKey = selectedTopping[1];
    finalSandwichPrice += cheeses[cheeseKey];
    sandwichEl.innerHTML += `+$${cheeses[cheeseKey]} for ${selectedTopping[1]}<br>`;
    totalEl.innerHTML = `$${finalSandwichPrice} current total`;

    console.log("We selected: ",selectedTopping[1], "at $",cheeses[cheeseKey]);
    console.log("finalSandwichPrice",finalSandwichPrice );
  }
});

condimentChooser.addEventListener("click", function(event) {
  selectedTopping = event.target.id;
  selectedTopping = selectedTopping.split("--");
  
  if (selectedTopping[0] === "btn"){
    let condiments = SandwichMaker.getCondimentPrices();
    let condimentKey = selectedTopping[1];
    finalSandwichPrice += condiments[condimentKey];
    sandwichEl.innerHTML += `+$${condiments[condimentKey]} for ${selectedTopping[1]}<br>`;
    totalEl.innerHTML = `$${finalSandwichPrice} current total`;

    console.log("We selected: ",selectedTopping[1], "at $",condiments[condimentKey]);
    console.log("finalSandwichPrice",finalSandwichPrice );
  }
});

veggieChooser.addEventListener("click", function(event) {
  selectedTopping = event.target.id;
  selectedTopping = selectedTopping.split("--");
  
  if (selectedTopping[0] === "btn"){
    let veggies = SandwichMaker.getVeggiePrices();
    let veggieKey = selectedTopping[1];
    finalSandwichPrice += veggies[veggieKey];
    sandwichEl.innerHTML += `+$${veggies[veggieKey]} for ${selectedTopping[1]}<br>`;
    totalEl.innerHTML = `$${finalSandwichPrice} current total`;

    console.log("We selected: ",selectedTopping[1], "at $",veggies[veggieKey]);
    console.log("finalSandwichPrice",finalSandwichPrice );
  }
});

console.log("<<<7 is last... Not IIFE tho >>>");
