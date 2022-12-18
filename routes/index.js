var express = require('express');
var router = express.Router();


const messages = [

];



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Mini Messageboard', messages: messages
  });
});


/* FORM */
router.get('/new', function (req, res, next) {
  res.render('form');
});

router.post('/new', function (req, res, next) {
  messages.push({ text: req.body.msg, user: req.body.usr, added: new Date() });
  console.log(messages)
  res.redirect('/')
})


module.exports = router;
