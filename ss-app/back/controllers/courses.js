import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

//Course Model
import Course from '../models/Course.js';

//@route  GET api/courses
//@desc   Gets all Courses
//@access Public
router.get('/', async(req, res) => {
    console.log("controller?");

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
router.get('/:code', async(req, res) => {
    try {
        Course.find({code: req.params.code})
              .then(courses => res.json(courses))
    }catch (err) {
        res.json({message: err});
    }
});

//module.exports = router;

export default router;