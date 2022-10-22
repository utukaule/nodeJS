const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'e-com';
const client = new MongoClient(url);


async function dbConnect(){
    const result = await client.connect();
    let db = result.db(database);
    return db.collection('products');
    // let data = await collection.find({}).toArray();
    // console.log(data)
}

module.exports = dbConnect;