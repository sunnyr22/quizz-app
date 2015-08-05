function dispNewQuestion (i) {
		console.log(questions[i]);
	}



function Question(question, answer1,answer2, answer3, answer4, correctans) {

	this.question = question;
	this.answer1 = answer1;
	this.answer2 = answer2;
	this.answer3 = answer3;
	this.answer4 = answer4;
	this.correctans = correctans;
	this.getCorrectanswer = function() {
		return this.correctans;
	}
	this.getAnswers = function(){
		return [this.answer1,this.answer2,this.answer3,this.answer4];
	}
	this.getQuestion =function (){
		return this.question;
	}
}

var questions = [new Question('What are all men in the realm afraid of beyond the Wall, once Winter comes?', "The snow","Sauron","White Walkers","Dragons",2),
					new Question("Where is Melisandre from?", "Ashai", "Volantis", "Bravos", "Tyrosh", 0),
					new Question("Which Dragon was called the 'Black Dread'?","Meraxes","Drogon","Balerion","Vhagar",2),
					new Question("Who was called King of the North?", "Rob Stark", "Tywin Lannister", "Jamie Lannister", "Stannis Baratheon",0),
					new Question('Who said "Nothing isn\'t better or worse than anything. Nothing is just nothing."', "Tyrion Lannister","Arya Stark", "Jon Snow","Cercei Lannister",1)]
					;

$(document).ready (function(){
// hide next question and play again
$(".nq").hide();
$(".pa").hide();

// Global Variables
var currentQuestion = 0;
var currentAnswers = 0;
var totalQuestions = questions.length;
var correctMsg = "Correct!";
var incorrectMsg = "Incorrect";
var numRight = 0;

// new question views
 function updateQuesion() {
 	var currentQ = questions[currentQuestion];
 	$("#currentQ").text(currentQ.getQuestion());
 	var answers = currentQ.getAnswers();
 	for(var i = 0; i < answers.length; i++) {
 		var answer = answers[i];
 		console.log(answer);
 		$("#choice" + (i+1)).text(answer);
 	}
 }
 updateQuesion();


// On Clicking Start

$("#start").click(function(e){
	e.preventDefault();
	$(this).hide();
	$(".sub-head").hide();
	$("#quiz, #playAgain").show();
});

//  On clicking Next 

$(".nq").click(function(e){
	e.preventDefault();
	currentQuestion ++;
	updateQuesion();
	$("#submitAnswer .ca").removeClass("inactive incorrect correct").text("Check Answer");
	$(".nq").hide();
	$("#choices input:radio").attr("checked", false);
	$("#choices input:radio").removeAttr("disabled");
});

//  Get Questions and choices 
// display current 
$("#submitAnswer").click(function(e){
	e.preventDefault();

	var myRadio = $('input[name=radios]');
	var checkedRadio = $('input[name=radios]:checked');
	console.log(checkedRadio);

	if( checkedRadio.length < 1){
		alert("Please select an answer");
		return;
	}


	if ($(this).find(".ca").hasClass("inactive")) {
		console.log("Escape");
		return;
	}
	var index = myRadio.index(checkedRadio) ;
	var currenQ = questions[currentQuestion];
	var correctA=(currenQ.getCorrectanswer());
	if(correctA == index) {
		$("#submitAnswer .ca").text("Correct!").addClass("correct inactive");
		$(".nq").show();
		numRight ++;
	}
	else {
		$("#submitAnswer .ca").text("Incorrect.").addClass("incorrect inactive");
		
		$(".nq").show();
	}
	$("#choices input:radio").attr("disabled", "disabled");
	if( currentQuestion === 4){
		$(".nq").hide();
		$(".pa").show();
		alert("You got " + numRight+ " out of 5 questions right!")
	}
});



// 









});