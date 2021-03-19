//variables listed out, starting with the "start" button,
//including the id's for each question, score and timer
var startButton = document.getElementById("start");
var liAnswer = document.getElementsByTagName("li");
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
var counter = 0
// array of variables for each of the 5 questions
const questions = [
    {
        question: "Commonly used data types DO NOT include",
        answers: [
            "strings", "booleans", "alerts", "numbers"      
        ],
        correctAnswer: "alerts"
    },
    
    {
        question: "The condition in an if/else statement is enclosed within _____",
        answers: [
            "quotes", "curly brackets", "parentheses", "square brackets"      
        ],
        correctAnswer: "parentheses"
    },
    
    {
        question: "Arrays in Javascript can be used to store ______",
        answers: [
            "numbers and strings", "other arrays", "booleans", "all of the above"      
        ],
        correctAnswer: "all of the above"
    },
    
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        answers: [
            "commas", "curly brackets", "quotes", "parentheses"      
        ],
        correctAnswer: "quotes"
    },
    
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is",
        answers: [
            "JavaScript", "terminal / gitbash", "for loops", "console.log"      
        ],
        correctAnswer: "console.log"
    },
    
];

console.log(liAnswer);

function nextQuestion (){
    console.log("I have been clicked");
    counter++;
    if (counter===2){
        questionOne.style.display = "none";
        questionTwo.style.display = "block";
    }

    else if (counter === 3){
        questionTwo.style.display = "none";
        questionThree.style.display = "block";
    }

    else if (counter === 4){
        questionThree.style.display = "none";
        questionFour.style.display = "block";
    }

    else if (counter === 5){
        questionFour.style.display = "none";
        questionFive.style.display = "block";
    }

    else {
        console.log("End page");
    }


};

for (var i=0; i<liAnswer.length; i++){
    // console.log(liAnswer[i]);
    liAnswer[i].addEventListener("click", function(event){
        event.preventDefault();
        console.log(event.target);
        var choice = event.target;
        console.log(choice.parentNode.className)
        nextQuestion();
    });
    
}

//when the start button is clicked, the home page disappears
//and the first question is displayed
startButton.addEventListener("click", function(){
    document.getElementById("home-page").style.display = "none";
    questionOne.style.display = "block";
    counter++;
});

//when an answer is clicked for the first question...
liAnswer.addEventListener("click", function(){
    // questionOne.style.display = "none";
    // questionTwo.style.display = "block";
    // questionThree.style.display = "none";
    // questionFour.style.display = "none";
    // questionFive.style.display = "none";
    nextQuestion();
    // console.log(liAnswer);

});

//when an answer is clicked for the second question...
// liAnswer.addEventListener("click", function(){
//     questionTwo.style.display = "none";
//     questionThree.style.display = "block";
//     questionFour.style.display = "none";
//     questionFive.style.display = "none";
//     console.log(liAnswer);

// });

//when an answer is clicked for the third question...
// liAnswer.addEventListener("click", function(){
//     questionThree.style.display = "none";
//     questionFour.style.display = "block";
//     questionFive.style.display = "none";
//     console.log(liAnswer);

// });

//when an answer is clicked for the fourth question...
// liAnswer.addEventListener("click", function(){
//     questionFour.style.display = "none";
//     questionFive.style.display = "block";
//     console.log(liAnswer);

// });

//when an answer is clicked for the fifth question...
// liAnswer.addEventListener("click", function(){
//     questionFive.style.display = "none";
//     document.getElementById("end-page").style.display = "block";
//     console.log(liAnswer);

// });

//timer
// setInterval(displayTime, 1000;)
// function startTime() {
//     time = setInterval(function(){
        
//     }1000);
// }

//score
// incrementEl.addEventListener("click", function(){
//     count ++;
//     setCounterText();
// })