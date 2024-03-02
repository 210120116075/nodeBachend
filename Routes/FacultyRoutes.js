const express = require('express');
const router = express.Router();
const FacultyController = require('../Controller/FacultyController');

router.post('/add',FacultyController.registerFacultyWithEnc);
router.post('/login',FacultyController.loginFacultyWithEnc);

module.exports = router;