//variables listed out, starting with the "start" button,
//including the id's for each question
var startButton = document.getElementById("start");
var liAnswer = document.querySelectorAll("li");
var questionOne = document.getElementById("q1");
var questionTwo = document.getElementById("q2");
var questionThree = document.getElementById("q3");
var questionFour = document.getElementById("q4");
var questionFive = document.getElementById("q5");

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

//score
// incrementEl.addEventListener("click", function(){
//     count ++;
//     setCounterText();
// })