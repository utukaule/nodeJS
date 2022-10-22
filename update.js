const dbConnect = require('./mongodb');

const updateData = async () => {
    let data = await dbConnect();
    let result = await data.updateOne(
        {
            name: "nothing 1"
        },
        {
            $set: {
                name: "nothing One"
            }
        }
    )
    console.log(result)
}
updateData()