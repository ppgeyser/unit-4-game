$(document).ready(function () {

    $("#content").hide();
    $('#defeat').hide();
    $('#victory').hide();

    $("#intro-button").click(function(){
        $("#intro").hide();
        $("#content").show();

        var wins = 0;
        var losses = 0;
        var userScore = 0;

        //generate random number between 19 and 120 for crystal score
        var crystalScore = Math.floor(Math.random()*(102)+19);
        console.log(crystalScore);

        //Print wins, losses, crystalscore, and userscore
        $('#crystal-score-text').text(crystalScore);
        $('#user-score-text').text(userScore);
        $('#wins-text').text(wins);
        $('#losses-text').text(losses);

        //randomize values for each of the four crystals
        function generateCrystalValues () {

            //Math.floor(Math.random()*(max-min+1)+min); min: 1, max: 12
            function randomizeValues () {
                Math.floor(Math.random()*(12)+1);
            }

            
        }
            

        //reset function
            //userscore = 0
            //randomize crystal score
            //randomize crystal values

        //crystal onclick
            //add crystal value to userscore

        //if crystal score === userscore
            //show victory screen
            //wins++
            //play again onclick
                //reset function, show content screen

        //if crystal score < userscore
            //show defeat screen
            //losses++
            //play again onclick
                //reset function, show content screen

      });
    
});