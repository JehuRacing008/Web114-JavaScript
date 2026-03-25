// Noah Monnington
// 3/25/26
"use strict";
let hourlyWage = Number(prompt("What is your hourly wage?"));

confirm(`You entered ${hourlyWage} per hour. Is that correct?
            Click OK for yes
            Click Cancel for no`);

let hoursWorked = Number(prompt("How many hours did you work this week?"));
// For some reason the console does not like the trim function.
//hoursWorked = hoursWorked.trim();

confirm(`You entered ${hoursWorked} hours. Is that correct?
            Click OK for yes
            Click Cancel for no`);
let grossPay = (hourlyWage * hoursWorked);
let taxes = grossPay * .1;
let netPay = grossPay - taxes
console.log(`${netPay.toFixed(2)} this week.`)

if (hoursWorked > 40)
{
    console.log("You worked overtime this week!")
}
else if (hoursWorked === 40)
{
    console.log("You worked exactly 40 hours")
}
else
{
    console.log("No overtime this week.")
}

if (netPay > 800)
{
    console.log("Great paycheck this week!")
}
else
{
    console.log("Keep working toward a bigger paycheck!")
}