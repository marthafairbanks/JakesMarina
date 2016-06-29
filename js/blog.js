$( document ).ready(function() {
	$.ajax({url: "https://tiyagencyweek.herokuapp.com/blogs",
	    type:"GET",
	    headers:{
            'X_CSRF_TOKEN': token,
        },
	    success: function(result) {
	    	console.log(result);
	    }
	});



});	