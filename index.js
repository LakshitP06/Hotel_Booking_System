const mongoose = require("mongoose");
const express = require("express");
const auth = require("./controller/auth");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const hotelRoute = require("./controller/hotelRoute");


mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://pardeshilakshit:12345@cluster0.qcojkpg.mongodb.net/Hotels");
var db = mongoose.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("Error occurred"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/auth",auth);
app.use("/hotelRoute",hotelRoute);

//server

app.use("/hotelRoute",hotelRoute);

app.listen(4000,()=>{
    console.log("Server connected at 4000");
})
