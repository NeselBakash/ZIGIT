const mongoose = require('mongoose');
const validations = require('./loginValidations');

const schema = mongoose.Schema({

    email: {
        type: String,
        required: true,
        validate: [validations.validateEmail, "Enter a valid email."]
    },
    password: {
        type: String,
        required: true,
        validate: [validations.validatePassword, "Your password must contain at least 1 capital letter and 1 digit."]
    },
    personalDetails:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PersonalDetails'
    }
})

module.exports = mongoose.model('User', schema);