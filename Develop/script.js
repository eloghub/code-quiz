//variables listed out, starting with the "start" button,
//including the id's for each question, score and timer
var startButton = document.getElementById("start");
var liAnswer = document.querySelectorAll("li");
var questionOne = document.getElementById("q1");
var questionTwo = document.getElementById("q2");
var questionThree = document.getElementById("q3");
var questionFour = document.getElementById("q4");
var questionFive = document.getElementById("q5");
//class="correct"
var correct = document.querySelectorAll("#correct");
//class="incorrect"
var incorrect = document.querySelectorAll("#incorrect");
//score and timer heading
var score = document.getElementById("score");
var time = document.getElementById("time");

//when the start button is clicked, the home page disappears
//and the first question is displayed
startButton.addEventListener("click", function(){
    document.getElementById("home-page").style.display = "none";
    questionOne.style.display = "block";
});

//when an answer is clicked for the first question...
liAnswer.addEventListener("click", function(){
    questionOne.style.display = "none";
    questionTwo.style.display = "block";
    console.log(liAnswer);

});

//timer
// setInterval(displayTime, 1000;)
// function startTime() {
//     time = setInterval(function(){
        
//     }1000);
}

//score
// incrementEl.addEventListener("click", function(){
//     count ++;
//     setCounterText();
// })