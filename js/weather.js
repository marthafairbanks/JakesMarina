loadWeather('Brookville,IN');




function loadWeather(location) {
	$.simpleWeather({
		location: location,
		unit:'f',
		success: function(weather) {
			city = weather.city;
			temp = weather.temp+'&deg;';
			wcode = '<img class="weathericon" src="images/weathericons/' + weather.code + '.svg">';
			wind = '<p>' + weather.wind.speed + '</p><p>' + weather.units.speed + '</p>';
			humidity = weather.humidity + ' %';

			$(".location").text(city);
			$(".temperature").html(temp);
			$(".climate_bg").html(wcode);
			$(".windspeed").html(wind);
			$(".humidity").text(humidity);
		},
		error: function(error) {
			$(".error").html('<p>' + error + '</p>');
		}
	});
}