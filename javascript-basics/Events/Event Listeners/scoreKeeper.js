
// set the win-limit span upon entering text value in the input box
document.querySelector("#win-limit-input").addEventListener("change", e => {
	document.querySelector("#win-limit").innerText = e.target.value;
});

// set the player 1 score upon clicking the player-1-increment button
document.querySelector("#player-1-increment").addEventListener("click", e => {
	document.querySelector("#player-1-score").innerText = String(Number(document.querySelector("#player-1-score").innerText) + 1);
	});

// set the player 2 score upon clicking the player-2-increment button
document.querySelector("#player-2-increment").addEventListener("click", e => {
	document.querySelector("#player-2-score").innerText = String(Number(document.querySelector("#player-2-score").innerText) + 1);
	});

// reset the scores upon clicking the reset button
// console.log(document.querySelector("#reset"));
document.querySelector("#reset").addEventListener("click", e => {
	var spans = document.querySelectorAll(".score-span")
	for (var i = 0; i < spans.length; i++) {
		spans[i].innerText = "0";
	};
});