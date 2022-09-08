/**
* Returns a random RPS choice.
* @return {string}      computer choice of 'Rock', 'Paper', or 'Scissors'
*/
function getComputerChoice(){
    // Choose a random number between 0 and 2
    let randomNum = Math.floor(Math.random() * 3);
    //console.log(randomNum);

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
    // Make playerSelection case-insensitive by capitalizing first letter and
    // making the rest lower case
    const playerRPS = capitalizeFirstLetter(playerSelection);

    // Make a variable, result, to track if a loss/draw/win
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
 * Plays a 5 round game of RPS, keeps score, and reports a winner or loser at
 * the end of the game.
 * 
 */
function game(){
    // Score counts for player and computer
    // for loop 5 times:
        // prompt for RPS choice; ensure valid input.
        // use getComputerChoice for computerSelection
        // playRound
        // update score for player or computer
    // Report winner/loser

}

// Testing
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));