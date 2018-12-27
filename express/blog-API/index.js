const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')

const routes = require('./routes')

let app = express()
app.use(bodyParser.json())
app.use(logger('dev'))

let store = {
    posts: [
      {name: 'Sai Teja',
      url: 'https://github.com/saitejan',
      text: 'This repository will give you a quick introduction to nodejs',
      comments: [
       'Cruel…..var { house, mouse} = No type optimization at all',
       'I think you’re undervaluing the benefit of ‘let’ and ‘const’.',
       '(p1,p2)=>{ … } ,i understand this ,thank you !'      
      ]
      }
    ]
  }


  app.use((req, res, next) => {
    req.store = store
    next()
  })
  
  app.get('/posts', routes.posts.getPosts)
  app.post('/posts', routes.posts.addPost)
  app.put('/posts/:postId', routes.posts.updatePost)
  app.delete('/posts/:postId', routes.posts.removePost)
  
  app.get('/posts/:postId/comments', routes.comments.getComments)
  app.post('/posts/:postId/comments', routes.comments.addComment)
  app.put('/posts/:postId/comments/:commentId', routes.comments.updateComment)
  app.delete('/posts/:postId/comments/:commentId', routes.comments.removeComment)




app.listen(4000, function () {
    console.log('server is listening on port 4000');
})