const https = require('https')
const fs = require('fs')
const url = 'https://jsonplaceholder.typicode.com/users'
https.get(url, (response) => {
  let json = ''
  let count = 0;
  response.on('data', (chunk) => { 
    json += chunk 
    ++count;
  })
  response.on('end', () => {
    try {
      const parsed = JSON.parse(json)
     
     // writing into the file will be done asynchronously
      fs.writeFile('data.json', json, (err) => {
          if(err) return console.log(err)
          console.log('writing is done');
      })
      
      console.log(parsed, count)
    } catch (e) {
      console.error(e.message)
    }
  })
}).on('error', (err) => {
  console.error(`Got error: ${err.message}`)
})