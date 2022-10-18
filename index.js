const express = require('express');
const path = require("path");

const app = express();

const pubPath = path.join(__dirname,'public')
console.log(pubPath);

app.use(express.static(pubPath));
// const publicPath = path.join(__dirname, 'public')

//what use? 
// app.use(express.static(publicPath));


app.listen(5000);