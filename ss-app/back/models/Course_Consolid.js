const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Consolid
const CourseConsolid = new Schema({
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
        credits: {
            type: Number
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
    }]
});

module.exports = Course = mongoose.model('course', CourseSchema);