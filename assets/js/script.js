$(document).ready(function() {

	const DOCUMENT_HEIGHT = $(document).height();
	const WINDOW_HEIGHT = $(window).height();
	// const NUM_SECTIONS = SECTIONS.length;
	const JUMP_HEIGHT = 150;
	const ROTATE_RANGE = 50;
	const SCROLL_SPEED = 100;
	const SCROLL_FREQ = SCROLL_SPEED*Math.PI;

	sections = ["club-card", "61b-card", "hkn-card", "csm-card", "esc-card", "fin-card"];
	document.getElementById("main").style.height = (WINDOW_HEIGHT + SCROLL_FREQ*(sections.length - 1) - 16) + "px";
	console.log(WINDOW_HEIGHT)
	postcards = document.getElementsByClassName("postcard");


	index = 0;
	next_index = index+1;
	card = document.getElementById(sections[index]);
	queued_card = document.getElementById(sections[next_index]);



	$(window).scroll(function() {
		next_index =  Math.floor($(window).scrollTop()/SCROLL_FREQ) % sections.length;

		// Find new card
		if (next_index != index) {
			index = next_index;

			card.style.transform = "translate(-50%, -50%)";
			// postcards.style.zIndex = 0;
			for (const element of postcards) {
				element.style.zIndex = 0;
			}

			card = document.getElementById(sections[next_index]);
			card.style.zIndex = 2;

			queued_card = document.getElementById(sections[(next_index+1) % sections.length]);
			queued_card.style.zIndex = 1;
		}
		card.style.transform = "translate(-50%, -" + (50 + Math.abs(JUMP_HEIGHT*Math.sin($(window).scrollTop()/SCROLL_SPEED))) + "%) " +
					"rotate(-" + (Math.abs(ROTATE_RANGE*Math.sin($(window).scrollTop()/SCROLL_SPEED))) + "deg)";

		// Switch current card from front/back
		if ($(window).scrollTop()%SCROLL_FREQ > SCROLL_FREQ/2) {
			card.style.zIndex = 0;
		} else {
			card.style.zIndex = 2;
		}

	})


});


function scrollABit() {
	$(window).scroll(0, 100);
}