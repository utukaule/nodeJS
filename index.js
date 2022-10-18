const express = require('express');
const path = require('path');

const app = express();

const pathFolder = path.join(__dirname, 'public')
// console.log(pathFolder);
// app.use(express.static(pathFolder));

app.get('', (_, res) => {
    res.sendFile(`${pathFolder}/index.html`)
})

app.get('/about',(req,res)=>{
    res.sendFile(`${pathFolder}/about.html`);
})

app.get('*',(req,res)=>{
    res.sendFile(`${pathFolder}/404page.html`)
})
app.listen(5000)