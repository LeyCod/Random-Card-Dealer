/* eslint-disable */
import "bootstrap";
import "./style.css";

//TODO Create a general .card class that applies the general styles to each card.
//TODO CSS class for each suit: .spade, .club, .heart & .diamond.
//! ♦ ♥ ♠ ♣

const RandomCard = () => {
  const RandomCardSuit = () => {
    const CardSuits = ["♦", "♥", "♠", "♣"];
    const suits = document.querySelectorAll(".suits");

    const RandomSuit = Math.floor(Math.random() * CardSuits.length);

    CardSuits[RandomSuit] == "♦" || CardSuits[RandomSuit] == "♥"
      ? suits.class.add("diamond")
      : null;

    return CardSuits[RandomSuit];
  };

  const RandomCardNumber = () => {
    const CardNumbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

    const RandomMainNumber = Math.floor(Math.random() * CardNumbers.length);

    return CardNumbers[RandomMainNumber];
  };

  document.querySelector(".card-number").innerHTML = RandomCardNumber();
};

const SetTimer = () => window.setInterval(RandomCard, 6000);

window.onload = () => {
  RandomCard();
  SetTimer();
};
