$(document).ready(function(){

	// button that removes each employee individually
	$("body").on('click', "#removeButton", function(){
		$(this).closest(".eachEmployee").remove();
	});

	$("#employeeInfoForm").submit(function(event){
		event.preventDefault();

		var $inputs = $("#employeeInfoForm :input");
		var employeeObject = {};

		// inputs user information into the employeeObject
		$inputs.each(function(){
			employeeObject[this.name] = $(this).val();
		});	

		// puts information from the object into the printEmployeeInfo function
		printEmployeeInfo(employeeObject.firstName, 
			employeeObject.lastName, 
			employeeObject.employeeNumber, 
			employeeObject.employeeTitle, 
			employeeObject.lastReviewScore, 
			employeeObject.salary);	

		// prints employee info onto the html page 
		// lastReviewScore tags each div for CSS color assignment
		function printEmployeeInfo(first, last, empNum, title, review, salary){
			var lastReviewScore="review"+employeeObject.lastReviewScore;
			$("#prependEmployeesAbove").prepend("<div class='eachEmployee "+lastReviewScore
				+"'><p>First Name: "
				+first+"</p><p>Last Name: "
				+last+"</p><p>Employee Number: "
				+empNum+"</p><p>Job Title: "
				+title+"</p><p>Review Score: "
				+review+"</p><p>Salary: $"
				+salary+
				"</p><br><button id='removeButton'>Remove Employee</button><br><hr></div>");
		}	

		// clears the text input boxes after submit button is pushed
		$("#employeeInfoForm")[0].reset();
	
	}); // end $("#someForm").submit function

}); // end document ready function

