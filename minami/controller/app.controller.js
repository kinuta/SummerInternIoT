var express = require('express');
var router = express.Router();

// Router middleware, mentioned it before defining routes.
router.use(function(req,res,next) {
  console.log("/" + req.method);
  next();
});

// use session auth to secure the angular app files
router.use('/', function (req, res, next) {
    if (req.path !== '/login' && !req.session.token) {
        return res.redirect('/login?returnUrl=' + encodeURIComponent('/app' + req.path));
    }
    next();
});

// make JWT token available to angular app
router.get('/token', function (req, res) {
    res.send(req.session.token);
});

router.use('/', express.static('public'));

module.exports = router;