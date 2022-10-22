//Update data
const dbConnect = require('./mongodb')

const updataData = async () => {
    let result = await dbConnect();
    result = await result.updateOne(
        {name:"moto One"},
        {
            $set:{
                price:15000
            }
        }
    ) 
    console.log(result)
}
updataData();