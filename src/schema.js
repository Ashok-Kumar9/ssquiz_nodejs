const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
    userName: {
        type: String,
        minlenght: 3,
        required: true
    },
    email : {
        type: String,
        minlenght: 13,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = userSchema