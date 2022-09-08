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
    // Check playerSelection and accept case-insensitive
    // Make a variable, result, to track if a loss/draw/win
    // For player R, check CPU RPS, update result
    // For player P, check CPU RPS, update result
    // For player S, check CPU RPS, update result
    // Write message based on result, with player and cpu choices
}