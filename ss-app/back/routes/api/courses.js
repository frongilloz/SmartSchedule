const express = require('express');
const router = express.Router();

//Course Model
const Course = require('../../models/Course');

//@route  GET api/courses
//@desc   Gets all Courses
//@access Public
router.get('/', (req, res) => {
    try {
       Course.find()
             .then(courses => res.json(courses))
    }catch(err) {
        res.json({message: err});
    }
});

//@route  GET api/courses
//@desc   Gets a single Course
//@access Public
router.get('/:code', (req, res) => {
    try {
        Course.find({code: req.params.code})
              .then(courses => res.json(courses))
    }catch (err) {
        res.json({message: err});
    }
});

module.exports = router;