quiz = [
    {
        question: "which language is primarily used to style web-pages",
        options: ["HTML","CSS","Javascript", "Markdown"],
        answer: "CSS"
    },
    {
        question: "how many people wrote the Javascript language",
        options: ["1","3","7", "42"],
        answer: "1"
    }

]


// HTML E L E M E N T S
var timerEl = document.querySelector('#time');

var questions = document.querySelector("#questions");
var questionTitle = document.querySelector("#title");
var choicesList = document.querySelector("#choices");

var startScreen = document.querySelector('#start-screen');
var startButton = document.querySelector('#start');





// F U N C T I O N S
//timer
function timer() {
    var timeLeft = 100;
    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft + "seconds";

        if (timeLeft === 0) {
            clearInterval(timeInterval);
            //call function to end game here
        }
    }, 1000);
}


//hide start menu
function hideMenu() {
    startScreen.style.display = 'none';
}


//ask questions
choicesList.textContent = '';


function createList(array, i) {
    var list = document.createElement("ul");
    for (var j = 0; j < array[i].options.length; j++) {
        var item = document.createElement("button");
        item.innerHTML = array[i].options[j];
        // item.addEventListener("click", checkIfCorrect)
        list.appendChild(item);
    }
    return list;
}

// //check if user's choice is correct
// checkIfCorrect(choice) {
//     var userChoice = choice.target;

// }




// S T A R T I N G    T H E    Q U I Z
startButton.addEventListener("click", function () {
    // alert("quiz started");
    timer(); // starts timer
    hideMenu(); //hides first menu screen

    //now ask all questions in quiz array (i is question number)
    for (var i = 0; i < quiz.length; i++) {
        // var currentQuestion = quiz[i].question;
        // questionTitle.appendChild(currentQuestion);
        var list = createList(quiz, i);
        document.body.appendChild(list);
    }

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



