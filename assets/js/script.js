let player1Score = 0;
let player2Score = 0;
let computerScore = 0;

/*Function to play as single player
Player1 will choose their option by using the onClick event*/
function play(playerChoice, Multiplayer = false) {
    const choices = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)]; // Pick a random choice for the computer in the array of choices
    let player2Choice = null; //variable has been declared but hasn’t been assigned a value

    if (Multiplayer) {
        player2Choice = prompt("Player 2, enter your choice (rock, paper, scissors, spock, lizard):").toLowerCase(); //Player2 will play with keyboard thus prompt input
        while (!choices.includes(player2Choice)) {   //While loop continue until player2 have a valid choice
            alert("Your choice is NOT valid. Please try again.");
            player2Choice = prompt("Player 2, enter your choice (rock, paper, scissors, spock, lizard):").toLowerCase();
        }
    }