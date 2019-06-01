//declared variables, need counters for right/wrong/unanswered and one to hold timer count
var right = 0;
var wrong = 0;
var not = 0;
var counter = 150;
var timer;
//on page loadup condition for all script
$(document).ready(function () {
    //possibly music? if I have time, but must include button for disabling audio



    function startGame() {
        //startGame function will... reset stats in case coming from results page
        right = 0;
        wrong = 0;
        not = 0;
        counter = 150;
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

    //if user presses submit button run function results

    //write up function for results which will...

    //stop timeinterval

    //tally answers right wrong and untouched to corresponding variables

    //display those values into the elements in results div

    //hide questions div 

    //show results div

    //on play again button click startGame function runs

    //function to keep time
    function countDown() {
        counter--;
        var converted = timeConverter(counter);
        $("#time-display").text(converted);
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