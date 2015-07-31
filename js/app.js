$(document).ready (function(){


function Question(question, answer1,answer2, answer3, answer4, correctans) {

	this.question = question;
	this.answer1 = answer1;
	this.answer2 = answer2;
	this.answer3 = answer3;
	this.answer4 = answer4;
	this.correctans = correctans;

}

var questions = [new Question("What are all men in the realm afraid of beyond the Wall, once Winter comes?", "The snow","Sauron","White Walkers","Dragons",3),
					new Question("Where is Melisandre from?", "Ashai", "Volantis", "Bravos", "Tyrosh", 1),
					new Question("Which Dragon was called the 'Black Dread'?","Meraxes","Drogon","Balerion","Vhagar",3),
					new Question("Who was called King of the North?", "Rob Stark", "Tywin Lannister", "Jamie Lannister", "Stannis Baratheon",1),
					new Question('Who said "Nothing isn\'t better or worse than anything. Nothing is just nothing."', "Tyrion Lannister","Arya Stark", "Jon Snow","Cercei Lannister",2)]
					;




// Global Variables
var currentQuestion = 1;
var currentAnswers = 0;
var totalQuestions = questions.length;
var correctMsg = "Correct!";
var incorrectMsg = "Incorrect";

// On Clicking Start
$("start").click(function(){

	});


//  Get Questions and choices and









});