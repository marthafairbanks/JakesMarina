$( document ).ready(function() {


	$.ajax({url: "https://tiyagencyweek.herokuapp.com/blogs",
	    type:"GET",
	    headers:{
            'X_CSRF_TOKEN': 'M44ASR0FL0PJH3OLJ5RC',
        },
	    success: function(results) {
	    	var blogArray = results.blogs;
	    	var blogArray = blogArray.reverse();
	    	console.log(blogArray);

	    	function writeBlog(){
   				blogArray.forEach(function(results) {

	   				var date = moment(results.posted).format('MMMM DD, YYYY');	
		   				if (results.user === 'M44ASR0FL0PJH3OLJ5RC') {
		   					var author = "Jake";

		   					$(".blog").append('<article><h3 class = "title">' + results.title + 
		   						'</h3><span>Published by: ' + author + ' on ' + date + '</span><p>' + 
		   						results.description + '</p></article>');
		   				}
		   				else {
		   					var author = "Jake's Marina Staff";
		   					
							$(".blog").append('<article><h3 class = "title">' + results.title + '</h3>Published by: ' + author + 
							' on ' + date + '<p>' + results.description + '</p></article>');
						}					
					}
   			
   			);}
   			
   			writeBlog();

	    }



	});


});	