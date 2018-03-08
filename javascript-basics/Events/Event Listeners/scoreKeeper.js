function app() {

	var winLimit = 5;
	var limitReached = false;
	var limitApplied = false;
	var player1 = 0;
	var player2 = 0;

	// function to update score variable
	function updateScore(id) { console.log("run updateScore");

		console.log("updateScore player1: ", player1);
		console.log("updateScore id: ", id);

		if (!limitReached) {
			// increment player scores
			if (id === "player-1-increment") {
				player1 ++;
			} else if (id === "player-2-increment") {
				player2 ++;
			};
		};

	};

	// functions to turn limit class on/off
	function addLimitClass(cl) {
		document.getElementsByClassName(cl)[0].classList.add("limit");
		return cl;
	};
	function removeLimitClass(id) {
		document.getElementById(id).classList.remove("limit");
	};

	// function to reset score spans to zero
	function reset() {

		console.log("reset run");

		var spans = document.querySelectorAll(".score-span");

		for (var i = 0; i < spans.length; i++) {
			spans[i].innerText = "0";
			removeLimitClass(spans[i].id)
		};

	};

	// function to update DOM
	function updateDOM() {

		// update score counter
		document.getElementById("player-1-score").innerText = String(player1);
		document.getElementById("player-2-score").innerText = String(player2);

		// update winlimit element
		document.getElementById("win-limit").innerText = String(winLimit);

		// class update
		if (limitReached && !limitApplied) {
			console.log("limitReached:", limitReached)
			limitApplied = addLimitClass(limitReached);
		};

		if (targetId === "reset") {
			reset();
		}

	};

	// function to update all vars upon click of any element
	function updateVars(e) {

		targetId = e.srcElement.id

		if (targetId === "reset") {
			console.log("reset vars run");
			var winLimit = 5;
			var limitReached = false;
			var limitApplied = false;
			var player1 = 0;
			var player2 = 0;
			console.log("reset player1: ", player1);
		};

		// update winLimit var
		if (targetId === "win-limit-input") {
			if (e.target.value !== 0 && !isNaN(Number(e.target.value))) {
				winLimit = Number(e.target.value);
			} else {
				alert("Please enter a number greater than zero!")
			};
		};

		// run update score function if increment button clicked and limit not reached
		if (targetId.search("/increment/")) {
			console.log("targetId in updateScore if: ", targetId);
			if (!limitReached) {
				updateScore(targetId);
			};
		};

		if (player1 >= winLimit || player2 >= winLimit) {
			limitReached = targetId;
		};

		updateDOM();

	};

	// add event listeners
	document.getElementById("clickables").addEventListener("click", e => {console.log("clickable clicked: ", e.target);updateVars(e);});
	document.getElementById("win-limit-input").addEventListener("change", e => {updateVars(e)});
};