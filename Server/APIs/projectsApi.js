const express = require('express');
const jwt = require('jsonwebtoken');
const ProjectModel = require('../Models/Project/project.model');
const common = require('../common/common');
const router = express.Router();

//addVerifyTokenHere

router.get('/:id', common.verifyToken,async (req,res)=>{
    const userId = req.params.id;

    let projects = await ProjectModel.find();
    if(!projects){
        res.status(404).send('no projects found.');
    }

    const userProjects = projects.filter(proj => proj.user == userId);

    const projectsWithoutIdAndVAndUser = userProjects.map(proj => ({
        id: proj._id,
        name: proj.name,
        score: proj.score,
        durationInDays: proj.durationInDays,
        bugsCount: proj.bugsCount,
        madeDadeline: proj.madeDadeline
    }));

    if(!userProjects){
        res.status(400).send("There is no projects for this user.");
    }

    res.status(200).send(projectsWithoutIdAndVAndUser);
});

module.exports = router;
