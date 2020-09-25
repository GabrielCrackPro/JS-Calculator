//Import all dependencies
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
//Create the express app
const app = express()
//Set the app routes
app.get('/', (req, res) => {
    res.json({
        "message": "This is a JS Calculator ➕➖"
    })
})
app.post('/', (req, res) => {
    console.log(req.body)
})
//Start the express app
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Listening on port', port.toString())
})