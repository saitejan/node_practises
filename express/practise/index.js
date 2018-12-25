const express = require('express')
const app = express();

var profile = {
    username: 'sai',
    email: '[""]',
    url: 'https://sai.io'
  }

var bodyParser = require('body-parser'),
    // requireDir = require('require-dir'),
    path = require('path');

app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'client')));
// var allowCrossDomain = function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
// 	res.setHeader('Content-Type', 'application/json');
// 	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
// 	res.header('Access-Control-Allow-Headers', 'Content-Type,x-username,x-token');
// 	next();
// };

// app.use(allowCrossDomain);


app.get('/', function (req, res) {
   res.sendfile( __dirname + '/client/index.html');
})

app.post('/new', (req, res) => {
    console.log(req.body)
    res.send('added')
  })

  app.get('/profile', (req, res)=>{
    //   console.log(req, res)
    res.send(profile)
  })
  app.post('/profile', (req, res) => {
    profile = req.body
    console.log('pf', req.body)
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

app.listen(4000, function(){
    console.log('server is listening on port 4000');
})
module.exports = app;	