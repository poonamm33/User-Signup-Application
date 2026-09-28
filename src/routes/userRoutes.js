const express = require('express');
const router = express.Router();

const { dashboard } = require('../controllers/userController');

router.get('/dashboard', dashboard);

module.exports = router;