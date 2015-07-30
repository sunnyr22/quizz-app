function Question(question, answer1,answer2, answer3, answer4, correctans) {

	this.question = question;
	this.answer1 = answer1;
	this.answer2 = answer2;
	this.answer3 = answer3;
	this.answer4 = answer4;
	this.correctans = correctans;

}

var questions = [new Question("What are all men in the realm afraid of beyond the Wall once Winter comes?", "The snow","Sauron","White Walkers","Dragons",3),
					new Question("Where is Melisandre from?", "Ashai", "Volantis", "Bravos", "Tyrosh", 1),
					new Question("Which Dragon was called the 'Black Dread'?","Meraxes","Drogon","Balerion","Vhagar",3),
					new Question("Who was called King of the North?", "Rob Stark", "Tywin Lanister", "Jamie Lanister", "Stannis Baratheon",1)]
					;
