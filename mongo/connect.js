const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

// Connection URI
const url = 'mongodb://localhost:27017/edx-course-db'
// Use connect method to connect to the Server
MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
  if (err) return process.exit(1)
  console.log('Kudos. Connected successfully to server')
  // Perform queries
  db.close()
})