$( document ).ready(function() {

	$.ajax({
  	url: ' https://tiyagencyweek.herokuapp.com/boats',
  	type:"GET",
  	success: function (results) {
  		var marina = results.boats;

	marina.forEach(function(marinaInfo){
  	
 		var boatPic = marinaInfo.picture;

  		$('.overview').append('<li><img class="boatImgs" src="'+boatPic+'" /></li>');
		});

        //plug in for slider
  			$("#circleslider3").tinycircleslider({
  			dotsSnap : true,   
    		radius   : 184,   
   			dotsHide : false
  			});
      }

   });   
 //code for latest blog

 $.ajax({
    url: 'https://tiyagencyweek.herokuapp.com/blogs',
    type:"GET",
     headers:{
            'X_CSRF_TOKEN': 'M44ASR0FL0PJH3OLJ5RC',
        },
    success: function (data) {

      var blog = data.blogs;
      var end = blog.length-1;
        console.log(blog);
      var date = moment(blog[end].posted).format('MMMM DD, YYYY');  
      $('.blogBox').append('<article><h3 class="blogTitle">'+blog[end].title+'</h3><h3>Published on '+date+'</h3><p>'+blog[end].description+'</p></article>');
    }

  });

});	