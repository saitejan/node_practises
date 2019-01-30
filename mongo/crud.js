const insertDocuments = (db, callback) => {
    // Get reference to edx-course-docs collection
    var database=db.db('saitejaDB');
    const collection = database.collection('saiC')
    // Insert 3 documents
    collection.insertMany([
        { name: 'Bob' }, { name: 'John' }, { name: 'Peter' } // 3 documents
    ], (error, result) => {
        if (error) return process.exit(1)
        console.log(result.result.n) // will be 3
        console.log(result.ops.length) // will be 3
        console.log('Inserted 3 documents into the saiC collection')
        callback(result)
    })
}

const updateDocument = (db, callback) => {
    // Get the saiC collection
    var database=db.db('saitejaDB');
    var collection = database.collection('saiC')
    // Update document where a is 2, set b equal to 1
    const name = 'Peter'
    collection.updateOne({ name: name }, { $set: { grade: 'A' } }, (error, result) => {
        if (error) return process.exit(1)
        console.log(result.result.n) // will be 1
        console.log(`Updated the student document where name = ${name}`)
        callback(result)
    })
}


const removeDocument = (db, callback) => {
    // Get the documents collection
    var database=db.db('saitejaDB');    
    const collection = database.collection('saiC')
    // Insert some documents
    const name = 'Bob'
    collection.deleteOne({ name: name }, (error, result) => {
        if (error) return process.exit(1)
        console.log(result.result.n) // will be 1
        console.log(`Removed the document where name = ${name}`)
        callback(result)
    })
}

var findDocuments = (db, callback) => {
    // Get the documents collection
    var database=db.db('saitejaDB');
    var collection = database.collection('saiC')
    // Find some documents
    collection.find({}).toArray((error, docs) => {
        if (error) return process.exit(1)
        console.log(2, docs.length) // will be 2 because we removed one document
        console.log(`Found the following documents:`)
        console.dir(docs)
        callback(docs)
    })
}


const MongoClient = require('mongodb').MongoClient

// Connection URL
const url = 'mongodb://localhost:27017/saitejaDB'
// Use connect method to connect to the Server
MongoClient.connect(url, { useNewUrlParser: true }, (error, db) => {
    if (error) return process.exit(1)
    console.log('Connection is okay')
    insertDocuments(db, () => {
        updateDocument(db, () => {
            removeDocument(db, () => {
                findDocuments(db, () => {
                    db.close()
                })
            })
        })
    })
})