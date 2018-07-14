$(document).ready(function(){
	var text = "<h1>Instructors</h1>";
	var i, j, section, instructor;

	for (i=0; i<sections.length; i++) {
		section = sections[i];
		text += "<div id='sec1'> \
					<h2>Section " + (i+1) + ": " + section.time + ",	" + section.location + "</h2> \
					<br>";
					for (j=0; j<section.instructors.length; j++) {
						instructor = section.instructors[j];
						text += "<div class='row'> \
							     	<div class='col-xs-3 col-sm-12 col-md-3 staffer-img'> \
							        	<img class='img-responsive img-circle center-block' src='assets/img/" + instructor.img + ".jpg'> \
							     	</div> \
							     	<div class='col-xs-9 col-sm-12 col-md-9'> \
							        	<h3 style='display: inline-block; padding-right: 1em;''>" + instructor.namer + "</h3> <a href='mailto: " + instructor.email + "'>" + instructor.email + "</a> \
							        	<ul> \
								            <li></li> \
								            <li class='section'>" + instructor.ym + "</li> \
								            <li class='section bio'><b>Involvement:</b> " + instructor.involvement + " \
								            <li class='section bio'> <b>About:</b> " + instructor.bio + " \
							            	</li> \
							         	</ul> \
							      	</div> \
								</div>";
					}
		text += "</div> <br><br>";
	}
	$("#instr").html(text);
});

$(document).ready(function(){
	var text = "<h1>Coordinators</h1>";
	var j, section, instructor;

	for (j=0; j<coordinators.length; j++) {
		instructor = coordinators[j];
		text += "<div class='row'> \
			     	<div class='col-xs-3 col-sm-12 col-md-3 staffer-img'> \
			        	<img class='img-responsive img-circle center-block' src='assets/img/" + instructor.img + ".jpg'> \
			     	</div> \
			     	<div class='col-xs-9 col-sm-12 col-md-9'> \
			        	<h3 style='display: inline-block; padding-right: 1em;''>" + instructor.namer + "</h3> <a href='mailto: " + instructor.email + "'>" + instructor.email + "</a> \
			        	<ul> \
				            <li></li> \
				            <li class='section'>" + instructor.ym + "</li> \
				            <li class='section bio'><b>Involvement:</b> " + instructor.involvement + " \
				            <li class='section bio'> <b>About:</b> " + instructor.bio + " \
			            	</li> \
			         	</ul> \
			      	</div> \
				</div>";
	}

		text += "<br><br>";
	$("#coord").html(text);
});
