// Noah Monnington
// 4/1/26

"use strict"

let favMonth = prompt("What is your favorite month?");

switch(favMonth.toLowerCase())
{
    case "march":
        confirm("Spring is nice with everything blooming.");
    break;

    case "april":
        confirm("Spring is nice with everything blooming.");
    break;

    case "may":
        confirm("Spring is nice with everything blooming.");
    break;

    case "june":
        confirm("You enjoy the summer months!");
    break;

    case "july":
        confirm("You enjoy the summer months!");
    break;

    case "august":
        confirm("You enjoy the summer months!");
    break;

    case "september":
        confirm("Fall is fun with all of the pretty colors.");
    break;

    case "october":
        confirm("Fall is fun with all of the pretty colors.");
    break;

    case "november":
        confirm("Fall is fun with all of the pretty colors.");
    break;

    case "december":
        confirm("You love the winter months!");
    break;

    case "january":
        confirm("You love the winter months!");
    break;

    case "february":
        confirm("You love the winter months!");
    break;

    default:
        confirm("Other months are interesting too!")
}