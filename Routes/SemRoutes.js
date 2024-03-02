const express = require('express')
const router = express.Router();

const SemController = require('../Controller/SemController');

router.post('/add',SemController.addSem);

module.exports = router;