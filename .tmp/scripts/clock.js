'use strict'

function displayTime() {
  var currentTime = new Date()
  var hours = currentTime.getHours()
  var minutes = currentTime.getMinutes()
  var date = currentTime.getDate()
  var month = currentTime.getMonth()
  var year = currentTime.getFullYear()

  // adding zero's
  if (minutes < 10) {
    minutes = '0' + minutes
  }

  // create 12-hour format meridiem
  var meridiem = 'AM'

  if (hours > 12) {
    hours = hours - 12
    meridiem = 'PM'
  }

  if (hours === 0) {
    hours = 12
  }

  // create array with months
  var monthsArray = [
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
  ]

  // grab the clock div
  var hoursDiv = document.getElementById('clock')
  var minutesDiv = document.getElementById('minutes')

  // grab the calender div
  var calenderDiv = document.getElementById('calender')

  // set the text inside the clock div
  hoursDiv.innerHTML = hours
  minutesDiv.innerHTML = minutes + ' ' + meridiem

  // set the calender inside the calender div
  calenderDiv.innerHTML = monthsArray[month] + ' ' + date + ' ' + year
}

document.onload = displayTime()

// set interval to update clock
setInterval(displayTime, 1000)
