$(document).ready(function() {
	//BOOM
	$(".list-container").click(function () {
		if (!$(this).hasClass('inAction')) {
			$(this).addClass('inAction');
			var $this = $(this).children('.button').children('img');
			var $list = $($this).parent().parent().children("ul");

			console.log(($this).css('-webkit-animation'));
			if (($this).css('-webkit-animation') != 'high-bounce 1.5s ease 0s 1 normal none running') {
				//Potato Jump

				//Potato Animation
				$($this).css('-webkit-animation', 'high-bounce 1.5s');
				setTimeout(function() {
					$($this).css('width', '200%');
					$($this).css('height', '200%');
				}, 1125); //Animation is at 75% * 1500 = 1125

				
				setTimeout(function() { 			    
				    //Fries Fall
				    $($list).find('.item-text').css('margin-top', '0');
					$($list).children('li:nth-child(odd)').children('img').css('transform', 'translateY(10em) rotate(90deg)');
					$($list).children('li:nth-child(even)').children('img').css('transform', 'translateY(-10em) rotate(-90deg)');
			    }, 1500);

			    setTimeout(function() { 
				    
				    //Reset Fries
				    $($list).find('.item-text').css('margin-top', '0');
					$($list).children('li').children('img').remove();
					$($list).children('li').prepend('<img src="assets/img/Fry.jpg" style="transform: translate(-50%,-300%)"/>');
			    }, 2000);
				
				
			} else {
				//Reset

				//Potato Animation
				$($this).css('-webkit-animation', 'shrink 1s');
				setTimeout(function() {
					$($this).css('width', '100%');
					$($this).css('height', '100%');
				}, 1000); //Finish before animation does


				setTimeout(function() { 
				    // $('.list-content li:nth-child').children('item-text').css('overflow', 'visible');
				    //Fries Fall
				    $($list).find('.item-text').css('margin-top', '-10px');
					$($list).children('li').children('img').css('transform', 'translate(-50%, -20%)');
					// $($list).children('li:nth-child(odd)').children('img').css('transform', 'translate(-50%, -20%)');
					// $($list).children('li:nth-child(even)').children('img').css('transform', 'translate(-50%, -20%)');
			    }, 700);


			    setTimeout(function() { 
			    	$($this).css('width', '100%');
					$($this).css('height', '100%');
				    $($this).css('-webkit-animation', 'potato-bounce 1.5s alternate infite');
			    }, 2000);
			}
			$(this).removeClass('inAction');
		}
	});
});