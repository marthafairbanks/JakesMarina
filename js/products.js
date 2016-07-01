$( document ).ready(function() {

	$.ajax({
  	url: ' https://tiyagencyweek.herokuapp.com/boats',
  	type:"GET",
  	success: function (results) {
  		var marina = results.boats;

		marina.forEach(function(marinaInfo){
  	var boatName = marinaInfo.name;
 		var boatPic = marinaInfo.picture;
 		var boatPrice = marinaInfo.price;
 		var boatDescription = marinaInfo.description;

  		$('.boatRow').append('<div class="col-xs-6"><div class="boatInfo"><img class="productBoatImg" src="'+boatPic+
        '" /><div class="boatPrice">$'+boatPrice+'</div><div class="boatName">'+boatName+
        '</div><div class="boatDescrip">'+boatDescription+'</div></div></div></div>');
		});

  		}
  	});	
});	