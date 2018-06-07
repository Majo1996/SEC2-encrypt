var express = require('express');
var router = express.Router();
var main = require('../public/javascripts/main.js');

/* GET home page. */
router.get('/', main.index)

router.post('/', main.post)

router.get('/:name', main.get)
module.exports = router;

