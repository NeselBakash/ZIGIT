const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../Models/Login/user.model');
const common = require('../common/common');
const router = express.Router();

router.get('/', async (req, res) => {
    let users = await User.find();

    if (users) {
        res.send(users).end();
    }
    else {
         res.status(404).send("users were not found").end();
    }


})

router.post('/', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if (email == undefined || password == undefined) {
         res.status(404).send('Email or passwod was undefined.').end();
    }
    try {


        let user = await User.findOne({
            email: email,
            password: password
        }).populate('personalDetails');

        if(user == null || user == undefined){
             res.status(404).send('User was not found.');

        }
        else{
            const { _id, __v, ...personalDetailsWithoutId } = user.personalDetails.toObject();
    
            //here i would use bcrypt to compare the given password to the password that exist in the DB,
            //but in this specific case the password was first initialize without encryption, i didnt do that.
    
    
            const token = jwt.sign({
                _id: user.id
            }, common.secret);

            const bearerToken = `Bearer ${token}`;
            res.send({
                token: bearerToken,
                personalDetails: personalDetailsWithoutId,
                id: user._id
            })

        }

    }
    catch (error) {
        console.log(error);
    }
})

module.exports = router;