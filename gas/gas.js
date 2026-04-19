// Noah Monnington
// 4/18/26

//Global Variables
let entryCount = 0;
let gasTotal = 0;


// Function used to calculate the gas average. 
function calcGasAvg(){
    let input = prompt(`Enter your first week's gas total. Enter -1 when you are done.`);
    if (input === null){
        return null;
    }
   let weeklyGas = parseFloat(input);
    while (weeklyGas != -1){
        if(isNaN(weeklyGas)){
            return null;
        }
            gasTotal += weeklyGas;
            entryCount++;

        input = prompt(`Enter your next week's gas total. Enter -1 when you are done.`);
        if (input === null){
            return null;
        }  
        weeklyGas = parseFloat(input);
    }
    return gasTotal / entryCount;
}

// If statements used to check the user's input.
let userName = prompt(`Enter your name: `);
if (userName === null){
     alert(`You cancelled the name prompt.`);
     exit;
}
else if (userName.trim() === ""){
     alert(`You must have a name.`);
     exit;
}
    let average = calcGasAvg();

if (entryCount === 0){
    alert(`No gas totals were entered.`);
}
// Information output to the screen.
else if (entryCount === 1){
        alert(`${userName} has a gas total of $${average.toFixed(2)}`);
        alert(`${entryCount} entry was entered.`);
    }
    else{
        alert(`${userName} has a gas average of $${average.toFixed(2)}`);
        alert(`${entryCount} entries were entered.`);
    }


