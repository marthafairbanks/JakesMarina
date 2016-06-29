$( document ).ready(function() {
	$('input.form-control.username').focus();
	// localStorage.removeItem("token");
	console.log(localStorage);

	function checkToken() {
		if (localStorage.token === M44ASR0FL0PJH3OLJ5RC) {
			console.log("yay you been here before!");
			// window.location.replace('admin.html');
		}
		else
			console.log("please enter your username");
			$('form').on("submit",function(event){
		event.preventDefault();

		var username = $(this).find('input.form-control.username').val();
		console.log(username);
		

		var password = $(this).find('input.form-control.password').val();
		console.log(password);
		
		
		var data = {
			username: username,
			password: password
		};
		
		console.log(data);

	$.ajax({url: "https://tiyagencyweek.herokuapp.com/auth/login",
        type:"POST",
        data:data,
        success: function(result){
        	if ((JSON.stringify(result)) === '{"error":"Your login information was not right :("}'){
        		alert("Your username or password is incorrect.");
        	}
        	else {
		        console.log((JSON.stringify(result)));
		        var token = (JSON.stringify(result));
		        // localStorage.setItem("token", token);
		        // console.log(localStorage);
	        	// window.location.replace('admin.html');
	        }	
    }});



	});
	}

});	