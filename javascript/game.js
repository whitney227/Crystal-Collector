
$(document).ready(function() {
    
//Global Variables

    //crystal object
    var crystal ={
        blue:
        {
            name: "Blue",
            value: 0
        },
        orange:
        {
            name: "Orange",
            value: 0
        },
        pink:
        {
            name: "Pink",
            value: 0
        },
        yellow:
        {
            name: "Yellow",
            value: 0
        },

    }
    var target = 0;
    var score = 0;
    var wins =0;
    var losses =0;

//variable that can be used to set all the data ranges
    var getRandomNumber = function (min, max){
        return Math.floor(Math.random()*(max-min+1))+min;
    }

function startGame (){

    score = 0;
    //set the target to a random number between 19-120
    target = getRandomNumber(19, 120);
    $(".randomNumber").html(target);
    
    //set the value of each crystal between 1-12
    crystal.blue.value = getRandomNumber(1,12);
    crystal.orange.value =getRandomNumber(1,12);
    crystal.pink.value =getRandomNumber(1,12);
    crystal.yellow.value =getRandomNumber(1,12);

    //reflect values in HTML
    $(".randomNumber").html(target);
    $(".yourScore").html(score);
    }   
   

//make a function so that the crystal values add to yourScore
var crystalValues = function(crystal){
    score = score + crystal.value;
    $(".yourScore").html(score);

    //call the checkWin function
    checkWin();
    }

//new function to check for wins, losses, and reset game
var checkWin = function(){
    if (score > target){
        alert("You lost!");
        losses++;
        $(".losses").html(losses);

        //restart the game
        startGame();
    }
    else if (score ==target){
        alert ("You win!");
        wins++;
        $(".wins").html(wins);

        //restart the game
        startGame();
    }
 }
//initial start of the game
 startGame()

    //onclicks
    $(".randomNumber").click(function(){

    })

    $("#blue").click(function(){
        crystalValues(crystal.blue);
    });

    $("#orange").click(function(){
        crystalValues(crystal.orange);
    });

    $("#pink").click(function(){
        crystalValues(crystal.pink);
    });

    $("#yellow").click(function(){
        crystalValues(crystal.yellow);
    });
});
