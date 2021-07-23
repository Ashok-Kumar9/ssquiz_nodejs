const mongoose = require("mongoose");

const userSchema = require("./schema")

const user = mongoose.model("Users", userSchema);

module.exports = user;


  
