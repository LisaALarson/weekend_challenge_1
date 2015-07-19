console.log("javascript is working");

$(document).ready(function(){
	$("#someForm").submit(function(event){
		event.preventDefault();

		var $inputs = $("#someForm :input");
		var employeeObject = {};

		$inputs.each(function(){
			employeeObject[this.name] = $(this).val();
		});

		console.log($inputs);
		console.log(employeeObject);
		console.log(employeeObject.firstname);
		console.log(employeeObject.lastname);
		console.log(employeeObject.employeenumber);
		console.log(employeeObject.title);
		console.log(employeeObject.lastreviewscore);
		console.log(employeeObject.salary);

	});

	$("body").on('click', '.superbutton', function(){
		createNewThing();
	});

	$("body").on('click', '.awesomeButton', function(){
		alert("AWESOME BUTTON CLICKED!");
	});
});

function createNewThing(){
	$("body").append("<div></div>");
	var $el = $("body").children().last();
	$el.append('THIS SHOULD BE current info');
	$el.append("<button class='awesomeButton'>THIS SHOULD REMOVE INFO</button>");
//in this function I need to access the employee information object that was created and display it in the html page.  I also need to have a button to remove the info.
}
//several employee infos should be displayed on the screen.  the awesome button should remove that employees info.

