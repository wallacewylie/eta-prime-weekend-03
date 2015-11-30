var express = require('express');
var router = express.Router();
var meme = require('../data/memes.json');

/* GET home page. */
router.post('/', function(req, res, next) {
  res.send('index', { title: "Wallace's Meme Extravaganza" });
});

module.exports = router;
