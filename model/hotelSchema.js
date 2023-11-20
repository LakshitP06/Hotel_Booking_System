
const mongoose = require("mongoose");
const hotelSchema = new mongoose.Schema({
    "Name":{type:String},
    "Amenities":{type:Array},
    "Property_Policies":{type:Array},
    "Hotel_Pics":{type:Array},
    "Rating":{type:Number},
    "Reviews":{type:String},
    "Location":{type:String},
    "Rooms":{type:Array},
    "City":{type:String},
    "Contact":{type:String},
    "Email":{type:String},
},{
    collection:"Hotels_list"
});

module.exports = mongoose.model("hotelSchema",hotelSchema);