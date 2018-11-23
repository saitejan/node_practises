const http = require('https')

const url = 'https://en.wikipedia.org/wiki/Node.js'

http.get(url, (res) => {
  let chunk = 0
  res.on('data', (chunks) => {
    chunk++
    console.log(chunks.toString('utf8'))
  })
  res.on('end', () => {
    console.log(`response ended: ${chunk}`)
  })
}).on('error', (err) => {
  console.error(err.message)
})
