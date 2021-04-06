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

// Find the course section with the class number queried for, and return the reduced object
const find_section = (course, query_class_num) => {
    let ret_Course;
    let course_found = false;

    //For the sections array, go through each section in the array
    for (let i = 0; i < course.sections.length; i++) {  
        //If the class number is found
        if(course.sections[i].classNumber == query_class_num){
            // Make a copy of orig courses to ret_courses 
            ret_Course = course;

            //Only keep the section that is relevant, remove the others
            ret_Course.sections = course.sections[i];

            console.log("RET_COURSE: ", ret_Course)

            // Construct a return object
            let ret_obj = {
                course : ret_Course,
                course_found : true
            }
            
            // update
            course_found = true;

            // Return 
            return ret_obj;
        }

    }

    if(course_found == false){
        // NOT found in this class section
        // Construct a return object
        let ret_obj = {
            ret_Course : ret_Course,
            course_found : false
        }

        // Return 
        return ret_obj;
    }
    
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


router.get('/findCS/:code/:classNum/:semester', (req, res) => {
    console.log(req)
    console.log("be courses")

    const courseCode = req.params.code.toUpperCase();
    let ret_obj;

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
         * 1) for each of these results, check if drop deadline is within 
         * the specified semester. if yes, return that result
         * 
         * 2) for each of these results, check for the section #. if found, return that result/
         * 
         * NOTE: There can be multiple instances of 1 class (i.e. F2F and online). So need to be able to go through multiple
         **/
        courses.forEach((course) => {
            if (isSameSemester(req.params.semester, course)) {
                // 1) Check section BEFORE returning; Will keep only the relevant section of the class queried
                ret_obj = find_section(course, req.params.classNum)

                console.log("FOUND,", ret_obj.course_found)

                // IF Found, proceed to finish return
                if(ret_obj.course_found){
                     // 2) Condense the course
                    ret_obj.course = condenseCourse(course);

                    console.log("RETURN")

                    // 3) Return
                    res.json(course);
                    res.status(200).send();
                    return;
                }

                // Else, not found, continue to parse through to look for section
            } else{
                res.status(500).send(err);
            }
        })

        console.log("REACH?")

        // If not found at the end of the for loop, return error because course was not found
        if (err) {
            res.status(500).send(err);
            return;
        }


    })
});


router.get('/findC/:code/:semester', (req, res) => {
    console.log(req)
    console.log("be courses")

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