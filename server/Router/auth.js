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
  
const projectID = process.env.RECAPTCHA_PROJECT_KEY;


async function createAssessment(token) {
    const client = new RecaptchaEnterpriseServiceClient();
    const recaptchaSiteKey = process.env.RECAPTCHA_SITE_KEY;
    const projectPath = client.projectPath(projectID);
    const request = ({
      assessment: {
        event: {
          token: token,
          siteKey: recaptchaSiteKey,
        },
      },
      parent: projectPath,
    });

    const [ response ] = await client.createAssessment(request);
    if (!response.tokenProperties.valid) {
        console.log("The CreateAssessment call failed because the token was: " +
        response.tokenProperties.invalidReason);

        return null;
    }

    if (response.tokenProperties.action === "LOGIN") {

     console.log("The reCAPTCHA score is: " +
       response.riskAnalysis.score);

     response.riskAnalysis.reasons.forEach((reason) => {
       console.log(reason);
     });
     return response.riskAnalysis.score;
    } else {
     console.log("The action attribute in your reCAPTCHA tag " +
       "does not match the action you are expecting to score");
     return null;
    }
  }

router.post('/submit', async (req,res)=>{
    const {data,token} = req.body;
    const {name,email,message} = data;
    if(!name || !email || !message){
        return res.status(422).json({error : "Please fill all the fields"});
    }
    if(!token){
        return res.status(400).json({error : "Invalid Recaptcha token"});
    }

    try {
        const data = await createAssessment(token);
      
        if (!data) {
          return res.status(408).json({ error: "Failed to send the form, request timeout-or-duplicate" });
        } else if (data < 0.5) {
          return res.status(400).json({ error: "Failed to send the form, request invalid-user" });
        }
    } catch (err) {
        return res.status(400).json({ error: err });
    }
    
    const form = new Form({name,email,message});
    form.save().then(()=>{
        return res.status(201).json({message : "Form sent successfully"});
    }).catch((err) =>{
        return res.status(500).json({error : "Failed to send the form"});
    })

})

module.exports = router;