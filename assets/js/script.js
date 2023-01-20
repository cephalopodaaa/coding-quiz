quiz = [
    {
        question: "This is question 1",
        option1: "possible answer 1",
        option2: "possible answer 2",
        option3: "possible answer 3",
        option4: "possible answer 4",
        answer: 3,        
    },
    {
        question: "where was tattoi filmed in starwars",
        option1: "possible answer 1",
        option2: "tunisia",
        option3: "possible answer 3",
        option4: "possible answer 4",
        answer: 2,        
    },
    {
        question: "what vegetable lasted longer than liz truss",
        option1: "possible answer 1",
        option2: "possible answer 2",
        option3: "lettuce",
        option4: "possible answer 4",
        answer: 3,        
    },
    {
        question: "This is question 1",
        option1: "possible answer 1",
        option2: "possible answer 2",
        option3: "possible answer 3",
        option4: "possible answer 4",
        answer: 3,        
    },
    {
        question: "This is question 1",
        option1: "possible answer 1",
        option2: "possible answer 2",
        option3: "possible answer 3",
        option4: "possible answer 4",
        answer: 3,
    }
]

// F U N C T I O N S

//timer
var timerEl = document.querySelector('#time');
var mainEl = document.getElementById("main");

function timer() {
    var timeLeft = 100;

    var timeInterval = setInterval(function () {
        timeLeft --;
        timerEl.textContent = timeLeft + "seconds";

        if (timeLeft === 0) {
            clearInterval(timeInterval);
            //call function to end game here
        }
    }, 1000);
}




//hide start menu
var startScreen = document.querySelector('#start-screen');

function hideMenu() {
    startScreen.style.display = 'none';
}



//ask questions






//start button press
var startButton = document.querySelector('#start');

startButton.addEventListener("click", function() {
    alert("quiz started");
    timer();
    hideMenu();


})



    //timer
        //timer function
        //countdown
        //diplay
        //get game stop
        //stop at zero



// Load high-scores from browser storage



// when start button pressed:
    // start timer countdown
    // load random question from questions array
    //

// function to load questions



