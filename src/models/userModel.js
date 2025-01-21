const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    name: {
        type:String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        require: true,
        enum: ["admin","manager","user"]
    },
},{
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);
