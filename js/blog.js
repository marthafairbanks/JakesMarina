$( document ).ready(function() {

	var token = JSON.parse(localStorage.token);
		token = token.token,

	$.ajax({url: "https://tiyagencyweek.herokuapp.com/blogs",
	    type:"GET",
	    headers:{
            'X_CSRF_TOKEN': token,
        },
	    success: function(results) {
	    	var blogArray = results.blogs;
	    	console.log(blogArray);

	    	function writeBlog(){
   				blogArray.forEach(function(results) {
			
				$(".rowBlog").append('<article><h3>' + results.title + '</h3><p>' + results.description +
					'</p></article>');
			
				}
   			
   			);}
   			
   			writeBlog();

	    }



	});


});	