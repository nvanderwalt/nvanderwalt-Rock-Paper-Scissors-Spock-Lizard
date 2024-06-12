let player1Score = 0;
let player2Score = 0;
let computerScore = 0;

/*Function to play as single player
Player1 will choose their option by using the onclick event*/

function play(playerChoice, Multiplayer = false) {
    const choices = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

    let computerChoice = choices[Math.floor(Math.random() * choices.length)]; // Pick a random choice for the computer in the array of choices
    let player2Choice = null; // variable has been declared but hasn’t been assigned a value

    if (Multiplayer) {
        player2Choice = prompt("Player 2, enter your choice (rock, paper, scissors, spock, lizard):").toLowerCase(); // Player2 will play with keyboard through prompt input
        while (!choices.includes(player2Choice)) { // While loop continues until player2 has a valid choice
            alert("Your choice is NOT valid. Please try again.");
            player2Choice = prompt("Player 2, enter your choice (rock, paper, scissors, spock, lizard):").toLowerCase();
        }

        const result = getResult(playerChoice, player2Choice, Multiplayer);
        updateScore(result, Multiplayer);
        displayResult(result, playerChoice, player2Choice, Multiplayer);
    } else {
        const result = getResult(playerChoice, computerChoice, Multiplayer);
        updateScore(result, Multiplayer);
        displayResult(result, playerChoice, computerChoice, Multiplayer);
    }
}

function getResult(playerChoice, opponentChoice, Multiplayer) { // opponentChoice is a parameter that will receive either the computer's choice or Player 2's choice based on how play calls getResult.
    if (playerChoice === opponentChoice) {
        return "It's a tie!!";
    } else if (
        (playerChoice === 'rock' && (opponentChoice === 'scissors' || opponentChoice === 'lizard')) ||
        (playerChoice === 'paper' && (opponentChoice === 'rock' || opponentChoice === 'spock')) ||
        (playerChoice === 'scissors' && (opponentChoice === 'paper' || opponentChoice === 'lizard')) ||
        (playerChoice === 'spock' && (opponentChoice === 'rock' || opponentChoice === 'scissors')) ||
        (playerChoice === 'lizard' && (opponentChoice === 'paper' || opponentChoice === 'spock'))
    ) {
        return "Player 1 wins!";
    } else {
        return Multiplayer ? "Player 2 wins!" : "Computer wins!";
    }
}

function updateScore(result, Multiplayer) {
    if (result === "Player 1 wins!") {
        player1Score++;
    } else if (result === "Player 2 wins!") {
        player2Score++;
    } else if (result === "Computer wins!") {
        computerScore++;
    }
}

function displayResult(result, playerChoice, opponentChoice, Multiplayer) { // 4 parameters where Multiplayer is a boolean value
    const resultDiv = document.getElementById('result'); // fetches the HTML element with the ID result. Game results will be displayed here.
    const scoresDiv = document.getElementById('scores'); // fetches the HTML element with the ID score. Scores will be displayed here.

    resultDiv.innerHTML = `
        <p>Player 1 chose ${playerChoice}.</p>
        <p>${Multiplayer ? "Player 2" : "Computer"} chose ${opponentChoice}.</p>
        <p>${result}</p>
    `; // Corrected closing of template string

    scoresDiv.innerHTML = `
    <p>Player 1 Score: ${player1Score}</p>
    <p>${Multiplayer ? "Player 2 Score: " + player2Score : "Computer Score: " + computerScore}</p>
    `;
}

function resetScores() {
    player1Score = 0;
    player2Score = 0;
    computerScore = 0;
    const scoresDiv = document.getElementById('scores');
    scoresDiv.innerHTML = `
        <p>Player 1 Score: ${player1Score}</p>
        <p>Player 2 Score: ${player2Score}</p>
        <p>Computer Score: ${computerScore}</p>
    `;
}