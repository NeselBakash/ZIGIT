const express = require('express');
const cors = require('cors');
const loginApi = require('./APIs/loginApi');
const projectApi = require('./APIs/projectsApi');

const data = require('./Data/initialData');

const UserModel = require('./Models/Login/user.model');
const PersonalDetailsModel = require('./Models/Login/personalDetails.model');
const ProjectsModel = require('./Models/Project/project.model');



const http = require('http');

const mongoose = require('mongoose');
const projectModel = require('./Models/Project/project.model');
var isInitialized = false;

const dbURL = "mongodb://127.0.0.1:27017/ZigitNesel";

const app = express();
const httpServer = http.createServer(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.use('/login', loginApi);
app.use('/projects', projectApi);

mongoose.connect(dbURL).then(() => {

    console.log("DB is connected");

    if (!isInitialized) {
        PersonalDetailsModel.insertMany(data.initialPersonalDetailsData)
            .then((personalDetails) => {
                const userDataWithReferences = data.initialUserData.map((user, index) => ({
                    ...user,
                    personalDetails: personalDetails[index]._id,
                }));

                return UserModel.insertMany(userDataWithReferences);

            }).then((users) => {
                const usersId = users.map(u => u.id);
                const projectsDataWithReferences = data.initialProjectsData.map((proj, index) => ({
                    ...proj,
                    user: usersId[Math.floor(Math.random() * usersId.length)]
                }))

                return projectModel.insertMany(projectsDataWithReferences);
            })
            .then(console.log('Initialization succeeded!')).then(
                isInitialized = true
            );

    }


    const server = httpServer.listen(9000, () => {
        const port = server.address().port;
        console.log("App is running on port ", port);
    })

}).catch(err => console.log(err)) 
