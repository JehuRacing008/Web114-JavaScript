// Noah Monnington
// 5/9/26
"use strict"

/* 
    This program acts as a mini wallet. This is a very simplified version which I 
    hope to expand on in the future. I made this program with six buttons. 
    Five of them are for entering numbers and the 
    last button is for totaling everything up. I used six event listeners for this. 
    Each event(button) has a function that performs some simple math and a NaN 
    check on the entered data.
*/

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

//Data( moneyCash OBJECT)
const moneyCash = {
    income: {
    name: "Monthly Income",
    text: "#10d809",
    quote: "Entering total income for the month."
},
    give: {
    name: "Tithe/Charity",
    text: "#cfe604",
    quote: "Entering Tithe/Charity for the monthly paycheck."
},
    housing: {
    name: "Housing",
    text: "#e20909",
    quote: "Monthly housing expenses."
},
    invest: {
    name: "Investments",
    text: "#0085f1",
    quote: "Enter your monthly investments."
},
    grocery: {
    name: "Grocery expenses",
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
    document.body.style.color = money.text;

    // Change the message inside the quote
    quote.textContent = money.quote;

    // Change the title content
    title.textContent = money.name.toUpperCase();   
}

// Event Handlers
/* Each function takes in information checks if it is NaN then performs the math operation
    and prints the information to the screen. I had trouble for a while figuring out how to
    display the variables. After several attempts I asked chatgpt how to do it. It honestly made
    it more confusing but I was able to figure out how to display the variables. Eventually
    I got it to work!
*/
let moneyTotal = 0;
let moneyCount = 0;
function monthlyIncome(){
    moneyChanger("income");
    let incomeVal = parseFloat(prompt(`Enter your total monthly income: $`));
    if (isNaN(incomeVal)){ incomeVal = 0;}
    moneyTotal = incomeVal;
    incomeDisplay.textContent = (`Total Income: $${incomeVal.toFixed(2)}`);
}

function give(){
    moneyChanger("give");
    let giveVal = parseFloat(prompt(`Enter your tithe/giveaway amount: $`));
    if (isNaN(giveVal)){ giveVal = 0;}
    moneyTotal -= giveVal;
    giveDisplay.textContent = (`Charity: $${giveVal.toFixed(2)}`);

}

function housingBill(){
    moneyChanger("housing");
    let housingBillVal = parseFloat(prompt(`Enter your monthly housing bill: $`));
    if (isNaN(housingBillVal)){ housingBillVal = 0;}
    moneyTotal -= housingBillVal;
    housingDisplay.textContent = (`Housing Bill: $${housingBillVal.toFixed(2)}`);

}

function investments(){
    moneyChanger("invest");
    let investmentsVal = parseFloat(prompt(`Enter your monthly investments: $`));
    if (isNaN(investmentsVal)){ investmentsVal = 0;}
    moneyTotal -= investmentsVal;
    investmentDisplay.textContent = (`Investments: $${investmentsVal.toFixed(2)}`);

}

function groceryBill(){
    moneyChanger("grocery");
    let groceryBillVal = parseFloat(prompt(`Enter your monthly grocery bill: $`));
    if (isNaN(groceryBillVal)){ groceryBillVal = 0;}
    moneyTotal -= groceryBillVal; 
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