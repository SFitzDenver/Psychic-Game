// <!-- pseudo code

// computer has to randomly select a letter
// user has to enter a guess
// keep track of tries (up to 9)
// compare computer letter and user letter
// if match, user wins
// if no match, next guess
// if none match, computer wins
// display new count of wins and losses
// restart game --!>

// Variables

    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var computerLetter;
    var round = 0;
    var wins = 0;
    var losses = 0;
    var guessLowerCase;
    var lettersGuessedAlready = [];


// Functions

    function newComputerLetter() {
        computerLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    
    function updateWins() {
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
    }

    function updateLosses() {
        document.querySelector("#losses").innerHTML = "Losses: " + losses;
    }

    function updateLeft() {
        document.querySelector("#guesses-left").innerHTML = "Guesses remaining: " + ("9" - round);
    }

    function updateGuesses() {
        document.querySelector("#guesses").innerHTML = "Number of guesses: " + round + " ";
    }

    function updateLetters() {
        console.log("letters guessed: " + lettersGuessedAlready);
        lettersGuessedAlready.toString();
        document.querySelector("#lettersGuessedAlready").innerHTML = "Letters you have already guessed: " + lettersGuessedAlready.join(", ");
    }

    function restartGame() {
        round = 0;
        lettersGuessedAlready = [];
        updateLeft();
        updateGuesses();
        updateLetters();
        newComputerLetter();
        console.log("new computer letter: " + computerLetter);
    }


// Main Process

    newComputerLetter();
    console.log("computer letter: " + computerLetter);
    
    document.onkeyup = function(event) {
        var uGuess = event.key;
        var guessLowerCase = uGuess.toLowerCase();
        console.log("user guess: " + guessLowerCase);
        console.log("round: " + round);
        round++;

        if (round < 10) {

            if(guessLowerCase == computerLetter) {
                wins++;
                alert("You win! I was thinking of the letter: " + computerLetter);
                updateWins();
                restartGame();
            } else {
                lettersGuessedAlready.push(guessLowerCase)
                updateLeft();
                updateGuesses();
                updateLetters();
            }
        } else if (round > 9) {
            alert("Sorry, you ran out of guesses. I was thinking of the letter: " + computerLetter);
            losses++;
            updateLosses();
            restartGame();
        }
    };
