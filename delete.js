const dbConnect = require('./mongodb');

const deleteData = async () => {
    // console.log("called")
    let data = await dbConnect();
    // console.log(data) 
    let result = await data.deleteOne({name:'iPhone 14'})
    // let da = await data.find({}).toArray()
    console.log(result)
}
deleteData();