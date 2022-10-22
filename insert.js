const dbConnect = require('./mongodb');

const insert = async () => {
    console.log("Insert function")

    const db = await dbConnect();
    const result = await db.insertOne(
        {
            name: "Oppo v7",
            brand: "Oppo",
            price: 13000,
            category: 'mobile'

        }

        //To insert multiple data use array outside of the object

        // const resulat = await db.insertMany(
        // [
        //     {data 1},
        //     {data 2},
        //     {data 3}.
        // ]
        // )
    )
    if (result.acknowledged) {
        console.log("data inserted")
    }

}
insert()