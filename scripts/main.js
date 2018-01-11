'use strict'
function conversion() {
  if (1 == document.getElementById('checkbox').checked) {
    ;(unit = 'imperial'),
      getCityFlag ? model.getCity(unit) : model.getLocation(unit)
    var e = document.querySelector('#deg')
    e.innerHTML = '&deg;F'
  } else {
    ;(unit = 'metric'),
      getCityFlag ? model.getCity(unit) : model.getLocation(unit)
    var e = document.querySelector('#deg')
    e.innerHTML = '&deg;C'
  }
}
function displayTime() {
  var e = new Date(),
    t = e.getHours(),
    a = e.getMinutes(),
    n = e.getDate(),
    o = e.getMonth(),
    r = e.getFullYear()
  a < 10 && (a = '0' + a)
  var c = 'AM'
  t > 12 && ((t -= 12), (c = 'PM')), 0 === t && (t = 12)
  var s = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'July',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    i = document.getElementById('clock'),
    d = document.getElementById('minutes'),
    m = document.getElementById('calender')
  ;(i.innerHTML = t),
    (d.innerHTML = a + ' ' + c),
    (m.innerHTML = s[o] + ' ' + n + ' ' + r)
}
var unit = 'metric',
  preLoaderFlag = !1,
  getCityFlag = !1,
  model = {
    getLocation: function() {
      function e() {
        navigator.geolocation
          ? navigator.geolocation.getCurrentPosition(a, t, n)
          : alert('Geolocation is not supported by your browser')
      }
      function t() {
        alert("We couldn't find you!")
      }
      function a(e) {
        var t = e.coords.latitude,
          a = e.coords.longitude
        sessionStorage.setItem('latitude', t),
          sessionStorage.setItem('longitude', a),
          model.getWeather(t, a, unit),
          model.getForecast(t, a, unit)
      }
      var n = { enableHighAccuracy: !0, timeout: 5e3, maximumAge: 0 }
      if ('undefined' != typeof Storage)
        if (
          sessionStorage.getItem('latitude') &&
          sessionStorage.getItem('longitude')
        ) {
          var o = sessionStorage.getItem('latitude'),
            r = sessionStorage.getItem('longitude')
          model.getWeather(o, r, unit), model.getForecast(o, r, unit)
        } else e()
      else e()
    },
    getCity: function(e) {
      var t = document.getElementById('location'),
        a = t.value
      model.getWeatherByCity(a, e),
        model.getForecastByCity(a, e),
        (getCityFlag = !0)
    },
    getWeatherByCity: function(e) {
      var t =
        'https://api.openweathermap.org/data/2.5/weather?q=' +
        e +
        '&APPID=c77539be6727a262645abebe5edee96c&units=' +
        unit
      model.getWeatherAjaxCall(t)
    },
    getWeather: function(e, t, a) {
      var n =
        'https://api.openweathermap.org/data/2.5/weather?lat=' +
        e +
        '&lon=' +
        t +
        '&APPID=c77539be6727a262645abebe5edee96c&units=' +
        a
      model.getWeatherAjaxCall(n)
    },
    getWeatherAjaxCall: function(e) {
      $.ajax({
        url: e,
        dataType: 'jsonp',
        success: function(e) {
          var t = e.name,
            a = e.main.temp,
            n = e.weather[0].description
          view.showWeather(a, n, t), view.getIcon(e), view.changeBackground(e)
        }
      })
    },
    getForecastByCity: function(e) {
      var t =
        'https://api.openweathermap.org/data/2.5/forecast/daily?q=' +
        e +
        '&APPID=36b9b3713724a3a85221616772b7af78&units=' +
        unit +
        '&cnt=5'
      model.getForecastAjaxCall(t)
    },
    getForecast: function(e, t, a) {
      var n =
        'https://api.openweathermap.org/data/2.5/forecast/daily?lat=' +
        e +
        '&lon=' +
        t +
        '&APPID=36b9b3713724a3a85221616772b7af78&units=' +
        a +
        '&cnt=5'
      model.getForecastAjaxCall(n)
    },
    getForecastAjaxCall: function(e) {
      $.ajax({
        url: e,
        dataType: 'jsonp',
        success: function(e) {
          if (!document.querySelector('.forecast-container')) {
            var t = document.createElement('div')
            t.className = 'pure-g is-center forecast-container'
          }
          e.list.forEach(function(e, a) {
            if (document.querySelector('#tempatureSpan' + a)) {
              var n = document.querySelector('#tempatureSpan' + a),
                o = e.temp.max,
                r = e.temp.min
              return void (n.innerHTML =
                'metric' === unit
                  ? o + ' &deg;C / ' + r + ' &deg;C'
                  : o + ' &deg;F / ' + r + ' &deg;F')
            }
            var c = document.getElementById('sectionForecast'),
              s = document.createElement('div'),
              i = document.createElement('span'),
              n = document.createElement('span'),
              d = document.createElement('span')
            ;(s.className = 'pure-u-1 pure-u-md-4-24 day'),
              (i.className = 'date-forecast forecast--span'),
              (n.className = 'tempature-forecast forecast--span'),
              (d.className = 'description-forecast forecast--span'),
              (n.id = 'tempatureSpan' + a)
            var m = moment.unix(e.dt).format('dddd, DD MMM'),
              o = e.temp.max,
              r = e.temp.min,
              l = e.weather[0].description
            ;(i.innerHTML = m),
              (n.innerHTML = o + ' &deg;C / ' + r + ' &deg;C'),
              (d.innerHTML = l),
              s.appendChild(i),
              s.appendChild(n),
              s.appendChild(d),
              t.appendChild(s),
              c.appendChild(t)
          })
        }
      })
    }
  },
  view = {
    showWeather: function(e, t, a) {
      ;(document.getElementById('tempature').innerHTML = e),
        (document.getElementById('description').innerHTML = t),
        (document.getElementById('city').innerHTML = a)
    },
    showForecast: function(e, t, a) {
      ;(document.getElementById('tempature-forecast').innerHTML = t),
        (document.getElementById('description-forecast').innerHTML = a),
        (document.getElementById('time-forecast').innerHTML = e)
    },
    getIcon: function(e) {
      var t = e.weather[0].icon,
        a = document.getElementById('icon-img')
      switch (((new Image().onload = function() {
        a.src = this.src
      }),
      t)) {
        case '01d':
        case '01n':
          a.src = 'images/clear.svg'
          break
        case '02d':
        case '02n':
          a.src = 'images/mostlysunny.svg'
          break
        case '03d':
        case '03n':
          a.src = 'images/partlysunny.svg'
          break
        case '04d':
        case '04n':
          a.src = 'images/cloudy.svg'
          break
        case '09d':
        case '09n':
          a.src = 'images/rain.svg'
          break
        case '10d':
        case '10n':
          a.src = 'images/chancerain.svg'
          break
        case '11d':
        case '11n':
          a.src = 'images/tstorms.svg'
          break
        case '13d':
        case '13n':
          a.src = 'images/chancesnow.svg'
          break
        case '50d':
        case '50n':
          a.src = 'images/fog.svg'
          break
        default:
          a.src = 'images/unknown.svg'
      }
    },
    changeBackground: function(e) {
      var t = document.body,
        a = e.weather[0].id,
        n = String(a).charAt(0)
      switch (Number(n)) {
        case 6:
          t.classList.add('body-snow')
          break
        case 8:
          t.classList.add('body-cloud')
          break
        case 7:
          t.classList.add('body-fog')
          break
        case 2:
          t.classList.add('body-storm')
          break
        case 9:
          t.classList.add('body-extreme')
          break
        case 5:
          t.classList.add('body-rain')
          break
        case 3:
          t.classList.add('body-drizzle')
      }
      view.removePreloader()
    },
    removePreloader: function() {
      if (!preLoaderFlag) {
        var e = document.getElementById('loader')
        setTimeout(function() {
          e.className = 'fadeout'
        }, 2e3),
          setTimeout(function() {
            e.remove()
          }, 4e3)
      }
      preLoaderFlag = !0
    }
  }
document.getElementById('location').addEventListener('keypress', function(e) {
  13 === (e.which || e.keyCode) && model.getCity()
}),
  (document.onload = model.getLocation()),
  (document.onload = displayTime()),
  setInterval(displayTime, 1e3)
