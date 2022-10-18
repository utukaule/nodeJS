const express = require('express');
const app = express();

//lets make pages

//first parameter goes to route
app.get('', (req, res) => {
    console.log("data sent by browser is ===>", req.query.name)
    res.send("hello, this is home page " + req.query.name);
});

app.get("/about", (req, res) => {
    res.send("this is about page")
})

app.listen(5000);