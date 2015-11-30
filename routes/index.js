var express = require('express');
var router = express.Router();
var path = require('path');
var memes = require('../data/memes.json');
var comments = require('../data/comments.json');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: "Wallace's Meme Extravaganza", memes: memes, comments: comments});
});

module.exports = router;
