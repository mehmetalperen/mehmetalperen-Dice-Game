




var scorePlayer1 = 0;
var scorePlayer2 = 0;
document.querySelector("#play-button").addEventListener("click", rollTheDicee);
document.querySelector("#reset-button").addEventListener("click", resetGame);

function winner(num1, num2) {

  if (num1 > num2) {
    document.querySelector("h1").textContent = "🚩Player 1 wins";
    scorePlayer1++;
    document.querySelector("#player1-score").textContent = "Player 1 score: " + scorePlayer1;

  } else if (num2 > num1) {
    document.querySelector("h1").textContent = "Player 2 wins 🚩";
    scorePlayer2++;
    document.querySelector("#player2-score").textContent = "Player 2 score: " + scorePlayer2;


  } else {
    document.querySelector("h1").textContent = "Draw";

  }

}

function rollTheDicee() {
  var num1 = Math.floor(Math.random() * 6) +1;
  var num2 = Math.floor(Math.random() * 6) +1;
    document.getElementById("first-pic").src = "images/dice" + num1 + ".png";
    document.getElementById("second-pic").src = "images/dice" + num2 + ".png";
    winner(num1, num2);


}

function resetGame() {
  location.reload();
}
