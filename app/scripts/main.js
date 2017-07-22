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
		var key = 'f41830b4b65758fc5d4738ab592a74bd';
		var weather = 'http://api.openweathermap.org/data/2.5/weather?lat=' + geo.latitude + '&lon=' + geo.longitude + '&APPID=' + key + '&units=metric';
		// http://api.openweathermap.org/data/2.5/weather?lat=52.3915898&lon=4.6290824&APPID=f41830b4b65758fc5d4738ab592a74bd

		$.ajax({
			url: weather,
			dataType: 'jsonp',
			success: function(data) {
				var city = data.name;
				var tempature = data.main.temp;
				var description = data.weather[0].description;
				view.showWeather(tempature, description, city);
				view.getIcon(data);
				view.changeBackground(data);
			}
		});
	}
};

var view = {
	showWeather: function(tempature, description, city) {
		document.getElementById('tempature').innerHTML = tempature;
		document.getElementById('description').innerHTML = description;
		document.getElementById('city').innerHTML = city;
	},
	getIcon: function(data) {
		var icon = document.getElementById('icon-img');
		var iconID = data.weather[0].icon;

		switch (iconID) {
			case '01d':
				icon.src = '../images/clear.svg';
				break;
			case '02d':
				icon.src = '../images/mostlysunny.svg';
				break;
			case '03d':
				icon.src = '../images/partlysunny.svg';
				break;
			case '04d':
				icon.src = '../images/cloudy.svg';
				break;
			case '09d':
				icon.src = '../images/rain.svg';
				break;
			case '10d':
				icon.src = '../images/chancerain.svg';
				break;
			case '11d':
				icon.src = '../images/tstorms.svg';
				break;
			case '13d':
				icon.src = '../images/chancesnow.svg';
				break;
			case '50d':
				icon.src = '../images/fog.svg';
				break;
			default:
				icon.src = '../images/unkown.svg';
		}
	},
  changeBackground: function(data) {
    var body = document.getElementsByTagName('body');
	var weatherID = data.weather[0].id;

	// convert number to a astring, then extract the first digit
	var one = String(weatherID).charAt(0);
	// convert the first digit back to an integer
	var weatherFirstChart = Number(one);

    switch (weatherFirstChart) {
      case 5:
	  console.log('im working bitch');
        break;
      default:
    }
  }
};

document.onload = model.getLocation();
