// Noah Monnington fruit using data types
"use strict";
const applePrice = 1.25;// per apple
const orangePrice = 1.25;// per orange

const numApples = 3;
const numOranges = 2;

const appleCost = applePrice * numApples;
const orangeCost = orangePrice * numOranges;

//Calculate total cost of all items
const totalCost = (appleCost + orangeCost);

// Create a message using template literals
const appleMessage = `You purchased: ${numApples} apples at $${applePrice} each for a total of $${appleCost.toFixed(2)}.`;
const orangeMessage = `You purchased: ${numOranges} apples at $${orangePrice} each for a total of $${orangeCost.toFixed(2)}.`;

console.log(appleMessage, orangeMessage);
