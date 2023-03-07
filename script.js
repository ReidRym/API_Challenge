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
var IntervalState;
function startgame(){
    homeScreen.setAttribute("class", "hide")
    questionsDiv.removeAttribute("class","hide")


IntervalState= setInterval(() => {
secondsLeft=secondsLeft-1
time.textContent=secondsLeft
if(secondsLeft <=0){clearInterval(IntervalState)}    
},1000);


//display question function here
showQuestions()
}

function showQuestions (){
var currentQuestion= questions [questionIndex]
questiontitle.textContent=currentQuestion.title
options.innerHTML=""
// for each choice in our current questions choices array create 
// a button set text content, give it a value attribute, and a 
// aapend to options div.
currentQuestion.choices.forEach(function(choice){
    var answerBtn= document.createElement("button")
    answerBtn.textContent=choice
    answerBtn.setAttribute("value",choice)
    //attach check answer function here
    answerBtn.onclick=checkAnswer
    options.append(answerBtn)
})
}

function checkAnswer (){
if(this.value===questions[questionIndex].answer){
    alert("correct!")

}else {
    alert("Incorrect!")
    secondsLeft=secondsLeft-10
    time.textContent=secondsLeft
}
questionIndex++
showQuestions()
}
// create quiz end function that hides the questions div 
// and unhides the end screen, clear interval on Interval state
// add click event to submit button that grabs the value that
// it tied to the name input
// attach onclick to submit button that takes initials value and
//score (time left to score) and set into local storage
// function to render name and scores from local storage
// back onto high scores screen. 
var questions = [
    {
      title: '1. An Officer can shoot an unarmed man under what certain condition?:',
      choices: ['Suspect is verbally disrespectful', 'Officer is faced with the threat of death or great bodily injury to himself or others', ' If your in the audience and cheering for the suspect', 'Police officers tell the guests at a house party to lower the volume of the music'],
      answer: 'Officer is faced with the threat of death or great bodily injury to himself or others',
    },
    {
      title: '2. Which example is not a less lethal option?',
      choices: ['taser', 'expandable baton', 'Glock 22 40 cal', 'SIM (Specialty Impact Munitions)'],
      answer: 'Glock 22 40 cal',
    },
    {
      title: '3. There are over ______ jails and prisons in the U.S.',
      choices: ['5000', '10000', '100', '20000'],
      answer: '5000',
    },
    {
      title: '1790:The First US penitentiary opens in what city?',
      choices: ['Miami', 'San Diego', 'San Francisco', ' Philadelphia'],
      answer: ' Philadelphia',
    },
  ]
startButton.onclick=startgame