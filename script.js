// Global Variables
let playerScore = 0, computerScore = 0, roundNumber = 1;
let playerSelection = '', computerSelection = ''; 

/**
* Returns a random RPS choice.
* @return {string}      computer choice of 'Rock', 'Paper', or 'Scissors'
*/
function getComputerChoice(){
    // Choose a random number between 0 and 2
    let randomNum = Math.floor(Math.random() * 3);

    // return R, P, or S based on randomNum being 0, 1, or 2 respectively
    if (randomNum === 0){
        return 'Rock';
    }
    else if (randomNum === 1){
        return 'Paper';
    }
    return 'Scissors';
}

/**
 * Plays a single round of RPS.
 * @param {string} playerSelection      Player's RPS choice
 * @param {string} computerSelection    Computer's RPS choice
 * @return {string} RPS round result statement
 */
function playRound(playerSelection, computerSelection){
    // Make playerSelection case-insensitive
    const playerRPS = capitalizeFirstLetter(playerSelection);

    // Make a variable to track if a loss/draw/win
    let result = 0;

    // Determine winner and update result
    result = getRoundResult(playerRPS, computerSelection);

    // Write message based on result, with player and cpu choices
    if (result === 0){
        return `Draw! ${playerRPS} ties with ${computerSelection}`;
    }
    else if (result === 1){
        return `You Win! ${playerRPS} beats ${computerSelection}`;
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerRPS}`;
    }
}

/**
 * Converts a string to capital first letter and lower case remaining
 * @param {string} string       string to capitalize first letter
 * @return {string} Capitalized first letter string with lower case remaining
 */
function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

/**
 * Given properly formatted RPS choice strings, Determines the result of an RPS
 * game and returns 0 if a draw, 1 if the player wins, and 2 if player loses.
 * @param {string} playerSelection      Player's RPS choice
 * @param {string} computerSelection    Computer's RPS choice
 * @return {Number} game result
 */
function getRoundResult(playerSelection, computerSelection){
    // Case 1: Player wins, return 1
    if (playerSelection === 'Rock' && computerSelection === 'Scissors' || 
        playerSelection === 'Paper' && computerSelection === 'Rock' ||
        playerSelection === 'Scissors' && computerSelection === 'Paper')
    {
        return 1;
    }
    // Case 2: Player loses, return 2
    else if (playerSelection === 'Rock' && computerSelection === 'Paper' ||
             playerSelection === 'Paper' && computerSelection === 'Scissors' ||
             playerSelection === 'Scissors' && computerSelection === 'Rock')
    {
        return 2;
    }
    // Case 3: Draw, return 0
    return 0;
}

/**
 * Updates the score of the game, given the result of a round. If a draw, then
 * no changes to the scores are made. Calls updateScoreDOM to update the DOM.
 * 
 * @param {Number} result   The result of the round played.
 */
function updateScore(result){
    if(result === 1){
        playerScore += 1;
    }
    else if (result === 2){
        computerScore += 1;
    }
    updateScoreDOM();
}

/**
 * Updates the score displayed on the DOM.
 */
function updateScoreDOM(){
    scoreHuman.textContent = "You: " + playerScore;
    scoreComputer.textContent = "Computer: " + computerScore;
}

/**
 * Checks if there is a winner based on the game score, and displays the winner
 * if there is one. Calls newGame() if there is a winner.
 */
function checkWinner(){
    if (playerScore === 5){
        resultText.textContent = `You Win!`;
        newGame();
    }
    else if (computerScore === 5){
        resultText.textContent = `You Lose.`;
        newGame();
    }
}

/**
 * Resets the scores and roundNumber to start a new game after a winner is
 * decided.
 */
function newGame(){
    playerScore = 0;
    computerScore = 0;
    roundNumber = 1;
    playerSelection = '', computerSelection = ''; 
}

// get buttons nodelist
const buttons = document.querySelectorAll(".rps-btn");
// get results DOM elements
const resultText = document.querySelector(".result-text");
const scoreHuman = document.querySelector("#score-human");
const scoreComputer = document.querySelector("#score-computer");

// for each, set up a listener which calls playRound
buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
        playerSelection = capitalizeFirstLetter(e.target.id);
        computerSelection = getComputerChoice();
        let result = getRoundResult(playerSelection, computerSelection);

        // call playRound and log round winner
        resultText.textContent = "Round " + roundNumber + ": " + playRound(playerSelection, computerSelection);

        // update scores based on result
        updateScore(result);
        roundNumber++;

        // check if there is a winner
        checkWinner();
    });
});