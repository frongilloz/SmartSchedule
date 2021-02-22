import express              from 'express';
import Course               from '../models/Course.js';
import ConsolidatedCourse   from '../models/ConsolidatedCourse.js';

const router                = express.Router();

const condenseCourse = (course) => {
    let consolidatedCourse;
    consolidatedCourse = new ConsolidatedCourse(course);
    consolidatedCourse.courseId = course.courseId;
    return consolidatedCourse;
}

const condenseCourses = (courses) => {
    courses.forEach((course) => {
        course = condenseCourse(course);
    })
}

//@route  GET api/courses
//@desc   Gets all Courses
//@access Public
router.get('/', async(req, res) => {
    Course.find((err, courses) => {
        if (err)
        {
            res.json({message: err});
            return;
        }
        courses = condenseCourses(courses);
        courses => res.json(courses);
    })
});

//@route  GET api/courses
//@desc   Gets a single Course
//@access Public
router.get('/:code', async(req, res) => {
    const courseCode = req.params.code.toUpperCase();

    Course.find({code: courseCode}, (err, course) => {
        if (err)
        {
            res.status(500).send(err);
            return;
        }
        course = condenseCourse(course[0]);
        res.json(course);
    })
});

export default router;