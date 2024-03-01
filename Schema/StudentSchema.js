const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    fName: {
        type: String,
    },
    lName: {
        type: String,
    },
    enrollmentNumber: {
        type: Number
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    mobileNo: {
        type: Number
    },
    attendanceStatus: {
        type: Boolean,
        default: false
    },
})

module.exports = mongoose.model('Students', StudentSchema);