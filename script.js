let RegexDatabase = {
	1: /\b\d{3}\w+\d{1}\b/,
	2: /\w+\/\w+/,
	3: /\b\d\d\w\d[aeo]{2}\b/
}

let button = document.querySelector("button");
let input = document.querySelector("input");
let regex = RegexDatabase["3"];
let span = document.querySelector("#regex");
let scoreSpan = document.querySelector(".score");
let score = 0;
span.innerHTML = regex;
scoreSpan.innerHTML = score;

let lives = 3;

button.onclick = function() {
	let testString = input.value;
	if(regex.test(testString)) {
		score += 1;
			} else {
				lives -= 1;
			}
	if(lives <= 0) {
		alert("You got eaten!");
	} else if(score >= 10) {
		alert("You win the game!");
	}
	scoreSpan.innerHTML = score;
	regex = RegexDatabase["1"];
	span.innerHTML = regex;
}

