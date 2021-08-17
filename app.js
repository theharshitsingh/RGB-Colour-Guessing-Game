var sqrBtn = document.querySelectorAll(".square");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
var displayBtn = document.querySelector("#display");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var numOfSqr = 6;
var isHard = true;
var pickedColor = picColor(numOfSqr);
var colors = ["purple", "purple", "purple", "purple", "purple", "purple"]; 

for (var i=0; i<numOfSqr; i++) {
	colors[i] = colorGiver();
	sqrBtn[i].style.background = colors[i];
}

displayBtn.textContent = colors[pickedColor];

for (var i=0; i<sqrBtn.length; i++) {
	sqrBtn[i].addEventListener("click", function() {
		if (this.style.background === colors[pickedColor]) {
			colorAll(pickedColor);
			h1.style.background = colors[pickedColor];
			messageDisplay.textContent = "Correct :)";
			reset.textContent = "Play Again";
		}
		else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again :(";
		}
	});
};

resetBtn.addEventListener("click", function() {
	messageDisplay.textContent = "";
	reset.textContent = "New Colors";
	h1.style.background = "#5c9cb8";
	if (isHard) {
		numOfSqr = 6;
		pickedColor = picColor(numOfSqr);
		displayBtn.textContent = colors[pickedColor];
		for (var i=0; i<numOfSqr; i++) {
			colors[i] = colorGiver();
			sqrBtn[i].style.background = colors[i];
		}
	}
	else {
		numOfSqr = 3;
		pickedColor = picColor(numOfSqr);
		displayBtn.textContent = colors[pickedColor];
		for (var i=0; i<numOfSqr; i++) {
			colors[i] = colorGiver();
			sqrBtn[i].style.background = colors[i];
		}
		for (var i=3; i<6; i++) {
			sqrBtn[i].style.background = "#232323";
		}
	}
});

easyBtn.addEventListener("click", function() {
	h1.style.background = "#5c9cb8";
	reset.textContent = "New Colors";
	messageDisplay.textContent = "";
	isHard = false;
	numOfSqr = 3;
	pickedColor = picColor(numOfSqr);
	displayBtn.textContent = colors[pickedColor];
	easyBtn.classList.add("activeBtn");
	hardBtn.classList.remove("activeBtn");
	for (var i=0; i<numOfSqr; i++) {
		colors[i] = colorGiver();
		sqrBtn[i].style.background = colors[i];
	}
	for (var i=3; i<6; i++) {
		sqrBtn[i].style.background = "#232323";
	}
});

hardBtn.addEventListener("click", function() {
	h1.style.background = "#5c9cb8";
	reset.textContent = "New Colors";
	messageDisplay.textContent = "";
	isHard = true;
	numOfSqr = 6;
	pickedColor = picColor(numOfSqr);
	displayBtn.textContent = colors[pickedColor];
	hardBtn.classList.add("activeBtn");
	easyBtn.classList.remove("activeBtn");
	for (var i=0; i<numOfSqr; i++) {
		colors[i] = colorGiver();
		sqrBtn[i].style.background = colors[i];
	}
});

function colorAll(num) {
	for (var i=0; i<numOfSqr; i++) {
		sqrBtn[i].style.background = colors[num];
	}
};

function colorGiver() {
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	// rgb(r, g, b)
	return "rgb(" + r +", " + g + ", " + b +")";
}

function picColor(num) {
	return Math.floor(Math.random()*num);
}
