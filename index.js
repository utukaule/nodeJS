const dbConnect = require('./mongodb')
// const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const database = 'e-com'
// const client = new MongoClient(url);

// async function getData() {
//     let result = await client.connect();
//     let db =  result.db(database);
//     let collection = db.collection('products')
//     let responce = await collection.find({}).toArray(); 
//     console.log(responce)
// }

// getData();

// const {MongoClient} = require('mongodb');
// const url = "mongodb://localhost:27017";
// const database = 'e-com'
// const client = new MongoClient(url);

// async function getData(){
//     let result = await client.connect();
//     let db = result.db(database);
//     let collection = db.collection('products');
//     let data = await collection.find({}).toArray();
//     console.log(data);
// }
// getData();




// How to handle promises

//1

// dbConnect().then((res) => {
//     res.find({name:'iPhone 14'}).toArray().then((data) => {
//         console.log(data);
//     })
// });
// console.log(dbConnect());

//OR

//2

const main = async () => {
    console.log("main function called");
    let data = await dbConnect()
    data = await data.find({}).toArray();
    console.log(data)
}
main();