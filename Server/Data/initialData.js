const mongoose = require('mongoose');
const initialPersonalDetailsData = [
    {
        "name": "Test Test",
        "Team": "Developers",
        "joinedAt": "2018-10-01",
        "avatar": "https://avatarfiles.alphacoders.com/164/thumb-164632.jpg"
    },
    {
        "name": "Test Test",
        "Team": "Developers",
        "joinedAt": "2018-10-01",
        "avatar": "https://avatarfiles.alphacoders.com/164/thumb-164632.jpg"
    }
];

const initialUserData = [
    {
        "email": 'test@test.com',
        "password": 'Test1234',
        "personalDetails":new mongoose.Types.ObjectId()
    },
    {
        "email": 'user@user.com',
        "password": 'User1234',
        "personalDetails":new mongoose.Types.ObjectId()
    }
]

const initialProjectsData = [
    {
        "name": "Backend Project",
        "score": 88,
        "durationInDays": 35,
        "bugsCount": 74,
        "madeDadeline": false,
        "user": new mongoose.Types.ObjectId()
    },
    {
        "name": "Design Project",
        "score": 68,
        "durationInDays": 55,
        "bugsCount": 52,
        "madeDadeline": false,
        "user": new mongoose.Types.ObjectId()
    },
    {
        "name": "Backend Project",
        "score": 90,
        "durationInDays": 36,
        "bugsCount": 34,
        "madeDadeline": true,
        "user": new mongoose.Types.ObjectId()
    },
    {
        "name": "Frontend Project",
        "score": 99,
        "durationInDays": 51,
        "bugsCount": 32,
        "madeDadeline": true,
        "user": new mongoose.Types.ObjectId()
    },
    {
        "name": "Design Project",
        "score": 97,
        "durationInDays": 68,
        "bugsCount": 42,
        "madeDadeline": true,
        "user": new mongoose.Types.ObjectId()
    },
    {
        "name": "Backend Project",
        "score": 97,
        "durationInDays": 66,
        "bugsCount": 64,
        "madeDadeline": false,
        "user": new mongoose.Types.ObjectId()
    },
    {
        "name": "Fullstack Project",
        "score": 79,
        "durationInDays": 61,
        "bugsCount": 63,
        "madeDadeline": true,
        "user": new mongoose.Types.ObjectId()
    },
    {
        "name": "Backend Project",
        "score": 66,
        "durationInDays": 62,
        "bugsCount": 50,
        "madeDadeline": true,
        "user": new mongoose.Types.ObjectId()
    },
    {
        "name": "Design Project",
        "score": 95,
        "durationInDays": 59,
        "bugsCount": 65,
        "madeDadeline": false,
        "user": new mongoose.Types.ObjectId()
    },
    {
        "name": "Backend Project",
        "score": 79,
        "durationInDays": 44,
        "bugsCount": 72,
        "madeDadeline": false,
        "user": new mongoose.Types.ObjectId()
    },
    {
        "name": "Backend Project",
        "score": 93,
        "durationInDays": 66,
        "bugsCount": 72,
        "madeDadeline": true,
        "user": new mongoose.Types.ObjectId()
    },
    {
        "name": "Design Project",
        "score": 100,
        "durationInDays": 39,
        "bugsCount": 47,
        "madeDadeline": true,
        "user": new mongoose.Types.ObjectId()
    },
    {
        "name": "Design Project",
        "score": 87,
        "durationInDays": 68,
        "bugsCount": 56,
        "madeDadeline": false,
        "user": new mongoose.Types.ObjectId()
    },
    {
        "name": "Fullstack Project",
        "score": 76,
        "durationInDays": 36,
        "bugsCount": 73,
        "madeDadeline": true,
        "user": new mongoose.Types.ObjectId()
    },
    {
        "name": "Frontend Project",
        "score": 91,
        "durationInDays": 37,
        "bugsCount": 38,
        "madeDadeline": true,
        "user": new mongoose.Types.ObjectId()
    },
    {
        "name": "Backend Project",
        "score": 84,
        "durationInDays": 37,
        "bugsCount": 57,
        "madeDadeline": false,
        "user": new mongoose.Types.ObjectId()
    },
    {
        "name": "Fullstack Project",
        "score": 71,
        "durationInDays": 66,
        "bugsCount": 33,
        "madeDadeline": false,
        "user": new mongoose.Types.ObjectId()
    },
    {
        "name": "Backend Project",
        "score": 82,
        "durationInDays": 38,
        "bugsCount": 47,
        "madeDadeline": true,
        "user": new mongoose.Types.ObjectId()
    },
    {
        "name": "Backend Project",
        "score": 98,
        "durationInDays": 38,
        "bugsCount": 75,
        "madeDadeline": true,
        "user": new mongoose.Types.ObjectId()
    },
    {
        "name": "Frontend Project",
        "score": 90,
        "durationInDays": 60,
        "bugsCount": 40,
        "madeDadeline": false,
        "user": new mongoose.Types.ObjectId()
    },
    {
        "name": "Fullstack Project",
        "score": 77,
        "durationInDays": 67,
        "bugsCount": 74,
        "madeDadeline": true,
        "user": new mongoose.Types.ObjectId()
    },
    {
        "name": "Backend Project",
        "score": 99,
        "durationInDays": 37,
        "bugsCount": 65,
        "madeDadeline": true,
        "user": new mongoose.Types.ObjectId()
    },
    {
        "name": "Fullstack Project",
        "score": 73,
        "durationInDays": 58,
        "bugsCount": 62,
        "madeDadeline": false,
        "user": new mongoose.Types.ObjectId()
    },
    {
        "name": "Design Project",
        "score": 88,
        "durationInDays": 72,
        "bugsCount": 52,
        "madeDadeline": false,
        "user": new mongoose.Types.ObjectId()
    },
    {
        "name": "Backend Project",
        "score": 87,
        "durationInDays": 41,
        "bugsCount": 64,
        "madeDadeline": false,
        "user": new mongoose.Types.ObjectId()
    },
    {
        "name": "Design Project",
        "score": 65,
        "durationInDays": 60,
        "bugsCount": 59,
        "madeDadeline": true,
        "user": new mongoose.Types.ObjectId()
    },
    {
        "name": "Backend Project",
        "score": 91,
        "durationInDays": 53,
        "bugsCount": 50,
        "madeDadeline": false,
        "user": new mongoose.Types.ObjectId()
    },
    {
        "name": "Fullstack Project",
        "score": 94,
        "durationInDays": 65,
        "bugsCount": 75,
        "madeDadeline": true,
        "user": new mongoose.Types.ObjectId()
    },
    {
        "name": "Frontend Project",
        "score": 75,
        "durationInDays": 38,
        "bugsCount": 43,
        "madeDadeline": true,
        "user": new mongoose.Types.ObjectId()
    },
    {
        "name": "Design Project",
        "score": 89,
        "durationInDays": 53,
        "bugsCount": 57,
        "madeDadeline": false,
        "user": new mongoose.Types.ObjectId()
    }
]

module.exports = {initialPersonalDetailsData, initialUserData,initialProjectsData};