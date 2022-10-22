//Read data

const dbConnect = require('./mongodb');

const main = async () => {
    console.log("main is called")
    let data = await dbConnect();
    data = await data.find({}).toArray();
    console.log(data);
}
main();