var express = require('express');
var router = express.Router();
var path = require('path');

// Router middleware, mentioned it before defining routes.
router.use(function(req,res,next) {
  console.log("/" + req.method);
  next();
});

// Provide all routes here, this is for Home page.
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, './public', 'index.html'));
});

module.exports = router;