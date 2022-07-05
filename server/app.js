const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

// this line convert json into object
app.use(express.json());

// path where our env are defined
dotenv.config({ path: './config.env' });

// our connection code
require('./db/conn');

const PORT = process.env.PORT;

app.use(require('./router/auth'))


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