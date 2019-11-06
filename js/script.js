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



            if(random === 1){
                $("#result").html("It's a tie");
            }
            else if(random === 2){
                $("#result").html("You lose!")
            }
            else if(random ===3){
                $("#result").html("You win!")
            }
        }



    });


});