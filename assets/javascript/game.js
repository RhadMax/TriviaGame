//declared variables, need counters for right/wrong/unanswered and one to hold timer count
var right = 0;
var wrong = 0;
var not = 0;
var counter = 90;
var timer;
var answerKey = [2, 4, 1]
//on page loadup condition for all script to start running
$(document).ready(function () {

    //possibly music? if I have time, but must include button for disabling audio



    function startGame() {
        //startGame function will... reset stats in case coming from results page
        right = 0;
        wrong = 0;
        not = 0;
        counter = 90;
        //hide welcome div
        $("#welcome-page").toggle();
        //show questions div
        $("#questions-page").toggle();
        //start setTimeInterval
        timer = setInterval(countDown, 1000)
    }
    //on click event for button on screen to run startGame function
    $("#starter").on("click", startGame);

    //(user then inputs answers, no script active till->) if time runs out run function results
    //--Time runout went into the countdown function, since it wasn't scoping the counter variable here

    //if user presses submit button run function gameResults
    $("#submit-answers").on("click", gameResults)

    //write up function for gameResults which will...

    function gameResults() {
        //stop timeinterval
        clearInterval(timer);

        //tally answers right wrong and untouched to corresponding variables
        // console.log($("input:radio[name=0]:checked").val());
        for (var i = 0; i < answerKey.length; i++) {
            var answer = $("input:radio[name=" + i + "]:checked").val();
            console.log(answer);
            console.log(answerKey[i]);
            if (answer == answerKey[i]) {
                console.log("correct")
            }
        }
        //display those values into the elements in results div

        //hide questions div 
        $("#questions-page").toggle();
        //show results div
        $("#results-page").toggle();

    }

    //on play again button click startGame function runs

    //function to keep time
    function countDown() {
        counter--;
        var converted = timeConverter(counter);
        $("#time-display").text(converted);

        //tell player time is up and delay long enough for them to see it
        if (counter === 0) {
            $("#time-display").text("Time's Up!!");
            setTimeout(gameResults(), 1500)
        }
    }

    //time converter to show it as a clock formatted time
    function timeConverter(t) {
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes === 0) {
            minutes = "00";
        }
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }
        return minutes + ":" + seconds;
    }

});