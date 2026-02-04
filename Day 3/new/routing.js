var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.sendFile(__dirname + "/"+"index.html");
});
router.get('/youtube',function(req,res){
    res.redirect("https://www.youtube.com");
});
router.get('/instagram',function(req,res){
    res.redirect('https://www.instagram.com');
});

module.exports = router;
