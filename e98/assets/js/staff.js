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
							        	<img class='img-responsive img-circle center-block' src='assets/img/" + instructor.img + ".png'> \
							     	</div> \
							     	<div class='col-xs-9 col-sm-12 col-md-9'> \
							        	<h3 style='display: inline-block; padding-right: 1em;''>" + instructor.namer + "</h3> <a href='mailto: " + instructor.email + "'>" + instructor.email + "</a> \
							        	<ul> \
								            <li></li> \
								            <li class='section'>" + instructor.ym + "</li> \
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

$(document).ready(function(){
	var text = "<tr> \
			        <th width='(100/6)%' style='text-align:right;'>Time</th> \
			        <th width='(100/6)%'>Monday</th> \
			        <th width='(100/6)%'>Tuesday</th> \
			        <th width='(100/6)%'>Wednesday</th> \
			        <th width='(100/6)%'>Thursday</th> \
			        <th width='(100/6)%'>Friday</th> \
				</tr>";
	var i, j, time, style;

	for (i=0; i<calendar_data.length; i++) {
		time = calendar_data[i];
		text += "<tr><td style='text-align:right;'>" + calendar_times[i] + "</td>";
		for (j=0; j<time.length; j ++) {
			text += "<td>" + insertInfo(time[j]) +"</td>";
		}
		text += "</tr> \n";
	}

		text += "<br><br>";
	$("#weekly-calendar tbody").html(text);
});

function insertInfo(section_num) {
	if (section_num != 0) {
		var i, section = sections[section_num - 1];
		var content = "'" + insertContent(section) + "'";

		// var color = "style='background-color:" + section.colored + ";'";
		var color = "";
		return "<button type='button' class='btn btn-secondary' data-container='body' data-toggle='popover' data-trigger='hover'\
			data-placement='right' title='" + section.location + "' data-content=" + content + " " + color + ">Section " + (section_num) + "</button>";
	}
	return "";
	
}

function insertContent(section) {
	// var content = section.time + " " + section.location + "\n";
	var content = "";
	for (i=0; i<section.instructors.length; i++) {
		content += section.instructors[i].namer + "\n";
	}
	return content;
}
