
const mongoose = require("mongoose");
const hotelSchema = new mongoose.Schema({
    "Name":{type:String},
    "Amenities":{type:Array},
    "Property_Policies":{type:Array},
    "Rating":{type:Number},
    "Reviews":{type:String},
    "Location":{type:String},
    "City":{type:String},
    "Email":{type:String},
    "Contact":{type:String}
},{
    collection:"Hotels_list"
});

module.exports = mongoose.model("hotelSchema",hotelSchema);