var right = 0;
var wrong = 0;
var not = 0;
var counter = 90;
var timer;
var answerKey = ["2", "4", "1", "3", "2", "3", "4", "4", "2"]

$(document).ready(function () {
    function startGame() {
        right = 0;
        wrong = 0;
        not = 0;
        counter = 90;
        $("#welcome-page").toggle();
        $("#questions-page").toggle();
        timer = setInterval(countDown, 1000)
    }
    $("#starter").on("click", startGame);
    $("#submit-answers").on("click", gameResults)
    
    function gameResults() {
        clearInterval(timer);
        for (var i = 0; i < answerKey.length; i++) {
            var answer = $("input:radio[name=" + i + "]:checked").val();
            if (answer === answerKey[i]) {
                right++;
            } else if (answer === undefined) {
                not++;
            } else {
                wrong++;
            }
        }
        if (right === 0) {
            $("#correct").text("none");
        } else {
            $("#correct").text(right);
        }
        if (wrong === 0) {
            $("#incorrect").text("none");
        } else {
            $("#incorrect").text(wrong);
        }
        if (not === 0) {
            $("#not-put").text("You were able to answer all of the questions!");
        } else if (not === 1) {
            $("#not-put").text("You did not give an answer for one question.");
        } else {
            $("#not-put").text("You didn't give an answer for " + not + " questions.");
        }
        if (not === 0 && wrong === 0){
            $("#results-page").append("<h2 class=text-center> Amazing job! You're a real fan. :) </h2><br><br>")
        }
        $("#results-page").append("<h2 class=text-center> Thanks for playing, come back soon! </h2><br><br>")
        $("#questions-page").toggle();
        $("#results-page").toggle();

    }
    function countDown() {
        counter--;
        var converted = timeConverter(counter);
        $("#time-display").text(converted);
        if (counter === 0) {
            $("#time-display").text("Time's Up!!");
            setTimeout(gameResults(), 1500)
        }
    }

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