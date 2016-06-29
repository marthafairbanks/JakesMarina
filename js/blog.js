$( document ).ready(function() {
	$('input.form-control.blogTitle').focus();
	
	$('form').on("submit",function(event){
		event.preventDefault();

		var title = $(this).find('input.form-control.blogTitle').val();
		var description = $(this).find('input.form-control.blogDescription').val();

		var data = {
			title: title,
			description: description
		};

		console.log(data);

		$.ajax({url: "https://tiyagencyweek.herokuapp.com/blogs/create",
	        type:"POST",
	        data:data,
	        apikey: 'M44ASR0FL0PJH3OLJ5RC',
	        success: function(result) {
	        	alert("I worked...maybe?");
	
	    	}
		});

		$.ajax({url: "https://tiyagencyweek.herokuapp.com/blogs/create",
	        type:"GET",
	        apikey: 'M44ASR0FL0PJH3OLJ5RC',
	        success: function(result) {
	        	console.log(result);
	
	    	}
		});

	});

});	