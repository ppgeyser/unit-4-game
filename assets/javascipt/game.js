$(document).ready(function () {

    $("#content").hide();
    $('#defeat').hide();
    $('#victory').hide();

    $("#intro-button").click(function(){
        $("#intro").hide();
        $("#content").show();
        generateCrystals()

        var wins = 0;
        var losses = 0;
        var userScore = 0;

        var crystalPath = [
            'assets/images/crystal-blue.png',
            'assets/images/crystal-green.png',
            'assets/images/crystal-orange.png',
            'assets/images/crystal-red.png' 
        ];

        //Print wins, losses, crystalscore, and userscore
        $('#crystal-score-text').text(crystalScore);
        $('#user-score-text').text(userScore);
        $('#wins-text').text(wins);
        $('#losses-text').text(losses);

        //generate random number between 19 and 120 for crystal score
        var crystalScore = Math.floor(Math.random()*(102)+19);
        console.log(crystalScore);

        //randomize values for each of the four crystals
        function generateCrystals () {

            for (var i = 0; i < crystalPath.length; i++) {

                //create img tag for crystal
                var Crystal = $("<img>");

                //add class for crystal image to use for onclick function later
                Crystal.addClass("crystal-image");

                //add path stored in array
                Crystal.attr("src", crystalPath[i]);
                console.log(crystalPath[i]);

                //add random crystal value between 1 and 12
                //Math.floor(Math.random()*(max-min+1)+min); min: 1, max: 12
                    //Math.floor(Math.random()*(12)+1);
                Crystal.attr("crystalValue", (Math.floor(Math.random()*(12)+1)));

                //add crystal <img> tag to crystals div
                $("#crystals").append(Crystal);
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