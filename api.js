const express= require('express');
const { rmSync } = require('fs');
const dbConnect  = require('./mongodb');

const app = express();

//  GET method
//  read data
app.get('/',async(req,res)=>{
    let data = await dbConnect();
    data = await data.find().toArray()
    res.send(data);
})

app.use(express.json());

//  POST method
//  Send data to db
app.post('/', async (req,res)=>{
    // console.log(req.body)
    let data = await dbConnect();
    let result = await data.insertOne(req.body)
    res.send(result)
})
app.listen(5000)