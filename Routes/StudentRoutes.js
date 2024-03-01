const express = require('express');
const router = express.Router();
const studentController = require('../Controller/StudentController');
const adaController = require('../Controller/AdaController');

router.post('/user',studentController.registerUserWithEnc);
router.post('/login',studentController.loginUserWithEnc);
router.put('/update/:id',studentController.updateStudent);
router.put('/update/:ada/:id',adaController.updateAda);
// router.post('/user',studentController.registerStudent);
// router.post('/login',studentController.loginStudent); 
module.exports = router; 