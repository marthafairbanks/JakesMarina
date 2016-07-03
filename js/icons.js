loadWeather('Brookville,IN');


function loadWeather(location) {
	$.simpleWeather({
		location: location,
		unit:'f',
		success: function(weather) {
			temp = weather.temp+'&deg;';
			wcode = '<img class="weathericon" src="images/weathericons/' + weather.code + '.svg">';
			wind = '<p>' + weather.wind.speed + '</p><p>' + weather.units.speed + '</p>';
			humidity = weather.humidity + ' %';

		
			$(".tempIcon").html(temp);
			$(".weatherImg").html(wcode);
		
		},
		error: function(error) {
			$(".error").html('<p>' + error + '</p>');
		}
	});
}