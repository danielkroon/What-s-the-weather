var model = {
  getLocation: function() {
    // create geo object to store lat long info in.
    var geo = {}

    // set options of api call
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }

    // check if browser supports localStorage/sessionStorage
    if (typeof Storage !== 'undefined') {
      if (
        sessionStorage.getItem('latitude') &&
        sessionStorage.getItem('longitude')
      ) {
        var latitude = sessionStorage.getItem('latitude')
        var longitude = sessionStorage.getItem('longitude')

        model.getWeather(latitude, longitude)
        model.getForecast(latitude, longitude)
      } else {
        checkGeoLocation()
      }
    } else {
      checkGeoLocation()
    }

    // get location
    function checkGeoLocation() {
      // check if browser supports geolocation
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(succes, error, options)
      } else {
        alert('Geolocation is not supported by your browser')
      }
    }

    /// run if gelocation.getCurrentPosition is unsuccesfull.
    function error() {
      alert("We couldn't find you!")
    }

    // run if gelocation.getCurrentPosition is succesfull.
    function succes(position) {
      var latitude = position.coords.latitude
      var longitude = position.coords.longitude

      // save latitude & longitude in sessionStorage
      sessionStorage.setItem('latitude', latitude)
      sessionStorage.setItem('longitude', longitude)

      model.getWeather(latitude, longitude)
      model.getForecast(latitude, longitude)
    }
  },
  getWeather: function(latitude, longitude) {
    var keyWeather = 'c77539be6727a262645abebe5edee96c'
    var weather =
      'http://api.openweathermap.org/data/2.5/weather?lat=' +
      latitude +
      '&lon=' +
      longitude +
      '&APPID=' +
      keyWeather +
      '&units=metric'

    $.ajax({
      url: weather,
      dataType: 'jsonp',
      success: function(data) {
        var city = data.name
        var tempature = data.main.temp
        var description = data.weather[0].description
        view.showWeather(tempature, description, city)
        view.getIcon(data)
        view.changeBackground(data)
      }
    })
  },
  getForecast: function(latitude, longitude) {
    var keyForecast = '36b9b3713724a3a85221616772b7af78'
    var forecast =
      'http://api.openweathermap.org/data/2.5/forecast/daily?lat=' +
      latitude +
      '&lon=' +
      longitude +
      '&APPID=' +
      keyForecast +
      '&units=metric&cnt=5'

    $.ajax({
      url: forecast,
      dataType: 'jsonp',
      success: function(data) {
        console.log(data)

        // get child nodes of div
        var getForecastContainer = document.getElementsByClassName(
          'forecast-container'
        )[0].children
        console.log(getForecastContainer)

        // loop over forecast array (list). Assign data to variables and create elements.
        data.list.forEach(function(index) {
          console.log(index)
          var forecastDay = moment.unix(index.dt).format('dddd, DD MMM YYYY')
          var forecastMaxTemp = index.temp.max
          var forecastMinTemp = index.temp.min
          var forecastDescription = index.weather[0].description
          console.log(
            forecastDay +
              forecastDescription +
              forecastMaxTemp +
              forecastMinTemp
          )
        })
      }
    })
  }
}

var view = {
  showWeather: function(tempature, description, city) {
    document.getElementById('tempature').innerHTML = tempature
    document.getElementById('description').innerHTML = description
    document.getElementById('city').innerHTML = city
  },
  showForecast: function(timeForecast, tempatureForecast, descriptionForecast) {
    document.getElementById('tempature-forecast').innerHTML = tempatureForecast
    document.getElementById(
      'description-forecast'
    ).innerHTML = descriptionForecast
    document.getElementById('time-forecast').innerHTML = timeForecast
  },
  getIcon: function(data) {
    var icon = document.getElementById('icon-img')
    var iconID = data.weather[0].icon

    switch (iconID) {
      case '01d':
        icon.src = '../images/clear.svg'
        break
      case '02d':
        icon.src = '../images/mostlysunny.svg'
        break
      case '03d':
        icon.src = '../images/partlysunny.svg'
        break
      case '04d':
        icon.src = '../images/cloudy.svg'
        break
      case '09d':
        icon.src = '../images/rain.svg'
        break
      case '10d':
        icon.src = '../images/chancerain.svg'
        break
      case '11d':
        icon.src = '../images/tstorms.svg'
        break
      case '13d':
        icon.src = '../images/chancesnow.svg'
        break
      case '50d':
        icon.src = '../images/fog.svg'
        break
      default:
        icon.src = '../images/unkown.svg'
    }
  },
  changeBackground: function(data) {
    var body = document.body
    var weatherID = data.weather[0].id

    // convert number to a astring, then extract the first digit
    var one = String(weatherID).charAt(0)
    // convert the first digit back to an integer
    var weatherFirstChart = Number(one)

    switch (weatherFirstChart) {
      case 6:
        body.classList.add('body-snow')
        break
      case 8:
        body.classList.add('body-cloud')
        break
      case 7:
        body.classList.add('body-fog')
        break
      case 2:
        body.classList.add('body-storm')
        break
      case 9:
        body.classList.add('body-extreme')
        break
      case 5:
        body.classList.add('body-rain')
        break
      case 3:
        body.classList.add('body-drizzle')
        break
    }
  }
}

document.onload = model.getLocation()
