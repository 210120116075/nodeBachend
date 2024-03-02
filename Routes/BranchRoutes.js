const express = require('express');
const router = express.Router();
const BranchController = require('../Controller/BranchController');

router.post('/add',BranchController.addBranch);

module.exports = router;