$( document ).ready(function() {
	$('input.form-control.username').focus();
	// localStorage.removeItem("token");

	if (localStorage.token === '{"token":"M44ASR0FL0PJH3OLJ5RC"}') {
		window.location.replace('admin.html');
	}

	else {
	
		$('form').on("submit",function(event){
			event.preventDefault();

			var username = $(this).find('input.form-control.username').val();
			
			var password = $(this).find('input.form-control.password').val();
			
			var data = {
				username: username,
				password: password
			};

		$.ajax({url: "https://tiyagencyweek.herokuapp.com/auth/login",
	        type:"POST",
	        data:data,
	        success: function(result){
	        	if ((JSON.stringify(result)) === '{"error":"Your login information was not right :("}'){
	        		alert("Your username or password is incorrect.");
	        	}
	        	else {
			        var token = (JSON.stringify(result));
			        localStorage.setItem("token", token);
		        	window.location.replace('admin.html');
		        }	
	    	}
		});

		});
	}

});	