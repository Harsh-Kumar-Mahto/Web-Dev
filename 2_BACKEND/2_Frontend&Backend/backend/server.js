// const express = require('express')  This will work perfectly fine

// This is the newer way and for this to work we need to add a 'type' in the package.json file
import express from 'express';

const app = express();

app.get('/',(req, res) => {
    res.send("Server is ready!");
});

app.get('/api/jokes',(req, res) => {
    // This will create a page just like an api and a json formatter can be used to structurise the data
    // so that it can be easily understood
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'This is another joke'
        },
        {
            id: 3,
            title: 'Third joke',
            content: 'This is third joke'
        },
        {
            id: 4,
            title: 'Fourth joke',
            content: 'This is fourth joke'
        },
    ]
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at localhost:${port}`);
});