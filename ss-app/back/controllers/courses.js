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
class SemesterInfo {
    constructor(startDate, endDate) {
        this.startDate = startDate;
        this.endDate = endDate;
    }

    getStartAsDateTime = function() {
        return new Date(this.startDate);
    }

    getEndAsDateTime = function() {
        return new Date(this.endDate);
    }
};

const SemesterLut = [
    {
        "spring2021": new SemesterInfo("01/14/2021", "05/02/2021")
    },
    {
        "fall2020": new SemesterInfo("01/14/2021", "05/02/2021")
    },
    {
        "fall2021": new SemesterInfo("08/14/2021", "12/20/2021")
    }
];

/**
 * 
 * @param {*} semester ("s21")
 * @param {*} course 
 */
const isSameSemester = (semester, course) => {
    let relevantSemester = SemesterLut.find(semesterElement => (Object.   keys(semesterElement)[0] === semester));
    relevantSemester = relevantSemester[Object.keys(relevantSemester)];
    const dropAddDeadline = new Date(course.sections[0].dropaddDeadline);
    let laterThanStart = false;
    let earlierThanEnd = false;
    
    if (dropAddDeadline > relevantSemester.getStartAsDateTime()) {
        laterThanStart = true;
    }

    if (dropAddDeadline < relevantSemester.getEndAsDateTime()) {
        earlierThanEnd = true;
    }

    return laterThanStart && earlierThanEnd;
}

//@route  GET api/courses
//@desc   Gets all Courses
//@access Public
router.get('/', async(req, res) => {
    Course.find((err, courses) => {
        if (err) {
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
        if (err) {
            res.status(500).send(err);
            return;
        }
        course = condenseCourse(course[0]);
        res.json(course);
    })
});

router.get('/:sectionNum', (req, res) => {
    res.send("");
});

router.get('/find/:code/:semester', (req, res) => {

    const courseCode = req.params.code.toUpperCase();

    /**
     * query DB for each course with code and section number.   
     * for each of these results, check if drop deadline is within 
     * the specified semester. if yes, return that result
     **/

    const query = {
        code: courseCode
    };

    Course.find(query, (err, courses) => {
        if (err) {
            res.status(500).send(err);
            return;
        }

        /** 
         * for each of these results, check if drop deadline is within 
         * the specified semester. if yes, return that result
         **/
        courses.forEach((course) => {
            if (isSameSemester(req.params.semester, course)) {
                course = condenseCourse(course);
                res.json(course);
                return;
            }
            res.status(500).send(err);
        })
    })
})

export default router;