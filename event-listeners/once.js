const event = require('events')

class Event extends event {
}

let events = new Event()

// emitter.once(eventName, eventHandler) will execute observer code just once
// no matter how many time this particular event was triggered
events.once('time', function (time) {
  console.log('present time is', time)
})

events.emit('time', new Date())
events.emit('time', new Date())

// sample output : present time is 2018-11-23T13:41:14.290Z
