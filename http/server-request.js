const http = require('http')
const port = 6000

http.createServer((req, res) => {
  console.log('headers',req.headers)
  console.log('url',req.url)
  console.log('method',req.method)
  console.log('status code',req.statusCode)

  if (req.method == 'POST') {
    let data = ''
    req.on('data', (chunk) => {
      data += chunk
    })
    req.on('end', () => {
      console.log(`body: ${data}`)
      res.end('request received \n')
    })
  } else {
    res.writeHead(200, {'content-type': 'text/plain'})
    res.end('hello guys ! \n')
  }
}).listen(port)

console.log(`server is listening on ${port}`)
