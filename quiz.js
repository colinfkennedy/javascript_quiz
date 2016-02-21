var correctCount = 0;

var isItCorrect = function(question, correctAnswer) {
	var answer = prompt(question);
	if(answer === correctAnswer) {
		alert("Correct!");
		correctCount++;
	} else {
		alert("Nope! Boo, wrong answer!");
	}
}

//Put your questions here
isItCorrect("Who stars in the film Deadpool?", "Ryan Reynolds");
isItCorrect("What does Aol stand for?", "America Online");
isItCorrect("What is the capital of the USA?", "Washington D.C.");

alert("You got " + correctCount + " answers correct. Well done!"); 