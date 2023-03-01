var time= document.getElementById("time");
var homeScreen=document.getElementById("homescreen");
var startButton=document.getElementById("start");
var questionsDiv=document.getElementById("questions");
var questiontitle=document.getElementById("questiontitle");
var options=document.getElementById("options");
var endscreen=document.getElementById("endscreen");
var yourscore=document.getElementById("yourscore");
var submit=document.getElementById("submit");
var secondsLeft=50;
var questionIndex=0;

function startgame(){
    homeScreen.setAttribute("class", "hide")
    questionsDiv.removeAttribute("class","hide")

setInterval(() => {
secondsLeft=secondsLeft-1
time.textContent=secondsLeft
if(secondsLeft <=0){clearInterval()}    
},1000);


//display question function here
showQuestions()
}

function showQuestions (){
var currentQuestion= questions [questionIndex]
questiontitle.textContent=currentQuestion.title

}




var questions = [
    {
      title: 'Commonly used data types DO NOT include:',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      answer: 'alerts',
    },
    {
      title: 'The condition in an if / else statement is enclosed within ____.',
      choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
      answer: 'parentheses',
    },
  ]
startButton.onclick=startgame