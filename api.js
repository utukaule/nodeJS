const express = require("express");
const dbConnect = require('./mongodb');
const mongoDb = require('mongodb');
const app = express();

//get data
app.get('/', async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    res.send(data);
})

app.use(express.json());

//post data
app.post('/', async (req, res) => {
    let data = await dbConnect();
    let result = await data.insertOne(req.body);
    res.send(result);
    // console.log(result);
    // console.log(req.body)
})

// Update using put method
app.put('/:name', async (req, res) => {
    let data = await dbConnect();
    // console.log(req.body)
    let result = await data.updateOne(
        { name: req.params.name },
        {
            $set:
                req.body
        }
    )
    res.send({ result: "updated" })

})

//  Delete Data

app.delete('/:id',async(req,res)=>{
    console.log(req.params.id)
    let data= await dbConnect();
    let result = await data.deleteOne({_id: new mongoDb.ObjectId(req.params.id)})
    //We using instence above
    res.send(result)
})

app.listen(5000)