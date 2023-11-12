const computerInput = parseInt(Math.floor(Math.random() * 3));

function evaluateWinner() {
    var userInput = parseInt(document.getElementById('user-choice').value);
    var gameOverMessage = "You picked " + choiceToString(userInput) + ". The computer picked " + choiceToString(computerInput) + ". ";
    if (userInput === computerInput) {
        gameOverMessage += "It's a draw.";
    } else if (userInput - computerInput === 1 || userInput - computerInput === -2) {
        gameOverMessage += "You win.";
    } else {
        gameOverMessage += "You lose.";
    }
    document.getElementById('user-choice').style.display = 'none';
    document.getElementById('submit-choice').style.display = 'none';
    document.getElementById('game-over-message').innerHTML = gameOverMessage;
}

function choiceToString(input) {
    if (input === 0) {
        return "Rock";
    } else if (input === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

document.getElementById('submit-choice').addEventListener('click', (event) => evaluateWinner());