$(document).ready(function() {
	$(".list-item").hover(
		function(){
    		// $(".list-item img").css('margin-left', '300px');
    		$(this).find('img').css('margin-top', '35px');
    		$(this).find('.item-text').css('margin-top', '0px');
		},
		function(){
    		// $(".list-item img").css('margin-left', '0px');
    		$(this).find('img').css('margin-top', '0px');
    		$(this).find('.item-text').css('margin-top', '-35px');
		}
	);
});