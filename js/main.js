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

  			$("#circleslider3").tinycircleslider({
  			dotsSnap : true,   
    		radius   : 184,   
   			dotsHide : false
  			});
      }
  });

});	