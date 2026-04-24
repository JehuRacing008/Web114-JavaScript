// Noah Monnington
// 4/23/26
"use strict"

// Select Elements
const quote = document.querySelector("#quote");
const title = document.querySelector("#title");

const happyBtn = document.querySelector("#happyBtn");
const calmBtn = document.querySelector("#calmBtn");
const angryBtn = document.querySelector("#angryBtn");
const sleepyBtn = document.querySelector("#sleepyBtn");
const heartbrokenBtn = document.querySelector("#heartbrokenBtn");


//Data( MOODS OBJECT)
const moods = {
    happy: {
    name: "Happy",
    bg: "#ffe66d",
    text: "#80965d",
    quote: "Everything feels bright and fun!"
},
    calm: {
    name: "Calm",
    bg: "#067070",
    text: "#c5d46b",
    quote: "Take a deep breath. Everything is okay."
},
    angry: {
    name: "Angry",
    bg: "#750f02",
    text: "#000000",
    quote: "Not happy Bob, Not Happy. Ask me why?"
},
    sleepy: {
    name: "Sleepy",
    bg: "#5f29f1",
    text: "#8ea6b9",
    quote: "Yaaaawwn. You look very tired."
},
// My extra mood.
    heartbroken: {
    name: "Heartbroken",
    bg: "#382768c5",
    text: "#db6a90",
    quote: "Welp......it happens I guess."
}
}

// Helper Function
function changeMood(moodName){
    const mood = moods[moodName];

    //Change the page info
    document.body.style.backgroundColor = mood.bg;
    document.body.style.color = mood.text;

    // Change the message inside the quote
    quote.textContent = mood.quote;

    // Change the title content
    title.textContent = mood.name.toUpperCase();

    // Debugging / Testing
    console.log ("Mood selected:" , moodName);
    console.log ("Mood settings:", mood);    
    if (moodCount > 3){
        alert(`Oh my! You are changing moods a lot! Maybe take a break.`);
    }
}

// Event Handlers
// moodCount keeps track of how many times you change moods.
let moodCount = 0;
function handleHappyClick(){
    changeMood("happy");
    moodCount++;
    console.log(moodCount);
}

function handleCalmClick(){
    changeMood("calm");
    moodCount++;
    console.log(moodCount);
}

function handleAngryClick(){
    changeMood("angry");
    moodCount++;
    console.log(moodCount);
}

function handleSleepyClick(){
    changeMood("sleepy");
    moodCount++;
    console.log(moodCount);
}

function handleHeartbrokenClick(){
    changeMood("heartbroken");
    moodCount++;
    console.log(moodCount);
}


// Event Listeners
happyBtn.addEventListener("click", handleHappyClick);
calmBtn.addEventListener("click", handleCalmClick);
angryBtn.addEventListener("click", handleAngryClick);
sleepyBtn.addEventListener("click", handleSleepyClick);
heartbrokenBtn.addEventListener("click", handleHeartbrokenClick);

