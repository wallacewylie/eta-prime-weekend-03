var express = require('express');
var path = require('path');
var router = express.Router();
var memes = require('../data/memes.json');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('memes', { title: "Wallace's Meme Extravaganza", memes: memes });
});


module.exports = router;