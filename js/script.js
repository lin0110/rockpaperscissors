// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */


// DOCUMENT READY FUNCTION BELOW
$(document).ready(function(){
    $("#shoot").click(function(){
        let user = $("input").val();
        let random = Math.round(Math.random() * 3);
        console.log(user);


        console.log(random);
        if(user.toLowerCase() === "rock") {
            $("#userChoice").html("Rock");

            if(random === 1){
                $("#computerChoice").html("Rock");
                $("#result").html("It's a tie!");
            }
            else if(random === 2){
                $("#computerChoice").html("Paper");
                $("#result").html("You lose!");
            }
            else if(random ===3){
                $("#computerChoice").html("Scissors");
                $("#result").html("You win!");
            }
        }

        else if(user.toLowerCase() === "paper") {
            $("#userChoice").html("Paper");

            if(random === 1){
                $("#computerChoice").html("Rock");
                $("#result").html("You win!");
            }
            else if(random === 2){
                $("#computerChoice").html("Paper");
                $("#result").html("It's a tie!");
            }
            else if(random ===3){
                $("#computerChoice").html("Scissors");
                $("#result").html("You lose!");
            }

        }

        else if(user.toLowerCase() === "scissors") {
            $("#userChoice").html("Scissors");

            if(random === 1){
                $("#computerChoice").html("Rock");
                $("#result").html("You lose!");
            }
            else if(random === 2){
                $("#computerChoice").html("Paper");
                $("#result").html("You win!");
            }
            else if(random ===3){
                $("#computerChoice").html("Scissors");
                $("#result").html("It's a tie!");
            }

        }

        else{
            $("#result").html("Please only enter rock, paper, or scissors");

        }

        console.log(user);
        console.log(random);
    });


});