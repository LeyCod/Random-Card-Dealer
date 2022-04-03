/* eslint-disable */
import "bootstrap";
import "./style.css";

//TODO Create a general .card class that applies the general styles to each card.
//! ♦ ♥ ♠ ♣

/* Card Suits */
const CardSuits = {
  "♦": "diamond",
  "♥": "hearth",
  "♠": "spade",
  "♣": "club"
};

/* Card Numbers */
const CardNumbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

/* DOM Elements */
const RandomMainNumber = document.querySelector(".card-number");
const RandomCardButton = document.querySelector("#random-btn");
const TopSuit = document.querySelector(".card-suit-top");
const BottomSuit = document.querySelector(".card-suit-bottom");
const ColorSuits = document.querySelectorAll(".suits");

/* Functions */
const RandomCard = () => {
  const RandomSuit = Object.keys(CardSuits)[Math.floor(Math.random() * 4)]; //CardSuit Key obtained.
  const SuitClass = CardSuits[RandomSuit]; //CardSuit Value obtained.

  TopSuit.innerHTML = RandomSuit;
  BottomSuit.innerHTML = RandomSuit;

  RandomMainNumber.innerHTML =
    CardNumbers[Math.floor(Math.random() * CardNumbers.length)]; //Print a random number from CardNumbers

  if (SuitClass === "diamond" || SuitClass === "hearth") {
    TopSuit.style.color = "red";
    BottomSuit.style.color = "red";
  } else {
    TopSuit.style.color = "black";
    BottomSuit.style.color = "black";
  }
};

RandomCardButton.addEventListener("click", () => {
  RandomCard();
}); //Generate a random card clicking the button

const SetTimer = () => window.setInterval(RandomCard, 10000); //timmer set every 10 seg.

window.onload = () => {
  RandomCard();
  SetTimer();
};
