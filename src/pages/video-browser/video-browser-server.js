var express = require('express');
require('marko/express'); //enable res.marko 
require('marko/node-require').install();
var template = require('./video-browser.marko');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    res.marko(template, {});
});

module.exports = router;
