var body = document.body;
var highscoreslist = document.querySelector("#highscores");
// var hs1 = document.createElement("li");
// var hs2 = document.createElement("li");
// var hs3 = document.createElement("li");

// hs1.textContent = "some of the top high scores";
// hs2.textContent = "some of the top high scores";
// hs3.textContent = "some of the top high scores";

// highscoreslist.appendChild(hs1);
// highscoreslist.appendChild(hs2);
// highscoreslist.appendChild(hs3);


//now applying styles
highscoreslist.setAttribute("style", "background-color: #333333; padding: 20px;");


// can do it one at a time but this is slow:
// li1.setAttribute("style", "color:white; padding: 5px; margin-left: 35px; background-color: red");

//better to do a loop like this:
var bgColors = ["orange", "purple","chartreuse","red"];
for (var i = 0; i < highscoreslist.children.length; i++) {
    highscoreslist.children[i].setAttribute("style", "color:white; padding: 5px; margin-left: 35px; background-color: " + bgColors[i]);
}




//new solution
var highscoresarr = [6,4,1]

for (var i = 0; i < highscoresarr.children.highscoresarr; i++) {
    
}