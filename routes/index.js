var express = require('express');
var router = express.Router();

/*GET home page.*/

module.exports = router;
router.get('/', function(req, res) {
    res.render('index');
});

router.get('/login', function(req, res) {
    res.render('login');
});
router.post('/login',function(req,res) {
    var user=["admin","wz","tiger"];
    var password=["admin","wz","tiger"];

    if (req.body.username == user[0] && req.body.password == password[0]) {
        res.redirect('/home');
    } else {

        req.alert("b uzhengque");
        res.redirect('/login');
    }
});
router.get('/home', function(req, res) {
    res.render('home');
});

router.get('/logout', function(req, res) {
    res.render('login');
});
