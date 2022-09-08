/**
* Returns a random RPS choice.
* @return {String}      computer choice of 'Rock', 'Paper', or 'Scissors'
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