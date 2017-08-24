
var compChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
                    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];

//Computer makes a guess
var guess = compChoice[Math.floor(Math.random() * compChoice.length)];


document.onkeyup = function(event) {

    var user = event.key;

    var lettersGuessedSpan = document.getElementById('lettersGuessed');
    lettersGuessedSpan.textContent = lettersGuessedSpan.textContent + user + ", ";

    if (user === guess) {
        wins++;
        alert("Wow Your Phychic!");
        guessesLeft = 10;
        lettersGuessed = [];
        var newguess = compChoice[Math.floor(Math.random() * compChoice.length)];
        guess = newguess;

    } else if (guessesLeft === 0) {
        losses++;
        alert("Looks like your not Psychic!");
        guessesLeft = 10;
        var newguess = compChoice[Math.floor(Math.random() * compChoice.length)];
        guess = newguess;

    } else if (user !== guess) {
        guessesLeft--;
    }

    // if (guessesLeft > 0) {
    //     var lettersGuessedSpan = document.getElementById('lettersGuessed');
    //     lettersGuessedSpan.textContent = lettersGuessedSpan.textContent + user + ", ";
    // } else if (guessesLeft === 0) {
    //     lettersGuessed = [];
    // }

    var winsSpan = document.getElementById('wins');
    winsSpan.textContent = wins;

    var lossesSpan = document.getElementById('losses');
    lossesSpan.textContent = losses;

    var guessesLeftSpan = document.getElementById('guessesLeft');
    guessesLeftSpan.textContent = guessesLeft;

    // var lettersGuessedSpan = document.getElementById('lettersGuessed');
    // lettersGuessedSpan.textContent = lettersGuessedSpan.textContent + user + ", ";

    console.log(user);
    console.log(guess);
    };

    // var updateLettersGuessedSpan = document.getElementById('lettersGuessed');
    // updateLettersGuessedSpan.textContent = user;



