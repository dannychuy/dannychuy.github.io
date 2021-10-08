$(document).ready(function() {

	const DOCUMENT_HEIGHT = $(document).height();
	const WINDOW_HEIGHT = $(window).height();
	const JUMP_HEIGHT = 150;
	const ROTATE_RANGE = 50;
	const SCROLL_SPEED = 150;
	const SCROLL_FREQ = SCROLL_SPEED*Math.PI;

	postcards = [].slice.call(document.getElementsByClassName("postcard")).reverse();
	document.getElementById("main").style.height = (WINDOW_HEIGHT + SCROLL_FREQ*(postcards.length - 1) - 16) + "px";
	
	// console.log(postcards);


	index = 0;
	next_index = index+1;
	card = postcards[index];
	queued_card = postcards[next_index];



	$(window).scroll(function() {
		next_index =  Math.floor($(window).scrollTop()/SCROLL_FREQ) % postcards.length;

		// Find new card
		if (next_index != index) {
			index = next_index;

			card.style.transform = "translate(-50%, -50%)";
			// postcards.style.zIndex = 0;
			for (const element of postcards) {
				element.style.zIndex = 0;
			}

			card = postcards[next_index]; 
			card.style.zIndex = 2;

			queued_card = postcards[(next_index+1) % postcards.length];
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
	});

	window.onkeydown = function(e) { 
		if (e.keyCode == 32) {
			e.preventDefault();
			window.scrollTo({ 
				top: Math.ceil(($(window).scrollTop()+1)/SCROLL_FREQ) * SCROLL_FREQ,
				left: 0, 
				behavior: 'smooth' 
			});
		}
	};

});







