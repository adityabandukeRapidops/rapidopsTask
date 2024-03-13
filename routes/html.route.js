const {postHtmlCode, getHtmlCode} = require('../controllers/html.controller');
const express = require('express');
const router = express.Router();

router.post('/postCode' , postHtmlCode)
router.get('/getCode/:id' , getHtmlCode);

module.exports = router;

