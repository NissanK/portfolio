const { application } = require('express');
const express = require('express');
const router = express.Router();

require('../db/connection');
const Form = require('../schemas/formSchema')

router.get('/',(req,res)=>{
    res.send('Hello world from the server router');
})

router.post('/submit',(req,res)=>{
    const {name,email,message} = req.body;
    if(!name || !email || !message){
        return res.status(422).json({error : "Please fill all the fields"});
    }
    
    const form = new Form({name,email,message});
    form.save().then(()=>{
        res.status(201).json({message : "Form sent successfully"});
    }).catch((err) =>{
        res.status(500).json({error : "Failed to send the form"});
    })
})

module.exports = router;