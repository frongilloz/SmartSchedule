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

    getStartAsDateTime() {
        return new Date(this.startDate);
    }

    getEndAsDateTime() {
        return new Date(this.endDate);
    }
};

const SemesterLut = [
    {
        "s21": new SemesterInfo("01/14/2021", "05/02/2021")
    },
    {
        "f20": new SemesterInfo("01/14/2021", "05/02/2021")
    }
];

/**
 * 
 * @param {*} semester ("s21")
 * @param {*} course 
 */
const isSameSemester = (semester, course) => {
    const relevantSemester = SemesterLut[semester];
    const dropAddDeadline = new Date(course.dropaddDeadline);
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

router.get('/find/:code/:semester/:sectionNum', (req, res) => {

    const courseCode = req.params.code.toUpperCase();

    /**
     * query DB for each course with code and section number.   
     * for each of these results, check if drop deadline is within 
     * the specified semester. if yes, return that result
     **/

    const query = {
        code: courseCode,
        sections: {
            classNumber: req.params.sectionNum
        }
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
            if (isSameSemester(req.params.semester, course))
            {
                course = condenseCourse(course);
                res.json(course);
                return;
            }
            res.status(500).send(err);
        })
    })
})

export default router;