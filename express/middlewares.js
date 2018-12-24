const bodyParser = require('body-parser')
const express = require('express') 
const app = express() ;
var logger = require('morgan')

const profile = {
  username: 'sai',
  email: '[""]',
  url: 'https://sai.io'
}
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(logger('dev'))


app.get('/users', (req, res) => {
  res.send('hello')
})

app.post('/new', (req, res) => {
    console.log(req.body)
    res.send('added')
  })

  app.get('/profile', (req, res)=>{
    res.send(profile)
  })
  app.post('/profile', (req, res) => {
    profile = req.body
    res.sendStatus(201)
  })
  app.put('/profile', (req, res)=>{
    Object.assign(profile, req.body)
    res.sendStatus(204)
  })
  app.delete('/profile', (req, res)=>{
    profile ={}
    res.sendStatus(204)
  })

app.listen(3030)


