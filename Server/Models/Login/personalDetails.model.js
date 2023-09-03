const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name:String,
    Team:String,
    joinedAt:String,
    avatar:String,

})

module.exports = mongoose.model('PersonalDetails', schema);