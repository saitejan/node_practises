var work = require('./job')
var Work = new work()

Work.on('done', function (date) {
  console.log('Weekly email job was completed at',
    date.completedOn)
})

Work.emit('start')
