var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('chat', { title: 'Chat by socket.io' });
});

router.get('/chat', function(req, res, next) {
  res.render('chat', { title: 'Chat by socket.io' });
});

module.exports = router;
