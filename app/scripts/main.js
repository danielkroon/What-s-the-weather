var model = {
	getLocation: function() {
		// create geo object to store lat long info in.
		var geo = {};

		// set options of api call
		var options = {
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: 0
		};

		/// run if gelocation.getCurrentPosition is unsuccesfull.
		function error() {
			alert("We couldn't find you!");
		};

		// run if gelocation.getCurrentPosition is succesfull.
		function succes(position) {
			geo.latitude = position.coords.latitude;
			geo.longitude = position.coords.longitude;
			console.log(geo);
			model.getWeather(geo);
		};

		// check if browser supports geolocation
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(succes, error, options);
		} else {
			alert('Geolocation is not supported by your browser');
		};
	},
	getWeather: function(geo) {
		var key = "f41830b4b65758fc5d4738ab592a74bd";
		var weather = "http://api.openweathermap.org/data/2.5/weather?lat=" + geo.latitude + "&lon=" + geo.longitude + "&APPID=" + key + "&units=metric";
		// http://api.openweathermap.org/data/2.5/weather?lat=52.3915898&lon=4.6290824&APPID=f41830b4b65758fc5d4738ab592a74bd

		$.ajax({
			url: weather,
			dataType: "jsonp",
			success: function(data) {
				var city = data.name;
				var tempature = data.main.temp;
				var description = data.weather[0].description;
				view.showWeather(tempature, description, city);
				model.getIcon(data);
			}
		});
	},
	getIcon: function(data) {
		var icon = document.getElementById('icon-img');
		var iconID = data.weather[0].icon;

		if (iconID === '01d') {
			icon.src = '../images/clear.svg';
		} else if (iconID === '09d') {
			icon.src = '../images/flurries.svg';
		} else if (iconID === '10d') {
			icon.src = '../images/chancerain.svg';
		} else if (iconID === '09d') {
			icon.src = '../images/rain.svg';
		} else if (iconID === '13d') {
			icon.src = '../images/snow.svg';
		} else if (iconID === '50d') {
			icon.src = '../images/fog.svg';
		} else if (iconID === '02d') {
			icon.src = '../images/partlycloudy.svg';
		} else if (iconID === '04d') {
			icon.src = '../images/cloudy.svg';
		} else {
			icon.src = '../images/unkown.svg';
		}
	}
};

var view = {
	showWeather: function(tempature, description, city) {
		document.getElementById("tempature").innerHTML = tempature;
		document.getElementById("description").innerHTML = description;
		document.getElementById("city").innerHTML = city;
	}
};

document.onload = model.getLocation();
