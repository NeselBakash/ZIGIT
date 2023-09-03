const jwt = require('jsonwebtoken');
const secret = "483495483jkfgju8jfklgfhghs";
const mongoose = require('mongoose');


const verifyToken = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[2];
    if (!token) {
        return res.status(401).send('Authorization error: Token not provided');
    }
    else {
        jwt.verify(token, secret, (err, user) => {
            if (err) {
                return console.log('jwt was not verified.');
            }
            next();

        });

    }

}
const checkDatabaseExistence=async (dbUrl) =>{
    try {
        await mongoose.connect(dbUrl);

        const collections = await mongoose.connection.db.listCollections().toArray();

        if (collections.length > 0) {
            await mongoose.connection.close();

            return true;
        } else {
            await mongoose.connection.close();

            return false;
        }

    } catch (error) {
        console.error('Error checking database.', error.message);
    }
}

module.exports = { secret, verifyToken,checkDatabaseExistence  } 