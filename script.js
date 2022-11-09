"use strict";

let secretNumber = (document.querySelector(".secret-number").value = Number(
  Math.trunc(Math.random() * 20) + 1
));
// let mesagge = document.querySelector(".guess").textContent;
let score = 20;
let highScore = 1;

const displayMesagge = function (mesagge) {
  document.querySelector(".guess").textContent = mesagge;
};

document.querySelector(".submit").addEventListener("click", function () {
  // document.querySelector(".container").style.backgroundColor = "#60b347";
  let inputNr = Number(document.querySelector(".check-number").value);

  if (!inputNr) {
    displayMesagge("⛔ No Number");
  } else if (inputNr !== secretNumber) {
    displayMesagge(inputNr > secretNumber ? "📈 Too high" : "📉 Too low");
    score--;
    console.log(score);
    highScore++;
    console.log(highScore);
    document.querySelector(".scoreNr").textContent = score;
  } else if (inputNr === secretNumber) {
    displayMesagge("🎉 Correct Number");
    document.querySelector(".container").style.backgroundColor = "#60b347";
    document.querySelector(".secret-number").style.width = "30rem";
    document.querySelector(".secret-number").textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      console.log(highScore);
      document.querySelector(".highscore").textContent = highScore;
    }
  }
});

document.querySelector(".aagain").addEventListener("click", function () {
  secretNumber = document.querySelector(".secret-number").value = Number(
    Math.trunc(Math.random() * 20) + 1
  );
  score = 20;
  displayMesagge("Start guessing...");
  document.querySelector(".container").style.backgroundColor =
    "hsl(0, 0%, 15%)";
  document.querySelector(".secret-number").textContent = "?";
  document.querySelector(".check-number").value = "";
  document.querySelector(".scoreNr").textContent = score;
});
