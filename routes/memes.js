var express = require('express');
var path = require('path');
var router = express.Router();
var memes = require('../data/memes.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('memes', { title: "Wallace's Meme Extravaganza" });
});

module.exports = router;
