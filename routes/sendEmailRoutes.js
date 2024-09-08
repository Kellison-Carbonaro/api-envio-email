const express = require('express');
const router = express.Router();
const sendEmailController = require('../controllers/sendEmail');

router.post('/', sendEmailController.sendEmailNodemailer);

module.exports = router;