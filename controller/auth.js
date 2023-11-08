const express = require("express");
const authSchema = require("../model/authSchema");
const auth = new express.Router();

auth.post('/register', (req, res) => {
    console.log("Aaya toh sahi");
    authSchema.create(req.body, (err, data) => {
        if (err)
            return res.status(500).json({ error: err.message });
        else
            res.status(201).json(data);
    });
});


module.exports = auth;