var wins = 0;
var losses = 0;
var guessesleft = 10;
var wrongGuesses = [];

var wordBank = ["reindeer", "hamster", "chinchilla", "elephant", "stingray", "squirrel", "giraffe", "turtle", "rabbit", "panda"];
var randNum = "";
var blankArray = [];
var correctlyGuessedWord = [];

alert("Welcome. You shall not leave. Click okay to Start");

init();

var answer = document.getElementById("rightGuess");
answer.innerHTML = blankArray;

var life = document.getElementById("remainingGuess");
life.innerHTML = guessesleft;

function init() {
    blankArray = [];
    wrongGuesses = [];
    guessesleft = 10;
    randNum = wordBank[Math.floor(Math.random()*wordBank.length)];
    
    var life = document.getElementById("remainingGuess");
    life.innerHTML = guessesleft;

    var wrongletter = document.getElementById("wrongGuess");
    wrongletter.innerHTML = wrongGuesses;

    var display = document.getElementById("wordDisplayed");
    display.innerHTML = randNum;

    for (i = 0; i < randNum.length; i++){
        blankArray.push("_")
        var answer = document.getElementById("rightGuess");
        answer.innerHTML = blankArray;          
    }
}

document.onkeyup = function(event){
    var userGuess = event.key;
    var isMatched = false;
    // console.log(randNum);
    for (var i = 0; i<randNum.length; i++){
        var char = randNum[i];
        if (char == userGuess) {
            isMatched = true;
            blankArray[i] = userGuess;
        }
    }

    if (isMatched == true) {
        var answer = document.getElementById("rightGuess");
        answer.innerHTML = blankArray;

        var answerArray = [];
        
        for (var i = 0; i<blankArray.length; i++) {
            answerArray.push(userGuess)
        }

      



    
    if (blankArray.join('') === randNum){
        wins++
        var howmanywins = document.getElementById("wins");
        howmanywins.innerHTML = wins; 
         alert("You Win");

        init();
        }



    } else { //isMatched == false

        if (wrongGuesses.includes(userGuess) == false ){
            guessesleft--;
            life.innerHTML = guessesleft; 
            wrongGuesses.push(userGuess);
            var wrongletter = document.getElementById("wrongGuess");
            wrongletter.innerHTML = wrongGuesses;
            if(guessesleft == 0){
                losses++;
                console.log(losses);
                var howmanyloss = document.getElementById("losses");
                howmanyloss.innerHTML = losses; 
                alert("You Lose");
            
                init();
            }
        }
    }   
}//document.onkeyup

//use guess.index("_")
//guess.join('"")
input.match(/A-Z/gi)