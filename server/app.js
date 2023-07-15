
const dotenv = require('dotenv');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({ origin: '*' }));

dotenv.config({path: './config.env'});
require('./db/connection')

app.use(express.json());

app.use(require('./Router/auth'))

const PORT = process.env.PORT || 3000;

// middleware
const middleware = (req,res,next) => {
    console.log('Hello from middleware');
    next();
}

app.get('/',middleware,(req,res)=>{
    res.send('Hello world from the server');
})

app.listen(PORT, ()=>{
    console.log(`server is running at port ${PORT}`);
})