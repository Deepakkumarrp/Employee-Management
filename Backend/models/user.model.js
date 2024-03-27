const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},{
    versionKey : false
});

const User = mongoose.model("User" , userSchema);

module.exports = {
    User
}