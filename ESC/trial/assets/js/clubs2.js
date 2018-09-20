function filterCategory(input) {
    // Change if categories change
    var categories = ["Academic and Professional", "Competition/Project Teams", "Culture and Identity", 
            "Design, Make, Hack", "Entrepreneurship/Consulting", "Fraternities and Sororities", "School, Community and Global Outreach"];

    // Declare variables
    var filter, cat;
    filter = categories[input];
    cat = document.getElementsByClassName("category")


    // Loop through all list items, and hide those who don't match the search query
    for (var category of cat) {
    	if ($(category).find(".title").text() == filter) {
    		$('html,body').animate({
		        scrollTop: $(category).offset().top - 180},
		        'slow');
    	}
    }
}

function Controller($scope) {
    $scope.divs =["test1","test2","test3","test4","test5","test6","test7","test8","test9","test10","test11","test12"];

}