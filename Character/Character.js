//Noah Monnington
"use strict";
alert(`Welcome to the Adventure Realm! Let's create your hero!`);

const characterName = prompt("What is your charactor's name?");

const pet = prompt(`What kind of pet does ${characterName} have?`);

const superpower = prompt(`What is ${characterName}'s special superpower?`);

const likesFighting = confirm(`Does ${characterName} like fighting monsters?

Click OK for YES
Click Cancel for NO`);

alert(`Gathering magic for ${characterName}...almost ready!`);

alert(`====================================
Name: ${characterName}
Pet: ${pet}
Superpower: ${superpower}
${likesFighting ? "Yes" : "No"}
In a faraway land, ${characterName} rides a mighty ${pet}, wielding the 
incredible power of ${superpower}!"
====================================`);