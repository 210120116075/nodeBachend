const express = require('express');
const router = express.Router()

const attendanceController = require('../Controller/AttendanceController');

router.post('/add/:id/:qrText'+attendanceController.addAttendance)

module.exports = router;