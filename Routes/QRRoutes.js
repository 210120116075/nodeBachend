const express = require('express');
const router = express.Router();

const qrController = require('../Controller/QRController');

router.post('/generate',qrController.generateQR);

module.exports = router;