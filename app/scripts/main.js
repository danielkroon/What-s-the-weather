var unit = 'metric'

function conversion() {
  var checkbox = document.getElementById('checkbox').checked
  if (checkbox == true) {
    unit = 'imperial'
    model.getLocation(unit)

    var x = document.querySelector('#deg')
    x.innerHTML = '&deg;F'
  } else {
    unit = 'metric'
    model.getLocation(unit)

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
  getWeather: function(latitude, longitude, unit) {
    var keyWeather = 'c77539be6727a262645abebe5edee96c'
    var weather =
      'http://api.openweathermap.org/data/2.5/weather?lat=' +
      latitude +
      '&lon=' +
      longitude +
      '&APPID=' +
      keyWeather +
      '&units=' +
      unit

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
  getForecast: function(latitude, longitude, unit) {
    var keyForecast = '36b9b3713724a3a85221616772b7af78'
    var forecast =
      'http://api.openweathermap.org/data/2.5/forecast/daily?lat=' +
      latitude +
      '&lon=' +
      longitude +
      '&APPID=' +
      keyForecast +
      '&units=' +
      unit +
      '&cnt=5'

    $.ajax({
      url: forecast,
      dataType: 'jsonp',
      success: function(data) {
        // count number of times the next loop will run
        var counter = 0

        if (counter >= 5) {
          debugger
          var x = document.querySelector('.forecast-container')
          while (x.firsChild) {
            x.removeChild(x.firstChild)
          }
          x.remove()
        }

        var forecastContainer = document.createElement('div')
        forecastContainer.className = 'pure-g is-center forecast-container'

        // loop over list array. Each array item is one day.
        data.list.forEach(function(index) {
          // update the counter
          counter++

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
    var icon = document.getElementById('icon-img')
    var iconID = data.weather[0].icon

    switch (iconID) {
      case '01d' || '01n':
        icon.src = '../images/clear.svg'
        break
      case '02d' || '02n':
        icon.src = '../images/mostlysunny.svg'
        break
      case '03d' || '03n':
        icon.src = '../images/partlysunny.svg'
        break
      case '04d' || '04n':
        icon.src = '../images/cloudy.svg'
        break
      case '09d' || '09n':
        icon.src = '../images/rain.svg'
        break
      case '10d' || '10n':
        icon.src = '../images/chancerain.svg'
        break
      case '11d' || '11n':
        icon.src = '../images/tstorms.svg'
        break
      case '13d' || '13n':
        icon.src = '../images/chancesnow.svg'
        break
      case '50d' || '50n':
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
}

// call function when document is loaded
document.onload = model.getLocation()
