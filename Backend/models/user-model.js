const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fname : {
        type : String,
        require : true
    },
    lname : {
        type : String,
        require : true
    },
    username : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    phone : {
        type : Number,
        require : true
    },
    password : {
        type : String,
        require : true
    }
})

const User = new mongoose.model("Registerdata" , userSchema)

module.exports = User