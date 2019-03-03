// Hover effect
$(document).ready(function(){
    $("li").hover(function(){
      $(this).css("background-color", "white");
      }, function(){
      $(this).css("background-color", "yellow");
    });
});


var counter = 0;
var timeRemaining = 120;

// Countdown timer for questions
    function setup() {
        var timer = document.getElementById("seconds");
        timer.innerHTML = timeRemaining - counter;

        var interval = setInterval(timeIt, 1000)
        
        function timeIt() {
            counter++;
            timer.innerHTML = timeRemaining - counter;
            if (counter == timeRemaining){
                clearInterval(interval);
                answer.innerHTML = "Wrong !";
                correctAnswer.innerHTML = "The answer was " + document.getElementById("correct").innerText;
            };
        };   

// Selecting an answer
    
        var answer = document.getElementById("questions");
        var correctAnswer = document.getElementById("choices")
        $("#correct").click(function(){
            answer.innerHTML = "Correct !";
            clearInterval(interval); 
            correctAnswer.innerHTML = "You got it! Peach is not an Original 8";
        });
        $(".wrong").click(function(){
            answer.innerHTML = "Wrong !";
            clearInterval(interval);
            correctAnswer.innerHTML = "This character is an Original 8, but Peach is not."
        });
         
}

/*var questions = [
    "Who is not part of the Original 8 ?",
    "Which Pokemon is not summond by the Pokemon Trainer ?",
    "Which of these characters does not use ice as an attack ?",
    "Which of these characters does not belong ?",
    "Who was the only character to not have their spirit taken in the games' trailer ?",
    "Which Series provides the most characters ?",
    "Who is the oldest character in the game ?",
    "Which of these characters in not a villain ?",
    "Which character does not apper in the Fire Emblem Series ?",
    "Who is the best character to play with ?"
]
for (i = 0; i < questions.length; i++) {
    console.log(questions[i]);
  } */