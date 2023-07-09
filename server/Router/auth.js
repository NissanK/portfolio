const { application } = require('express');
const express = require('express');
const router = express.Router();
const {RecaptchaEnterpriseServiceClient} =
require('@google-cloud/recaptcha-enterprise');

require('dotenv').config();



require('../db/connection');
const Form = require('../schemas/formSchema');

router.get('/',(req,res)=>{
    res.send('Hello world from the server router');
})

router.post('/submit', async (req,res)=>{
    const {data,token} = req.body;
    const {name,email,message} = data;
    if(!name || !email || !message){
        return res.status(422).json({error : "Please fill all the fields"});
    }
    if(!token){
        return res.status(400).json({error : "Invalid Recaptcha token"});
    }

    const project_key = process.env.RECAPTCHA_PROJECT_KEY;
    const site_key = process.env.RECAPTCHA_SITE_KEY;
    const client = new RecaptchaEnterpriseServiceClient();
    const projectPath = client.projectPath(project_key);
    const request = ({
        assessment: {
            event: {
            token: token,
            siteKey: site_key,
            },
        },
        parent: projectPath,
    });

    const [ response ] = await client.createAssessment(request);
    if (!response.tokenProperties.valid) {
        console.log("The CreateAssessment call failed because the token was: " +
            response.tokenProperties.invalidReason);
        return res.status(408).json({error : "Failed to send the form, request timeout-or-duplicate"});
    }
    if(response.riskAnalysis.score < 0.5){
        return res.status(400).json({error : "Failed to send the form, request invalid-user"});
    }

    const form = new Form({name,email,message});
    form.save().then(()=>{
        res.status(201).json({message : "Form sent successfully"});
    }).catch((err) =>{
        res.status(500).json({error : "Failed to send the form"});
    })
})

module.exports = router;