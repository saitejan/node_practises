const http = require('http')
const post = JSON.stringify({ lang: 'node' })

const options = {
  hostname: 'mockbin.com',
  port: 80,
  path: '/request?sai=teja',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(post)
  }
}

const req = http.request(options, (res) => {
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`)
  })
  res.on('end', () => {
    console.log('No more data in response.')
  })
})

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`)
})

req.write(post)
req.end()