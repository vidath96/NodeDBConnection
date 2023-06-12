const mongodb = require('mongodb')
// const mongoClient = mongodb.mongoClient
// const mongoUrl = 'mongodb://localhost:27017/test'
const { MongoClient } = mongodb;
const mongoUrl = 'mongodb://localhost:27017';

const con = MongoClient.connect(mongoUrl,(error,databaseConn) => {
    if(error){
        console.log('Error occured while connecting to mongo db...!',error)
        return
    }
    const db = databaseConn.db('student')
    // db.collection('New').find({}).toArray((queryError,queryResults) => {
    //     console.log(queryResults)
    // })
    // databaseConn.close()
    return db
})

module.exports = {
    query: (queryText,params,callback) => {
        return con.collection(equeryText,params,callback)
    }
}