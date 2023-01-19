const mongoose = require('mongoose');
const DB = process.env.DATABASE;

mongoose.set("strictQuery", false);
mongoose.connect(DB).then(()=>{
    console.log('Connection Successfull');
}).catch((err) => {
    console.log('No connection');
    console.log(err);
})