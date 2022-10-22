//Read data
const dbConnnect = require('./mongodb');
// const {MongoClient} = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const database = 'e-com';
// const client = new MongoClient(url);

// async function dbConnnect(){
//     const result = await client.connect();
//     const db = result.db(database);
//     const collection = db.collection('products');
//     const data = await collection.find({}).toArray();
//     console.log(data);
// }
// dbConnnect();

const main = async () => {
    let data = await dbConnnect();
    data = await data.find().toArray()
    console.log(data);
}

main();