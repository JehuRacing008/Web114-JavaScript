// Noah Monnington
// 4/23/26
"use strict"

// Select Elements
const quote = document.querySelector("#quote");
const title = document.querySelector("#title");

const incomeBtn = document.querySelector("#incomeBtn");
const giveBtn = document.querySelector("#giveBtn");
const housingBtn = document.querySelector("#housingBtn");
const investBtn = document.querySelector("#investBtn");
const groceryBtn = document.querySelector("#groceryBtn");
const totalBtn = document.querySelector("#totalBtn");
const incomeDisplay = document.querySelector("#incomeDisplay");
const giveDisplay = document.querySelector("#giveDisplay");
const housingDisplay = document.querySelector("#housingDisplay");
const investmentDisplay = document.querySelector("#investmentDisplay");
const groceryDisplay = document.querySelector("#groceryDisplay");
const leftOver = document.querySelector("#leftOver");





//Data( MOODS OBJECT)
const moneyCash = {
    income: {
    name: "Monthly Income",
    //bg: "#ffe66d",
    text: "#80965d",
    quote: "Entering total income for the month."
},
    give: {
    name: "Tithe/Charity",
    //bg: "#067070",
    text: "#c5d46b",
    quote: "Entering Tithe/Charity for the monthly paycheck."
},
    housing: {
    name: "Housing",
    //bg: "#750f02",
    text: "#000000",
    quote: "Monthly housing expenses."
},
    invest: {
    name: "Investments",
    //bg: "#5f29f1",
    text: "#8ea6b9",
    quote: "Enter your monthly investments."
},
// My extra mood.
    grocery: {
    name: "Grocery expenses",
    //bg: "#382768c5",
    text: "#db6a90",
    quote: "Enter you monthly grocery expenses."
},
    total: {
    name: "Total",
    text: "white",
    quote: "Total everything up."
    }
}

// Helper Function
function moneyChanger(moneyName){
    const money = moneyCash[moneyName];

    //Change the page info
    //document.body.style.backgroundColor = money.bg;
    //document.body.style.color = money.text;

    // Change the message inside the quote
    quote.textContent = money.quote;

    // Change the title content
    title.textContent = money.name.toUpperCase();

    // Debugging / Testing
    console.log ("Button selected:" , moneyName);
    console.log ("Button settings:", money);    
   // if (moneyCount > 3){
       // alert(`Oh my! You are changing moods a lot! Maybe take a break.`);
   // }
}

// Event Handlers
// moodCount keeps track of how many times you change moods.
let moneyTotal = 0;
let moneyCount = 0;
function monthlyIncome(){
    moneyChanger("income");
    moneyCount++;
    //console.log(moneyCount);
    let incomeVal = parseFloat(prompt(`Enter your total monthly income: $`));
    moneyTotal = incomeVal;
    //console.log(moneyTotal);
    incomeDisplay.textContent = (`Total Income: $${incomeVal.toFixed(2)}`);
}

function give(){
    moneyChanger("give");
    //moneyCount++;
    //console.log(moneyCount);
    let giveVal = parseFloat(prompt(`Enter your tithe/giveaway amount: $`));
    moneyTotal -= giveVal;
    //console.log(moneyTotal);
    giveDisplay.textContent = (`Charity: $${giveVal.toFixed(2)}`);

}

function housingBill(){
    moneyChanger("housing");
    //moneyCount++;
    //console.log(moneyCount);
    let housingBillVal = parseFloat(prompt(`Enter your monthly housing bill: $`));
    moneyTotal -= housingBillVal;
    //console.log(moneyTotal);
    housingDisplay.textContent = (`Housing Bill: $${housingBillVal.toFixed(2)}`);

}

function investments(){
    moneyChanger("invest");
    //moneyCount++;
    //console.log(moneyCount);
    let investmentsVal = parseFloat(prompt(`Enter your monthly investments: $`));
    moneyTotal -= investmentsVal;
    //console.log(moneyTotal);
    investmentDisplay.textContent = (`Investments: $${investmentsVal.toFixed(2)}`);

}

function groceryBill(){
    moneyChanger("grocery");
   // moneyCount++;
    //console.log(moneyCount);
    let groceryBillVal = parseFloat(prompt(`Enter your monthly grocery bill: $`));
    moneyTotal -= groceryBillVal; 
    //console.log(moneyTotal);
    groceryDisplay.textContent = (`Grocery Bill: $${groceryBillVal.toFixed(2)}`);

}

function display(){
    moneyChanger("total");
    leftOver.textContent = (`Leftovers go toward dream car: $${moneyTotal.toFixed(2)}`);
}



// Event Listeners
incomeBtn.addEventListener("click", monthlyIncome);
giveBtn.addEventListener("click", give);
housingBtn.addEventListener("click", housingBill);
investBtn.addEventListener("click", investments);
groceryBtn.addEventListener("click", groceryBill);
totalBtn.addEventListener("click", display);