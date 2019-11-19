// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */


// DOCUMENT READY FUNCTION BELOW
$(document).ready(function(){
    $("#shoot").click(function(){
        let user = $("input").val();
        let random = Math.random();
        console.log(user);


        console.log(random);
        if(user.toLowerCase() === "rock") {
            $("#userChoice").html("Rock");

            if(random <= .99){
                $("#computerChoice").html("Rock");
                $("#result").html("It's a tie!");
            }
            else if(random <= .66){
                $("#computerChoice").html("Paper");
                $("#result").html("You lose! But, let's try again!");
            }
            else if(random <= .33){
                $("#computerChoice").html("Scissors");
                $("#result").html("You win!");
            }
        }

        else if(user.toLowerCase() === "paper") {
            $("#userChoice").html("Paper");

            if(random <= .99){
                $("#computerChoice").html("Rock");
                $("#result").html("You win!");
            }
            else if(random <= .66){
                $("#computerChoice").html("Paper");
                $("#result").html("It's a tie!");
            }
            else if(random <= .33){
                $("#computerChoice").html("Scissors");
                $("#result").html("You lose! But, let's try again!");
            }

        }

        else if(user.toLowerCase() === "scissors") {
            $("#userChoice").html("Scissors");

            if(random <= .99){
                $("#computerChoice").html("Rock");
                $("#result").html("You lose! But, let's try again!");
            }
            else if(random <= .66){
                $("#computerChoice").html("Paper");
                $("#result").html("You win!");
            }
            else if(random <= .33){
                $("#computerChoice").html("Scissors");
                $("#result").html("It's a tie!");
            }

        }

        else{
            $("#result").html("Please do not enter other than rock, paper, or scissors.");

        }

        console.log(user);
        console.log(random);
    });


});