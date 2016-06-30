// localStorage.removeItem("token");
console.log(localStorage);
var token = localStorage.token;

if (token == null) {
	window.location.replace('adminLogin.html');
}

$( document ).ready(function() {
	$('input.form-control.blogTitle').focus();
	
	$('form').on("submit",function(event){
		event.preventDefault();

		var title = $(this).find('input.form-control.blogTitle').val();
		var description = $(this).find('textarea.form-control.blogDescription').val();

		var data = {
				title: title,
				description: description
		};

		var token = JSON.parse(localStorage.token);
		token = token.token;

		$.ajax({url: "https://tiyagencyweek.herokuapp.com/blogs/create",
		    type:"POST",
		    data:data,
		    headers:{
		        'X_CSRF_TOKEN': token,
		    },
			success: function(result) {
			 $('input').val('');
			 $('textarea').val('');
			 }
		});

	});	
});	