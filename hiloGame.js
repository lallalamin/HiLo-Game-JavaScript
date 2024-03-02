/**
 * This is a HiLo Game. User have to guess what is the number generated, 
 * the number is between 1-100. If their guess is too high, they will get
 * "Too High!" message. If their guess is too low, they will get "Too Low!"
 * message.
 */


// This array is storing user guesses in the current game
let userGuess = [];
// This variable will keep track of the number of user guesses
let guessNum = 0;
// This variable will keep track of the total number of user guesses 
let totalGuessNum = 0;
// This variable will keep track of the total number of user game played
let totalGamePlayed = 0;
// This variable will track if user input is correct or not 
let correct = false;

/**
 * Main function that will run HiLo Game 
 */
function run() {
    reset();
    while (correct == false) {
        let userInput = prompt("Guess the number between 1 - 100:");
        guessNum++;
        if (userInput.toLowerCase() == "quit") {
            break;
        } else if (isNaN(userInput)) { // if user input is not a number, it will tell the user input invalid
            alert("Invalid Input!");
        } else if (userInput == randomNum) {
            totalGuessNum += guessNum; // Update variable
            userGuess.push(userInput);
            alert(info(totalGamePlayed, totalGuessNum, guessNum, userGuess)); //display information
            correct = true; // the user guesses the right number
        } else {
            userGuess.push(userInput);
            alert(userInput > randomNum ? "Too high!" : "Too low!"); //If their guess is too high, they will get "Too High!" message. If their guess is too low, they will get "Too Low!" message.
        }
    }
    
    if (correct) {
        playAgain();
    } else {
        alert("Thank you for playing!\n" + info(totalGamePlayed, guessNum, userGuess));
    }
}


/**
 * This function is generating random number from 1 - 100
 * @returns {number} - random number
 */
function getRanNum(){
    return Math.floor(Math.random()*100) + 1;
}

/**
 * This function will ask if the user what to play again
 */
function playAgain(){
    userInput = prompt("Do you want to play again?");
    if (userInput.toLowerCase() == "yes") {
        run();
    } 
    else if(userInput.toLowerCase() == "no"){ 
        alert("Thank you for playing!\n" + info(totalGamePlayed, guessNum, userGuess));
    }  
    else {
        alert("Invalid Input!");
    }
}

/**
 * This function will reset variable for new game
 */
function reset(){
    correct = false;
    randomNum = getRanNum();
    guessNum = 0;
    userGuess =[];
    totalGamePlayed++;
}

/**
 * This function is generating the information about the game
 * @param {number} totalGamePlayed - Total number of game played
 * @param {number} totalGuessNum - Total number of guesses
 * @param {number} guessNum - Number of guesses in one game
 * @param {Array} userGuess - Array containing user guesses
 * @returns {String} - Information about the game
 */
function info(totalGamePlayed,totalGuessNum, guessNum, userGuess) {
    let avgGuess = totalGuessNum / totalGamePlayed; // Calculate average guesses of all the game user played
    let information = `Average Guesses: ${avgGuess}\nTotal Guesses of last game: ${guessNum}\nYour last Game Guesses: ${userGuess}`;
    return information;
}


