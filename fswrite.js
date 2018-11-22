const fs = require('fs')

const data = "hello world"
fs.writeFile('message.txt', data, function (error) {
// fs.writeFile('message.txt', 'Hello World!', function (error) {
  if (error) return console.error(error)
  console.log('Writing is done.')
})