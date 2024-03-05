const mongoose = require('mongoose');
const { schema } = require('./SemSchema');
const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
    branch: {
        type: Schema.Types.ObjectId,
        ref: "branch"
    },
    sem: {
        type: Schema.Types.ObjectId,
        ref: "sem"
    },
    subject: {
        type: Schema.Types.ObjectId,
        ref: "subject"
    },
    studentId: {
        type: Schema.Types.ObjectId,
        ref: "student"
    },
    facultyId: {
        type: Schema.Types.ObjectId,
        ref: "faculty"
    },
    attendanceStatus: {
        type: String
    },
    dateStatus : {
        type: Schema.Types.ObjectId,
        ref: "qrCode"
    }
})

module.exports = mongoose.model('attendance', attendanceSchema);