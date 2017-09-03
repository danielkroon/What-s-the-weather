// variable to keep track what unit is displayed to the user.
var unit = 'metric'

// flag variable to keep track how many times the removePreloader() is called.
var preLoaderFlag = false
var getCityFlag = false

function conversion() {
  var checkbox = document.getElementById('checkbox').checked
  if (checkbox == true) {
    unit = 'imperial'

    if (getCityFlag) {
      model.getCity(unit)
    } else {
      model.getLocation(unit)
    }

    var x = document.querySelector('#deg')
    x.innerHTML = '&deg;F'
  } else {
    unit = 'metric'

    if (getCityFlag) {
      model.getCity(unit)
    } else {
      model.getLocation(unit)
    }

    var x = document.querySelector('#deg')
    x.innerHTML = '&deg;C'
  }
}

var model = {
  getLocation: function() {
    // create geo object to store lat long info in.
    var geo = {}

    // set options of api call.
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }

    // check if browser supports localStorage/sessionStorage.
    if (typeof Storage !== 'undefined') {
      if (
        sessionStorage.getItem('latitude') &&
        sessionStorage.getItem('longitude')
      ) {
        var latitude = sessionStorage.getItem('latitude')
        var longitude = sessionStorage.getItem('longitude')

        model.getWeather(latitude, longitude, unit)
        model.getForecast(latitude, longitude, unit)
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

      model.getWeather(latitude, longitude, unit)
      model.getForecast(latitude, longitude, unit)
    }
  },
  getCity: function(unit) {
    var cityInput = document.getElementById('location')
    var cityInputValue = cityInput.value
    console.log(cityInputValue)
    model.getWeatherByCity(cityInputValue, unit)
    model.getForecastByCity(cityInputValue, unit)

    getCityFlag = true
  },
  getWeatherByCity: function(cityInputValue) {
    var keyWeather = 'c77539be6727a262645abebe5edee96c'
    var weather =
      'https://api.openweathermap.org/data/2.5/weather?q=' +
      cityInputValue +
      '&APPID=' +
      keyWeather +
      '&units=' +
      unit

    model.getWeatherAjaxCall(weather)
  },
  getWeather: function(latitude, longitude, unit) {
    var keyWeather = 'c77539be6727a262645abebe5edee96c'
    var weather =
      'https://api.openweathermap.org/data/2.5/weather?lat=' +
      latitude +
      '&lon=' +
      longitude +
      '&APPID=' +
      keyWeather +
      '&units=' +
      unit

    model.getWeatherAjaxCall(weather)
  },
  getWeatherAjaxCall: function(weather) {
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
  getForecastByCity: function(cityInputValue) {
    var keyForecast = '36b9b3713724a3a85221616772b7af78'
    var forecast =
      'https://api.openweathermap.org/data/2.5/forecast/daily?q=' +
      cityInputValue +
      '&APPID=' +
      keyForecast +
      '&units=' +
      unit +
      '&cnt=5'

    model.getForecastAjaxCall(forecast)
  },
  getForecast: function(latitude, longitude, unit) {
    var keyForecast = '36b9b3713724a3a85221616772b7af78'
    var forecast =
      'https://api.openweathermap.org/data/2.5/forecast/daily?lat=' +
      latitude +
      '&lon=' +
      longitude +
      '&APPID=' +
      keyForecast +
      '&units=' +
      unit +
      '&cnt=5'

    model.getForecastAjaxCall(forecast)
  },
  getForecastAjaxCall: function(forecast) {
    $.ajax({
      url: forecast,
      dataType: 'jsonp',
      success: function(data) {
        if (!document.querySelector('.forecast-container')) {
          var forecastContainer = document.createElement('div')
          forecastContainer.className = 'pure-g is-center forecast-container'
        }

        // loop over list array. Each array item is one day.
        data.list.forEach(function(index, i) {
          if (document.querySelector('#tempatureSpan' + i)) {
            var tempatureSpan = document.querySelector('#tempatureSpan' + i)
            var forecastMaxTemp = index.temp.max
            var forecastMinTemp = index.temp.min

            if (unit === 'metric') {
              tempatureSpan.innerHTML =
                forecastMaxTemp +
                ' &deg;C' +
                ' / ' +
                forecastMinTemp +
                ' &deg;C'
            } else {
              tempatureSpan.innerHTML =
                forecastMaxTemp +
                ' &deg;F' +
                ' / ' +
                forecastMinTemp +
                ' &deg;F'
            }
            return
          }

          // assign forecast data of the day to variables.
          var sectionForecast = document.getElementById('sectionForecast')
          var container = document.createElement('div')
          var dateSpan = document.createElement('span')
          var tempatureSpan = document.createElement('span')
          var descriptionSpan = document.createElement('span')

          container.className = 'pure-u-1 pure-u-md-4-24 day'
          dateSpan.className = 'date-forecast forecast--span'
          tempatureSpan.className = 'tempature-forecast forecast--span'
          descriptionSpan.className = 'description-forecast forecast--span'

          // assign id to tempature span so we can update its data.
          tempatureSpan.id = 'tempatureSpan' + i

          var forecastDay = moment.unix(index.dt).format('dddd, DD MMM')
          var forecastMaxTemp = index.temp.max
          var forecastMinTemp = index.temp.min
          var forecastDescription = index.weather[0].description

          dateSpan.innerHTML = forecastDay
          tempatureSpan.innerHTML =
            forecastMaxTemp + ' &deg;C' + ' / ' + forecastMinTemp + ' &deg;C'
          descriptionSpan.innerHTML = forecastDescription

          container.appendChild(dateSpan)
          container.appendChild(tempatureSpan)
          container.appendChild(descriptionSpan)

          forecastContainer.appendChild(container)
          sectionForecast.appendChild(forecastContainer)
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
    var iconID = data.weather[0].icon

    // asynchronous image loading
    var icon = document.getElementById('icon-img')
    var downloadingImage = new Image()
    downloadingImage.onload = function() {
      icon.src = this.src
    }

    switch (iconID) {
      case '01d':
      case '01n':
        icon.src = '../images/clear.svg'
        break
      case '02d':
      case '02n':
        icon.src = '../images/mostlysunny.svg'
        break
      case '03d':
      case '03n':
        icon.src = '../images/partlysunny.svg'
        break
      case '04d':
      case '04n':
        icon.src = '../images/cloudy.svg'
        break
      case '09d':
      case '09n':
        icon.src = '../images/rain.svg'
        break
      case '10d':
      case '10n':
        icon.src = '../images/chancerain.svg'
        break
      case '11d':
      case '11n':
        icon.src = '../images/tstorms.svg'
        break
      case '13d':
      case '13n':
        icon.src = '../images/chancesnow.svg'
        break
      case '50d':
      case '50n':
        icon.src = '../images/fog.svg'
        break
      default:
        icon.src = '../images/unknown.svg'
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
    // call function to remove preloader
    view.removePreloader()
  },
  removePreloader: function() {
    if (!preLoaderFlag) {
      var loader = document.getElementById('loader')

      // wait to make sure all data is loaded into page
      setTimeout(function() {
        loader.className = 'fadeout'
      }, 2000)

      // wait until fadeout of preloader is done
      setTimeout(function() {
        loader.remove()
      }, 4000)
    }
    preLoaderFlag = true
  }
}

// eventlistener Enter Key city input
document.getElementById('location').addEventListener('keypress', function(e) {
  var key = e.which || e.keyCode
  if (key === 13) {
    model.getCity()
  }
})

// call function when document is loaded
document.onload = model.getLocation()
