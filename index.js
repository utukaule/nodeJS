//read data
const dbConnect = require('./mongodb');

const readData = async () =>{
    let data = await dbConnect();
    data = await data.find({}).toArray()
    console.log(data);
}
readData();