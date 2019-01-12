'use strict'

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.get('/status/:parameter', (req, res) => {
    let param = req.params.parameter
    res.send("The Status is" + param)
})

app.listen(3000, () => {

});