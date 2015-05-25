 // U3.W7: Design Basic Game Solo Challenge

// This is a solo challenge

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OVERVIEW
//
// Your mission description: JavaScript Quiz with an Indiana Jones theme
// Overall mission: solve all the flascards!
// Goals: learn all the flash cards. Collect all 11 idols by doing so.
// Characters: Indiana and the cave (the keeper of the questions,answers and idols, of course)
// Objects: questions object, answers objet, user answers object, user scores object, idols object
// Functions: getCurrentQuestion, getCurrentAnswer, getUserAnswer, checkUserAnswer, storeUserAnswer, storeUserScore
// MVP: a quiz. Asks a question, stores the answer, cycles through each question. Stores correct/incorrect.
// Possible expansions: randomize the order, reverse so they can see answers first. Event functionality (hint, buy time, etc). All the wrong answers come back and attack the user, 
//		they have one last try to save themseves! Let the user choose the topic (Ruby/JS/HTML). Change the overall theme, 
//		eg (Indiana Jones, Pirates of the Caribbean), add HTML/CSS/JS DOM manipulation. Color or text-changing elements to signify time running out.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PSUEDOCODE STEPS
// 
// Create an object to store questions
// Create an object to store answers
// Create an object to store user answers
// Create an object to store the user's score
// Create an object to store trophies

// Create a function to get the current quetion
// Create a function to get the current answer
// Create a function to check the user's answer against the current answer
// Create a function to store the users answer 
// Create a function to store the user's score

// Create a function to ask the user the current question. 
// Create a function to submit the user's answer, triggering things like check score, store answer, etc
// Create a function to iterate over each question/answer/trophy

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// INITIAL CODE


/////////////// Begin example that will be mentioned in my reflection. The code between line 45-73 is an example of using strings as property names instead of numbers as property names, which I used in my final solution.
// var answersQuestions = { //object with question numbers as properties and quiz questions as values
// 	yes : "Indiana explores the Cave of Code. Does he have what it takes to retrieve the lost object?",
// 	pop : "This method removes the last element from an array...",
// 	push : "This method adds an element to the end of an array...",
// 	length : "This method shows how many elements are in an array...",
// 	reverse : "This method reverses the order of an array's elements",
// 	shift : "This method removes and returns the first element of an array",
// 	includes : "This method checks an array for a certain element and returns true/false",
// 	indexOf : "This method returns the first index of an element within the array",
// 	forEach : "This method calls a function for each element of the array",
// 	map : "This method creates a new array with the results of calling a provided function on every element in this array",
// 	splice : "This method adds/removes elements from an array"
// }

// var answers = ["yes","pop","push","length","reverse","shift","includes","indexOf","forEach","map","splice"]

// currentQuestion = ""
// currentNumber = 0

// function getCurrentQuestion(input,number){ //selects any question from a group of questions, assigns the result to a variable
// 	currentQuestion = input[answers[number]]
// }

// getCurrentQuestion(answersQuestions,currentNumber);

// console.log(currentQuestion)
/////////////// End example that will be mentioned in my reflection


// var questions = {
// 	1 : "Indiana explores the Cave of Code. Does he have what it takes to recover the lost object?",
// 	2 : "This method removes the last element from an array...",
// 	3 : "This method adds an element to the end of an array...",
// 	4 : "This method shows how many elements are in an array...",
// 	5 : "This method reverses the order of an array's elements",
// 	6 : "This method removes and returns the first element of an array",
// 	7 : "This method checks an array for a certain element and returns true/false",
// 	8 : "This method returns the first index of an element within the array",
// 	9 : "This method calls a function for each element of the array",
// 	10 : "This method creates a new array with the results of calling a provided function on every element in this array",
// 	11 : "This method adds/removes elements from an array"
// }

// var answers = {
// 	1 : "yes",
// 	2 : "pop",
// 	3 : "push",
// 	4 :  "length",
// 	5 : "reverse",
// 	6 : "shift",
// 	7 : "includes",
// 	8 : "indexOf",
// 	9 : "forEach",
// 	10 : "map",
// 	11 : "splice"
// }

// var userAnswers = {
// }

// var userScore = {

// }

// function getCurrentQuestion(input,number){ //get the question for the current question
// 	return input[number]
// }

// function getCurrentAnswer(input,number){ //get the answer for the question
// 	return input[number]
// }

// function addAnswer(output,number,answer){ //add a user's answer to the user's answers object
// 	output[number] = answer
// }

// function addScore(output,number){ //add a user's score to the user's score object
// 	if (userAnswers[number] == answers[number])
// 		output[number] = true
// 	else
// 		output[number] = false
// }

// currentNumber = 0 //set a counter to increment the current question & answer
// currentQuestion = getCurrentQuestion(questions,currentNumber)
// currentAnswer = getCurrentAnswer(questions,currentNumber)

// ///BEGIN WEB CODE
// var currentTrophy = 0
// var trophies = ["t1","t2","t3","t4","t5","t6","t7","t8","t9","t10","t11"]
// var instructionCopy = "Type your answer then click submit to pass each challenge. Click SCORE to reveal two secret objects: one with your answers, one with your score. Watch for grammatical pit-falls! Only submit the method name, for example: join"

// function setFocusToAnswerForm(){
//     document.getElementById("answerForm").focus();
// }

// window.onload = setFocusToAnswerForm
// window.onload = nextQuestion

// function submitAnswer(){
// 	var answer = document.getElementById("answerForm").value;
// 	alert("Added answer!  " + "'" + answer + "'" + " for question number " + currentNumber);
// 	addAnswer(userAnswers,currentNumber,answer);
// 	addScore(userScore,currentNumber);
// 	if(userScore[currentNumber] == true){
// 		document.getElementById(trophies[currentTrophy]).src = "idol.png";
// 		document.getElementById(trophies[currentTrophy]).style.opacity = "1";
// 	}
// 		currentTrophy ++
// }

// function nextQuestion() {
// 	currentNumber ++
// 	currentQuestion = getCurrentQuestion(questions,currentNumber)
// 	if (currentQuestion !== undefined ){
// 		document.getElementById("questions").textContent = currentQuestion;
// 	} else{
// 		document.getElementById("questions").textContent = "Looks like we're out of questions. Click 'score' to see if you recovered the object!";
// 	}
// 	setFocusToAnswerForm();
// 	document.getElementById("answerForm").value = ""
// }

// function displayScore(){
// 	alert("Your questions and respective answers:" + JSON.stringify(userAnswers,null,1))
// 	alert("The following displays the number of each question, followed by whether you passed the challenge:" + JSON.stringify(userScore,null,1))
// }

// function muteUnmute(){
// 	document.getElementById('player').muted=!document.getElementById('player').muted
// }

// function toggleInstructions(){
// 	if(document.getElementById("questions").textContent !== instructionCopy){
// 		document.getElementById("questions").textContent = instructionCopy;
// 	}

// 	else if(document.getElementById("questions").textContent == instructionCopy){
// 		document.getElementById("questions").textContent = currentQuestion;
// 	}
// }

// function randomQuote(){ //calls a random quote mp3 stored in a hash

// }
///END WEB CODE

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Test Code

//FOR TESTING TERMINAL (NOT BROWSER)
// answer_1 = "pop"
// addAnswer(userAnswers,currentNumber,answer_1)
// addScore(userScore,currentNumber)

// currentNumber+= 1

// answer_2 = "push"
// addAnswer(userAnswers,currentNumber,answer_2)
// addScore(userScore,currentNumber)

// currentNumber+= 1

// answer_3 = "length"
// addAnswer(userAnswers,currentNumber,answer_3)
// addScore(userScore,currentNumber)

// currentNumber+= 1

// answer_4 = "reverse"
// addAnswer(userAnswers,currentNumber,answer_4)
// addScore(userScore,currentNumber)

// currentNumber+= 1

// answer_5 = "shift"
// addAnswer(userAnswers,currentNumber,answer_5)
// addScore(userScore,currentNumber)

// currentNumber+= 1

// answer_6 = "includes"
// addAnswer(userAnswers,currentNumber,answer_6)
// addScore(userScore,currentNumber)

// currentNumber+= 1

// answer_7 =  "indexOf"
// addAnswer(userAnswers,currentNumber,answer_7)
// addScore(userScore,currentNumber)

// currentNumber+= 1

// answer_8 = "forEach"
// addAnswer(userAnswers,currentNumber,answer_8)
// addScore(userScore,currentNumber)

// currentNumber+= 1

// answer_9 = "map"
// addAnswer(userAnswers,currentNumber,answer_9)
// addScore(userScore,currentNumber)

// currentNumber+= 1

// answer_10 = "splice"
// addAnswer(userAnswers,currentNumber,answer_10)
// addScore(userScore,currentNumber)

// console.log(userAnswers)
// console.log(userScore)
//FOR TESTING IN TERMINAL

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// REFACTORED CODE

var questions = { //object with question numbers as properties and quiz questions as values
	1 : "Indiana explores the Cave of Code. Does he have what it takes to retrieve the lost object? Begin by viewing the instructions.",
	2 : "This method removes the last element from an array...",
	3 : "This method adds an element to the end of an array...",
	4 : "This method shows how many elements are in an array...",
	5 : "This method reverses the order of an array's elements",
	6 : "This method removes and returns the first element of an array",
	7 : "This method checks an array for a certain element and returns true/false",
	8 : "This method returns the first index of an element within the array",
	9 : "This method calls a function for each element of the array",
	10 : "This method creates a new array with the results of calling a provided function on every element in this array",
	11 : "This method adds/removes elements from an array"
}

var answers = { //object with question numbers as properties and quiz answers as values
	1 : "yes",
	2 : "pop",
	3 : "push",
	4 :  "length",
	5 : "reverse",
	6 : "shift",
	7 : "includes",
	8 : "indexOf",
	9 : "forEach",
	10 : "map",
	11 : "splice"
}

var userAnswers = { //initialize blank object to store question numbers as properties and user answers as values 
}

var userScore = { //initialize blank object to store question numbers as properties and boolean as values for correct/incorrect

}

var trophies = { //an array to house the HTML ID's for each trophy
	1 : "t1",
	2 : "t2",
	3 : "t3",
	4 : "t4",
	5 : "t5",
	6 : "t6",
	7 : "t7",
	8 : "t8",
	9 : "t9",
	10 : "t10",
	11 : "t11"
}

var incorrectQuotes = {
	1 : "quitmonkey.wav",
	2 : "mercsbadname.wav",
	3 : "notimproved.wav",
	4 : "lost.wav",
}

var correctQuotes = {
	1 : "wisechoice.wav",
	2 : "persistence.wav",
	3 : "nothingshocks.wav",
	4 : "wisechoice.wav",

}

var quotes = {
	1 : "quitmonkey.wav",
	2 : "crackednail.wav",
	3 : "how2fly.wav",
	4 : "idontknow_lc.wav",
	5 : "lookwhatyoudid.wav",
	6 : "lost.wav",
	7 : "makeaswego.wav",
	8 : "mercsbadname.wav",
	9 : "nothingshocks.wav",
	10 : "notimproved.wav",
	11 : "ohmygod_td.wav",
	12 : "persistence.wav",
	13 : "powermeddle.wav",
	14 : "quitmonkey.wav",
	15 : "snakes.mp3",
	16 : "takeiteasy_lc.wav",
	17 : "whysnakes.wav",
	18 : "wisechoice.wav"
}

window.onload = setFocusToAnswerForm //set the cursor to the answer form when the page loads
window.onload = nextQuestion //set the first question when the page loads
document.addEventListener('keydown', pressedEnter, true); //add an event listener to listen for a key being pressed. If so, trigger the pressedEnter() function.
var currentNumber = 0; //a counter to increment through the questions, answers and trophies
var quoteVolume = 0.7 //set default quote volume to 0.7 so we can toggle mute 
var instructionCopy = "Type your answer then click 'submit' to pass each challenge. Click 'score' to reveal two secret objects. Watch for grammatical pit-falls! Only submit the method name, eg: <join>. Ready? Type <yes> and click submit!";


function getCurrentQuestion(input,number){ //selects any question from a group of questions, assigns the result to a variable
	currentQuestion = input[number]

}

function getCurrentAnswer(input,number){ //selects any answer from a group of anwers, assigns the result to a variable
	currentAnswer = input[number]
}

function getUserAnswer(){ //gets the user's answer from the HTML form, assigns the result to a variable
	answer = document.getElementById("answerForm").value;
}

function addUserAnswer(output,number,answer){ //update the user's answer object with the question number as a new property and the user's answer as the value. 
	output[number] = answer
}

function getUserScore(input,answer){ //gets the user's score, assigns the result to a variable. Correct = true, incorrect = false.
	if(input == answer){
		score = true
		playRandomQuote(correctQuotes,4)
	}
	else{
		score = false
		playRandomQuote(incorrectQuotes,4)
	}
}

function addUserScore(output,number){ //update the user's answer object with the question number as a new property and the user's score as the value.
	output[number] = score 
}

function addTrophy(){ //adds a trophy image if the user's answer is correct
	if(score){
		document.getElementById(trophies[currentNumber]).src = "idol.png";
		document.getElementById(trophies[currentNumber]).style.opacity = "1";
		document.getElementById(trophies[currentNumber]).style.border = "1px solid gold";
	}
}

function checkQuestionsLeft(){
	if (currentQuestion !== undefined ){
		document.getElementById("questions").textContent = currentQuestion;
	} else{
		document.getElementById("questions").textContent = "Looks like we're out of questions. Click 'score' to see if you recovered the object!";
	}

}

function submitAnswer(){ //Triggered by clicking the "submit" button. Sets off chain of methods to submit and score the answer.
	getCurrentAnswer(answers, currentNumber) 
	getUserAnswer() 
	getUserScore(currentAnswer,answer) 
	alert("Added answer!  " + "'" + answer + "'" + " for question number " + currentNumber);
	addUserAnswer(userAnswers,currentNumber,answer);
	addUserScore(userScore,currentNumber);
	addTrophy();
}

function nextQuestion(){ //Triggered by clicking the "next question" button. Sets off chain of methods to prep for the next question.
	document.getElementById("answerForm").value = "" 
	setFocusToAnswerForm(); 
	currentNumber ++ 
	getCurrentQuestion(questions,currentNumber); 
	checkQuestionsLeft();
}

function displayScore(){//Triggered by clicking the "score" button. Displays the two objects that house the user's answers and the user's score. 
	alert("Your questions and answers:" + JSON.stringify(userAnswers,null,1))
	alert("Each question number followed by your score:" + JSON.stringify(userScore,null,1))
}

function toggleMute(){//Triggered by clicking the "mute" button. Mutes and unmutes the soundtrack.
	var muteButton = document.getElementById("mute")
	if(document.getElementById("player").volume == 0) {
		document.getElementById("player").volume = 1;
		quoteVolume = 0.7;
		muteButton.style.color = "#ffea30";
		muteButton.style.backgroundColor = "#ff5c1c" 
	}
	else if(document.getElementById("player").volume == 1){
		document.getElementById("player").volume = 0;
		quoteVolume = 0;
		muteButton.style.color = "#ff5c1c";
		muteButton.style.backgroundColor = "#ffea30" 
	}

}

function toggleInstructions(){//Triggered by clicking the "instructions" button. Toggles displaying the game instructions into the questions form. 
	getCurrentQuestion(questions,currentNumber);
	if(document.getElementById("questions").textContent !== instructionCopy){
		document.getElementById("questions").textContent = instructionCopy;
	}

	else if(document.getElementById("questions").textContent == instructionCopy){
		document.getElementById("questions").textContent = currentQuestion;
	}
}

function pressedEnter(press){ //Pressing the <enter> button on the keyboard mimics clicking the "submit" button
	if(press.keyCode === 13){ 
		submitAnswer();
		nextQuestion();
	}
}

function setFocusToAnswerForm(){ //sets the browser's focus to the text form 
    document.getElementById("answerForm").focus();
}

function playRandomQuote(input,number){
	var random = Math.floor(Math.random() * number) + 1
	var quote = new Audio(input[random]);
	quote.volume = quoteVolume
	quote.play();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// REFLECTION

// Fun challenge! 

// What worked was following the part of the challenge that suggested we buid an MVP and go from there. I didn't
// set out to do anything too major. I liked that it was open-ended and immediately thought of some bonus ideas, but
// I focued on getting an MVP out and thinking about the base requirements first.

// What also helpd was keeping a running log of "ideas." Instead of getting off track, I simply jotted them down 
// to keep on track with working towards the MVP. It's easy to get excited! 

// The most important thing I take away from this project is how powerful our languages are. I love that the challenge
// presented three different examples - one small, one medium and one large. This really put into perspect what we can
// do with simple data sets. It really makes you feel like any limitations are just in imagination. And that made me
// suddenly appreciate all the games and apps that I had experienced to date. Super insightful.

// The first problem I ran into was with the objects that stored my questions and answers. I had started with one single
// object called <answersQuestions> where the property was an answer and the question was the value. This felt right,
// but it turned out to be hard to iterate over, especially when I began using it to update HTML. I wound up making
// the properties numbers so I could iterate them with a counter. This felt more natural seeing that I was doing 
// a sequential quiz.

// It wasn't until a while later that it hit me that my objects looked kind of like arrays! I wondered if this was
// bad practice but couldn't come up with an efficient way to iterate over my objects. Looping with for-in is easy,
// but that's a quick loop. I'm not sure how I'd use that in a step-by-step quiz that has HTML buttons and all. I included
// this original code between lines 45-72. I was able to access each question and answer, but it still felt sloppy having
// to iterate over an array. On one hand it felt like the correct way to use an object, on the other hand it felt
// verbose. I made an executive decision and decided to keep it as it is now - with numbers as properties.

// Another thing I ran into was during refactoring. I challenged myself to make most of my methods have
// single-responsibility. I removed their knowledge of "how" to do stuff. The result is a bunch of single-responsibility
// methods, but then my <submitAnswer()> and <nextQuestion()> methods have to call a bunch of other methods. 
// I'm not sure if this is good practice. On one hand it feels weird because one button sets off such a chain of events.
// On the other hand, the functions don't know "how" do to things. Rather, they just know "what" to do. This felt OOP-like, 
// so I stuck with this approach. Mainly because they say "what" to do but not "how."

// Another question I had was where to initially define three important variables <currentAnswer>, <currentQuestion> and <answer>.
// They are updated when called by the methods at the top, so I left them to be defined inside those methods as global
// variables. However I first had them defined as empty strings at the top level, to later be updated by the methods. Both
// worked, I just wasn't sure what's better practice.

// I had a lot of fun manipulating the DOM. I had done a JQuery course at Codeshool a while ago, so this felt
// familiar but I had never done it without JQuery. Probably a good practice before we get into JQuery. I liked 
// our JS/JQ book and it really helped as a reference. 

// Ruby and JS have been great to learn, but I really have liked when I can see them in action. Terminal is fun,
// but I rarely use Terminal as a consumer. Seeing things in a live browser is just so exciting, and I'm glad we had 
// the option to do a little extra work and try to get things talking in a new format!

// Sorry about the messy files. I ran out of time and will tidy them up this week and add the game to the "projects"
// section of my blog.
