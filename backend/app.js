
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

dotenv.config({path: './config.env'});
require('./db/connection')

const User = require('./schemas/formSchema');

app.use(express.json());

app.use(require('./Router/auth'))

const PORT = process.env.PORT;

// middleware
const middleware = (req,res,next) => {
    console.log('Hello from middleware');
    next();
}

app.get('/',middleware,(req,res)=>{
    res.send('Hello world from the server');
})

app.listen(3000, ()=>{
    console.log(`server is running at port ${PORT}`);
})