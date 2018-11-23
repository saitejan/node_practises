const http = require("http")
const port = 4000

http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'})
    res.end('hi , hello guys \n')
})
.listen(port)

console.log(`server is listening on ${port}`)