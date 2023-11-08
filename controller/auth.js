const express = require("express");
const authSchema = require("../model/authSchema");
const auth = new express.Router();

auth.post('/register', (req, res) => {
    authSchema.create(req.body, (err, data) => {
        if (err)
            return res.status(500).json({ error: err.message });
        else
            res.status(201).json(data);
    })
});

auth.post('/login',(req, res) =>{
    const {email,password}=req.body;
    authSchema.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("Success")
            }else{
                res.json("Password incorrect")
            }
        }else{
            res.json("No record existed")
        }
    })
});


module.exports = auth;