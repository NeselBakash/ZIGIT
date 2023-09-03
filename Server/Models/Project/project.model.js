const mongoose = require('mongoose');

const schema = mongoose.Schema({

    name:String,
    score: Number,
    durationInDays:Number,
    bugsCount: Number,
    madeDadeline: Boolean,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

})

module.exports = mongoose.model('Projects', schema);