var winLimit;
var limitReached = false;
var player1 = 0;
var player2 = 0;

// function to update score variable
function updateScore (id) {
	if (id === "#player-1-increment") {
		player1 ++;
	} else if (id === "#player-2-increment") {
		player2 ++;
	};
};

function updateVars (e) {

	// update winLimit var
	if (e.srcElement.id === "win-limit-input") {
		winLimit = e.target.value;
	};

	if (e.srcElement.id ===)
	updateScore(e.srcElement.id);

	if (player1 >== winLimit || player2 >== winLimit) {

	};
};

// set the win-limit span upon entering text value in the input box
document.querySelector("#win-limit-input").addEventListener("change", e => { console.log("win-limit set")
	winLimit = e.target.value;
	document.querySelector("#win-limit").innerText = winLimit;
	reset();
	if (winLimit === 0) {
		for (var i = 1; i <= 2; i++) {
			winLimitReached("#player-" + i + "-score");
		};
	};
});

// set the player 1 score upon clicking the player-1-increment button
document.querySelector("#player-1-increment").addEventListener("click", e => {
	var score = Number(document.querySelector("#player-1-score").innerText) + 1;
	document.querySelector("#player-1-score").innerText = String(score);
});

// set the player 2 score upon clicking the player-2-increment button
document.querySelector("#player-2-increment").addEventListener("click", e => {
	var score = Number(document.querySelector("#player-2-score").innerText) + 1;
	document.querySelector("#player-2-score").innerText = String(score);
});

// reset the scores upon clicking the reset button
document.querySelector("#reset").addEventListener("click", e => {
	reset();
});


// function to reset score spans to zero
function reset() {
	console.log("reset run");
	var spans = document.querySelectorAll(".score-span");
	for (var i = 0; i < spans.length; i++) {
		spans[i].innerText = "0";
	};
};