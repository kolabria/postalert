var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
 // res.sendfile('public/index.html');
});


/* post home page. */
router.post('/', function(req, res) {
    console.log('postal code: ',req.body.InputPostalCode);
  res.render('signup');
 // res.sendfile('public/index.html');
});

/* post home page. */
router.get('/:pc?', function(req, res) {
    if (req.params.pc){
        console.log('postal code: ', req.params.pc) ;
        res.render('signup');
    }    
    else
    {
        // send back something that says to enter a vailid postal code. Need to check too.  
        res.render('signup');  
    }

});

/* GET signup page. */
router.get('/signup', function(req, res) {
  res.render('signup');
});

/* post home page. */
router.post('/po', function(req, res) {
    //console.log('postal code: ',req.body.InputPostalCode);
  res.render('thankyou');

});


/* GET thankyou page. */
router.get('/thankyou', function(req, res) {
  res.render('thankyou');
});

module.exports = router;
