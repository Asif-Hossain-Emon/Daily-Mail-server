const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000

app.use(cors())

const catagories = require('./Data/Catagories.json')

app.get('/', (req, res) => {
    res.send('News API running.')
})

app.get('/news-catagories', (req, res) => {
    res.send(catagories)
})

app.listen(port, () => {
    console.log('Daily Mail news server port ', port)
})
