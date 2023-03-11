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

// F U N C T I O N S

//timer
var timerEl = document.querySelector('#time');
var mainEl = document.getElementById("main");

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
var startScreen = document.querySelector('#start-screen');

function hideMenu() {
    startScreen.style.display = 'none';
}



//ask questions
var questions = document.querySelector("#questions");
var questionTitle = document.querySelector("#title");
var choicesList = document.querySelector("#choices");

choicesList.textContent = '';




// quiz.question.forEach(askQuestion)

// function askQuestion(i) {
//     alert(quiz.children[i].question);
// }


// let options = function () {
//     for (var i = 0; i < quiz.children[1].length; i++) {
//         let element = document.createElement("li");
//         element.innerHTML = quiz.children[1].children[i];
//         alert(element);
//         choicesList.appendChild(element);


//     }
// }


function createList(array) {
    var list = document.createElement("ul");
    for (var i = 0; i < array.length; i++) {
        var item = document.createElement("li");
        item.innerHTML = array[i].option + [i];
        list.appendChild(item);
    }
    return list;
}













//start button press
var startButton = document.querySelector('#start');

startButton.addEventListener("click", function () {
    alert("quiz started");
    timer();
    hideMenu();
    // options();
    var list = createList(quiz);
    document.body.appendChild(list);
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



