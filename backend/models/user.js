const Mongoose = require("mongoose");

const userSchema = Mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    }
})
const User = Mongoose.model("User" ,userSchema)

module.exports = User;