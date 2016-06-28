$( document ).ready(function() {

	$.ajax({
  	url: ' https://tiyagencyweek.herokuapp.com/boats',
  	type:"GET",
  	success: function (results) {
  		var marina = results.boats;

	marina.forEach(function(marinaInfo){
  		var boatName = marinaInfo.name;
 		var boatPic = marinaInfo.picture;

  		$('.bxslider').append('<li><img class="sliderPics" src='+boatPic+' title="'+boatName+'"/></li>');
 		
		$('#thumbnail').append('<a data-slide-index="0" href=""><img class="thumbnailPic" src='+boatPic+'></a>');
		});
 	$('.bxslider').bxSlider({
  		//pagerCustom: '#thumbnail',
  		mode: 'fade',
  		//captions: true
	});

 	}
  });

});	