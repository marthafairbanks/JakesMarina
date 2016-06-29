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

		console.log(data);

		var token = JSON.parse(localStorage.token);
		token = token.token,

		$.ajax({url: "https://tiyagencyweek.herokuapp.com/blogs/create",
	        type:"POST",
	        data:data,
	       	headers:{
                'X_CSRF_TOKEN': token,
            },
	        success: function(result) {
	        	console.log(result);
	    	}
		});

	});

});	