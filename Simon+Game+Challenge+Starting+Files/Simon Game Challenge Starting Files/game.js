let randomNumber;
let buttonColours = ["red", "blue", "green", "yellow"];
let randomChosenColour;
let audio;
let userClickedPattern = [];
let gamePattern = [];
let level = 0;
let gameStarted = false;


$(document).keypress(function () {
    if (!gameStarted) {
        gameStarted = true;
        nextSequence();
        $("h1").text("Level " + level);
    }
});

function nextSequence() {
    userClickedPattern = []; 
    level++; 
    $("h1").text("Level " + level); 

    randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    audio = new Audio("./sounds/" + randomChosenColour + ".mp3");
    audio.play();
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000); 
        }
    } else {
        $("body").addClass("red");
        setTimeout(function () {
            $("body").removeClass("red");
        }, 200); 
        $("h1").text("Game Over, Press Any Key to Restart");
        audio = new Audio("./sounds/wrong.mp3");
        audio.play();
        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    gameStarted = false;
}

$(".btn").on("click", function () {
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    let audio = new Audio("./sounds/" + userChosenColour + ".mp3");
    audio.play();
    $("#" + userChosenColour).addClass("pressed");

    setTimeout(function () {
        $("#" + userChosenColour).removeClass("pressed");
    }, 100);

    checkAnswer(userClickedPattern.length - 1);
});
