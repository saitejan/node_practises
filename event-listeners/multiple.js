const event = require('events')

class Event extends event {
}

let events = new Event()

events.on('greet', function (time) {
  console.log('hi !')
})

events.on('greet', function (time) {
  console.log('how are you')
})

// this will emit both listeners in a sequence 
events.emit('greet')

// this will remove both listeners
events.removeAllListeners()

// there are no listeners to emit
events.emit('greet')

// sample output :
// hi !
// how are you
