$( document ).ready(function() {
	$('input.form-control.username').focus();

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
        var token = (JSON.stringify(result));
        localStorage.setItem("token", token);
        window.location.replace('admin.html');
    }});

	});

});	