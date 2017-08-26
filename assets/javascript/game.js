
var compChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
                    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];

//Computer makes a guess
var guess = compChoice[Math.floor(Math.random() * compChoice.length)];

//function starts when an a key is pressed. (event)
document.onkeyup = function(event) {
//whatever key is pressed will be registered as user key
    var user = event.key;
//This adds to the letters guessed section on the html. Each guess is stacked next to the previous.
    var lettersGuessedSpan = document.getElementById('lettersGuessed');
    lettersGuessedSpan.textContent = lettersGuessedSpan.textContent + user + ", ";

//How the game will be scored and reset after a win and loss
    if (user === guess) {
        wins++;
        alert("Wow Your Phychic!");
        guessesLeft = 10;
        lettersGuessedSpan.textContent = [];
        var newguess = compChoice[Math.floor(Math.random() * compChoice.length)];
        guess = newguess;

    } else if (guessesLeft === 0) {
        losses++;
        alert("Looks like your not Psychic!");
        guessesLeft = 10;
        lettersGuessedSpan.textContent = [];
        var newguess = compChoice[Math.floor(Math.random() * compChoice.length)];
        guess = newguess;
//this is to make sure the user doesnt get infinity guesses. It will take away from our variable for every attempt
//until game is either won or lost.
    } else if (user !== guess) {
        guessesLeft--;
    }

    var winsSpan = document.getElementById('wins');
    winsSpan.textContent = wins;

    var lossesSpan = document.getElementById('losses');
    lossesSpan.textContent = losses;

    var guessesLeftSpan = document.getElementById('guessesLeft');
    guessesLeftSpan.textContent = guessesLeft;

    };



