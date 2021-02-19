var startButton = document.getElementById("start")

startButton.addEventListener("click", function(){
    document.getElementById("home-page").style.display = "none";
    document.getElementById("q1").style.display = "block";
    var liQuestion = document.querySelector("li");
    console.log(liQuestion);
})