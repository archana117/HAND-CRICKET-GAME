let game = {
  totalScore: 0
};

function startGame() {
  document.getElementById("startButton").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
  document.getElementById("prompt").innerText = "Choose a number:";
  document.getElementById("result").innerText = "";
  document.getElementById("error").innerText = "";
  game.totalScore = 0;
  document.getElementById("totalScore").innerText = game.totalScore;
}

function exitGame() {
  document.getElementById("gameArea").style.display = "none";
  document.getElementById("startButton").style.display = "block";
}

function playGame(playerScore) {
  const computerScore = Math.floor(Math.random() * 7);
  document.getElementById("result").innerHTML = `Player: ${playerScore} | Computer: ${computerScore}`;

  if (playerScore === computerScore) {
    document.getElementById("result").innerHTML += `<br/>You are out! Your total score is: ${game.totalScore}`;
    showPlayAgainModal();
  } else {
    game.totalScore += playerScore;
    document.getElementById("totalScore").innerText = game.totalScore;
  }
}

function showPlayAgainModal() {
  document.getElementById("finalScore").innerText = `Your total score is: ${game.totalScore}`;
  document.getElementById("playAgainModal").style.display = "flex";
}

function confirmPlayAgain(playAgain) {
  document.getElementById("playAgainModal").style.display = "none";
  if (playAgain) {
    startGame();
  } else {
    exitGame();
  }
}

