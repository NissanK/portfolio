const { application } = require('express');
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const {RecaptchaEnterpriseServiceClient} =
require('@google-cloud/recaptcha-enterprise');

require('dotenv').config();


require('../db/connection');
const Form = require('../schemas/formSchema');

router.get('/',(req,res)=>{
    res.send('Hello world from the server router');
  })
  



router.post('/', async (req,res)=>{
    const {data,token} = req.body;
    const {name,email,message} = data;
    if(!name || !email || !message){
        return res.status(422).json({error : "Please fill all the fields"});
    }
    if(!token){
        return res.status(400).json({error : "Invalid Recaptcha token"});
    }

    const url = 'https://www.google.com/recaptcha/api/siteverify';

    const payload = {
      secret: process.env.RECAPTCHA_SECRET_KEY,
      response: token
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(payload).toString()
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          console.log('reCAPTCHA verification successful.');
          if(data.score < 0.7){
            return res.status(500).json({error : "Failed to send the form"});
          }
          const form = new Form({name,email,message});
          form.save().then(()=>{
              return res.status(201).json({message : "Form sent successfully"});
          }).catch((err) =>{
              return res.status(500).json({error : "Failed to send the form"});
          })
        } else {
          console.log('reCAPTCHA verification failed.');
          return res.status(500).json({error : "reCAPTCHA verification failed."});
        }
      })
      .catch(error => {
        console.error('Error:', error);
        return res.status(500).json({error : "reCAPTCHA verification failed, didn't get response."});
      });
})

module.exports = router;