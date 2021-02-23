import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ConsolidatedCourseSchema = new Schema({
    code: {
        type: String,
        required: true
    },
    courseId: {
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

export default mongoose.model('consolidatedCourse', ConsolidatedCourseSchema);