$(document).ready(function() {
	$(".list-item").hover(
		function(){
    		// $(".list-item img").css('margin-left', '300px');
    		$(this).find('img').css('margin-left', '300px');
		},
		function(){
    		// $(".list-item img").css('margin-left', '0px');
    		$(this).find('img').css('margin-left', '0px');
		}
	);
});