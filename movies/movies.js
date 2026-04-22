// Noah Monnington
// 4/22/26

"use strict"

const movies = [
    {
    src: "images/f1.jpg",
    alt: "An old guy comes back to win",
    title: "F1"
    },
    {
    src: "images/rogueOne.jpg",
    alt: "A daring mission gives the struggling Rebellion hope",
    title: "Rogue One"  
    },
    {
    src: "images/fordvferrari.webp",
    alt: "Ford goes to battle with Ferrari",
    title: "Ford VS. Ferrari"  
    }
];

let currentIndex = 0;
//start at the beginning

//select the html elements
const posterImage = document.querySelector("#gallery");
const elemenetContent = document.querySelector("#caption");
const headingElement = document.querySelector("#gallery-heading");

//Previous and Next buttons
const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");

function showMovie(index) {
    const movie = movies[index];
    posterImage.src = movie.src;
//set the image source (file path) to the movies's src property
    posterImage.alt = movie.alt;

    posterImage.title = movie.title;

    elemenetContent.textContent = movie.alt;

    headingElement.textContent = `Movie ${index + 1} of ${movies.length}`;
    showMovie(currentIndex);
}



function handlePrevClick() {
    currentIndex--;

        if (currentIndex < 0) {
        currentIndex = movies.length - 1;
        }
    showMovie(currentIndex);
}

function handleNextClick() {
    currentIndex++;

        if (currentIndex >= movies.length){
        currentIndex = 0;
        }
    showMovie(currentIndex);
}

nextButton.addEventListener("click", handleNextClick);
prevButton.addEventListener("click", handlePrevClick);