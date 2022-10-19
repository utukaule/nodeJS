const express = require('express');
const reqFilter = require('./middleware');
const app = express();
const route = express.Router();

route.use(reqFilter);
// app.use(reqFilter)

app.get('', (req, res) => {
    res.send("at home page");
})

route.get('/users', (req, res) => {
    res.send('at users page');
})

route.get('/about', (req, res) => {
    res.send('at users page');
})

app.use('/', route);

app.listen(5000)