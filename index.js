const express = require('express')
const path = require('path')

const app = express()
const pathFolder = path.join(__dirname, 'public')

app.set('view engine', 'ejs')

app.get("", (req, res) => {
    res.sendFile(`${pathFolder}/index.html`)
})

app.get('/profile', (req, res) => {
    const user = {
        name: 'suvarna',
        email: 'su@gmail.com',
        city: 'pune',
        skills: ['php', 'js', 'c++']
    }
    res.render('profile', { user })
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.get("*", (req, res) => {
    res.render('404page')
})




app.listen(5000)