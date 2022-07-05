const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' });
require('./db/conn');
const PORT = process.env.PORT;

// Middleware
const middleware = (req, res, next) => {
    console.log('Hello my middleware');
    next();
}

app.get('/', (req, res) => {
    res.send('Hello world from server');
})

app.get('/about', middleware, (req, res) => {
    res.send('Hello about world from server');
})

app.get('/contact', (req, res) => {
    res.send('Hello Contact world from server');
})

app.get('/signin', (req, res) => {
    res.send('Hello Login world from server');
})

app.get('/signup', (req, res) => {
    res.send('Hello Registration world from server');
})




app.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}`);
})