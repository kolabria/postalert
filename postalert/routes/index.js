var express = require('express');
var router = express.Router();
var IpInfo = require("ipinfo");
var session = require('express-session');

var locale = require("locale");
var supported = ["en","fr"];


/* GET home page. */
router.get('/', function(req, res) {
  console.log('index '); 
  console.log('referer: ',req.headers.referer);
  if (!req.session.lang) {
      req.session.lang = req.locale;
      console.log("The best match is: " + req.locale);
  }
   
  res.render('index',{
      lang: req.session.lang
  });

});



router.get("/lang", function(req, res) {
    
    req.session.lang = req.locale;
    
    console.log("You asked for: " + req.headers["accept-language"]);
    console.log("We support: " + supported);
    console.log( "Our default is: " + locale.Locale["default"]);
    console.log("The best match is: " + req.locale);
    if (req.locale == 'en')
        console.log("got english")
    else
        console.log("got something else")
    
  res.header("Content-Type", "text/plain")
  res.send(
    "You asked for: " + req.headers["accept-language"] + "\n" +
    "We support: " + supported + "\n" +
    "Our default is: " + locale.Locale["default"] + "\n" +
    "The best match is: " + req.locale + "\n" +
    "The saved lang is: " + req.session.lang
  )
})


/* post home page. */
/*
router.get('/:pc?', function(req, res) {
    if (req.params.pc){
        console.log('postal code:bla bla ', req.params.pc) ;
        
        res.render('signup');
    }    
    else
    {
        // send back something that says to enter a vailid postal code. Need to check too.  
        res.render('signup');  
    }

});
*/
/* GET signup page. */
router.get('/signup/:lang?', function(req, res) {

   if (req.params.lang)
     req.session.lang = req.params.lang;
  res.render('signup',{
      lang: req.session.lang
  });
});

/* GET thankyou page.  -   need this for forms */
router.get('/thankyou/:lang?', function(req, res) {

  if (req.params.lang)
    req.session.lang = req.params.lang;
  res.render('thankyou',{
      lang: req.session.lang
  });
});

/* post thankyou page. */
router.post('/po', function(req, res) {
  
  res.render('thankyou',{
      lang: req.session.lang
  });

});


router.get('/:lang?', function(req, res) {    
    console.log('url: ',req.url);
    console.log('referer: ',req.headers.referer);
  console.log('lang pref', req.params.lang); 
  req.session.lang = req.params.lang;
    
  res.render('index',{
      lang: req.session.lang
  });

});

module.exports = router;
