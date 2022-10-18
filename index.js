const express = require('express');
const path = require('path');

const app = express();

const pathFolder = path.join(__dirname,'public')

//We are setting template engine using app.set
app.set('view engine','ejs')

app.get('',(req, res)=>{
    res.sendFile(`${pathFolder}/index.html`)
})

app.get('/profile',(req, res)=>{
    const user = {
        name:'utu',
        email:'utu@gmail.com',
        city:'pune'
    }
    res.render('profile',{user})
})

app.get('/about',(req,res)=>{
    res.sendFile(`${pathFolder}/about.html`)
})

app.listen(5500);