const {register} = require('../controllers/user.controller');
const express = require('express');
const router = express.Router();

router.post('/register' , register)

module.exports = router;

