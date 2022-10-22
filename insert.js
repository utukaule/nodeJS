//Insert data

const dbConnect = require('./mongodb');

const insert = async () => {
    const db = await dbConnect();
    const result = await db.insertOne(
        {
            name:"nothing 1",
            brand:"nothing",
            price:32000,
            category:"mobile"
        }
        )
        if(result.acknowledged){
            console.log("data inserted successfully")
        }
}
insert();