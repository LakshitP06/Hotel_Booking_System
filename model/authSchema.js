
const mongoose = require("mongoose");
const authSchema = new mongoose.Schema({
    "name":{type:String},
    "email":{type:String},
    "password":{type:String}
},{
    collection:"Authentication"
});

module.exports = mongoose.model("authSchema",authSchema);