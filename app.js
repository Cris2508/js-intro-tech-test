import { cards } from "./data/cardsData.js";
console.log(cards);

const cardContainer = document.querySelector(".card-container");
const heartsButton = document.getElementById("hearts-button");
const allCardsButton = document.getElementById("all-cards-button");
const cardColourBlack = document.getElementsByClassName(".card--black");
const cardColourRed = document.getElementsByClassName(".card--red");

const cardSuit = cards.map((element) => element.suit);
const cardColour = cards.map((element) => element.colour);
const cardValue = cards.map((element) => element.value);
const cardSymbol = cards.map((element) => element.symbol);

// Create card

const createCardBlack = (suit, value, symbol) => {
  let htmlCardBlack = `
    <div class="card-container">
        <div class="card">
            <div class="card--black">
                <h3 class="card__heading">
                ${value} of ${symbol}
                </h3>
                <p class="card__description">
                The ${value} of ${suit}
                </p>
            </div>
        </div>
    </div>`;
  return htmlCardBlack;
};

const createCardRed = (suit, value, symbol) => {
  let htmlCardRed = `
    <div class="card-container">
        <div class="card">
            <div class="card--red">
                <h3 class="card__heading">
                ${value} of ${symbol}
                </h3>
                <p class="card__description">
                The ${value} of ${suit}
                </p>
            </div>
        </div>
    </div>`;
  return htmlCardRed;
};

for (let index = 0; index < cards.length; index++) {
  const suit = cardSuit[index];
  const value = cardValue[index];
  const symbol = cardSymbol[index];

  cardContainer.innerHTML += createCardBlack(suit, value, symbol);
  cardContainer.innerHTML += createCardRed(suit, value, symbol);
}

const cardBlack = (black) => {
  if ((cardColour = cardColourBlack)) {
    return cardBlack;
  } else {
    cardColour = cardColourRed;
    return cardColourRed;
  }
};

const handleHeartsButton = (event) => {
  if (cardSuit === "hearts") {
    cardContainer.innerHTML.includes("hearts");
  }
};

heartsButton.addEventListener("click", handleHeartsButton);

const handleAllCardsButton = (event) => {};

allCardsButton.addEventListener("click", handleAllCardsButton);
