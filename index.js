const express = require('express');
const app = express();

app.get("",(req, res)=>{
    console.log('this is name sent by the browser to server',req.query.name)
    res.send(`<h1>this is home page </h1> <a href="/about">Go to about page</a>`);

})

//how to add HTML in it.

app.get("/about",(req,res)=>{
    res.send(`
        <input type="submit">
        <a href="/">Go to about page</a>
    `)
})

//how render json data

app.get("/help",(req,res)=>{
    res.send([{
        name:"utu",
        email:"testbbht@gmail.com",
    },
    {
        name:'sus',
        email:"sus@gmail.com"
    }
    ])
})
app.listen(5000);