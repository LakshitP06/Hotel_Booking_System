const express = require("express");
const hotelSchema = require("../model/hotelSchema");
const hotelRoute = new express.Router();

hotelRoute.post('/create-hotel',(req,res)=>{
    hotelSchema.create(req.body,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
});

hotelRoute.get("/",(req,res)=>{
    hotelSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

hotelRoute.route("/update-hotel/:id")
.get((req,res)=>{
    hotelSchema.findById(req.params.id,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
.put((req,res)=>{
    hotelSchema.findByIdAndUpdate(req.params.id,{$set:req.body});
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    }
});

hotelRoute.delete("/delete-hotel/:id",(req,res)=>{
    hotelSchema.findByIdAndRemove(req.params.id,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
    });


module.exports = hotelRoute;
