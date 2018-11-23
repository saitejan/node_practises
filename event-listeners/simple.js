const event = require('events')

class Event extends event {
}

let events = new Event()

events.on('time', function (time) {
  console.log('present time is', time)
})

events.emit('time', new Date())

events.removeAllListeners()

// sample output : present time is 2018-11-23T13:41:14.290Z
