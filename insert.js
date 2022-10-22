//Insert data
const dbConnect = require('./mongodb');

const insertData = async () => {
    const data = await dbConnect();
    const result = await data.insertOne(
        {
            name:"moto One",
            brand:"motorola",
            price:7500,
            category: "mobile"
        }
    )
    if(result.acknowledged){
        console.log("Data is received by server");
    }
}
insertData();
