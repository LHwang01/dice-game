"use strict";

let randomNumber1 = Math.round(Math.random() * 5 + 1);

//console.log(randomNumber1);
document.querySelectorAll(".dice img")[0].setAttribute("src", "./images/dice" + randomNumber1 + ".png");


let randomNumber2 = Math.round(Math.random() * 5 + 1);

//console.log(randomNumber2);
console.log(document.querySelectorAll(".dice img")[1].setAttribute("src", "./images/dice" + randomNumber2 + ".png"));

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "It Was a Draw";
}