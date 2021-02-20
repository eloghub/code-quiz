var startButton = document.getElementById("start")
var liAnswer = document.querySelectorAll("li");

startButton.addEventListener("click", function(){
    document.getElementById("home-page").style.display = "none";
    document.getElementById("q1").style.display = "block";
});

liAnswer.addEventListener("click", function(){
    document.getElementById("q1").style.display = "none";
    document.getElementById("q2").style.display = "block";
    console.log(liAnswer);

});

//timer

//score