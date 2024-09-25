// In the package.json file, we configured the script start to node index.js. This will execute this js file as soon as we write npm run start
// Once this script starts to run, to port becomes active and can be used to listen to req and proivde resposes


require ('dotenv').config()     // This is required to use dotenv (documentation to install and use)
const express = require('express')
// import express from "express"    this line can also be used in place of the above
const app = express()
const port = 3000   //Initially we used this port for our device but port can be an environment variable

// These are get requests to get a particular page
app.get('/', (req, res) => {
    res.send('Hello !')
})

app.get('/myPage', (req, res) => {
    res.send("This is my page")
})

app.get('/google', (req, res) => {
    res.send("<a href='myPage'>Google</a>")   //Response can be in multiple form not necessarily string
})

// This enables a port which actively listens to the requests
app.listen(process.env.PORT, () => {              //Syntax to use environment variables (documentation)
    console.log(`Example app listening on port ${process.env.PORT}`)
})