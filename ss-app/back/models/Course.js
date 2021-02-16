'use strict';
import mongoose from 'mongoose';

//Create Schema
const CourseSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    courseID: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    termInd: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    prerequisites: {
        type: String
    },
    sections: [{
        number: {
            type: String,
            required: true
        },
        classNumber:{
            type: Number,
            required: true
        },
        gradBasis: {
            type: String
        },
        acadCareer: {
            type: String
        },
        display: {
            type: String
        },
        credits: {
            type: Number
        },
        credits_min: {
            type: Number
        },
        credits_max: {
            type: Number
        },
        note: {
            type: String
        },
        dNote: {
            type: String
        },
        genEd: {
            type: Array,
            default: []
        },
        quest: {
            type: Array,
            default: []
        },
        sectWeb: {
            type: String
        },
        rotateTitle: {
            type: String
        },
        deptCode: {
            type: Number
        },
        deptName: {
            type: String
        },
        courseFee: {
            type: Number
        },
        lateFlag: {
            type: String
        },
        EEP: {
            type: String
        },
        LMS: {
            type: String
        },
        instructors: [{
            name: {
                type: String
            }
        }],
        meetTimes: [{
            meetNo: {
                type: Number
            },
            meetDays: [
                String
            ],
            meetTimeBegin: {
                type: String
            },
            meetTimeEnd: {
                type: String
            },
            meetPeriodBegin: {
                type: String
            },
            meetPeriodEnd: {
                type: String
            },
            meetBuilding: {
                type: String
            },
            meetBuildingCode: {
                type: String
            },
            meetRoom: {
                type: String
            }
        }],
        addEligible: {
            type: String
        },
        grWriting: {
            type: String
        },
        finalExam: {
            type: String
        },
        dropaddDeadline: {
            type: String
        },
        pastDeadline: {
            type: Boolean
        }
    }]
});

export default mongoose.model('course', CourseSchema);
//module.exports = Course = mongoose.model('course', CourseSchema);
