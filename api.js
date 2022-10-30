const express = require('express');
const dbConnect = require('./mongodb');
const app = express();

//get data from database
app.get('/', async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray()
    res.send(data);
})

//  Insted of using body parser we use express.json().
//  Because after node 4.6 we can use express.json() insted of using body parser.
app.use(express.json());

app.post('/', async (req, res) => {
    // let data = await dbConnect();
    // let result = await data.insertOne()
    console.log(req.body)
    let data = await dbConnect();
    let result = await data.insertOne(req.body);
    res.send(result);
})

// PUT API
// Used when we have to update data
app.put('/:name', async (req, res) => {
    let data = await dbConnect();
    console.log(req.body)
    let result = await data.updateOne(
        { name: req.params.name },
        {
            $set:
                req.body
        }
    )
    res.send({ result: "updated" })

})


app.listen(5000)