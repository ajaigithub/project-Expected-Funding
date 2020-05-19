 var express = require('express');
 var router  = express.Router();

 
 module.exports = router
 const Othercontrib=require('../controller/controller');
 //create
 router.post('/api/Othercontribs/c',Othercontrib.create);
//retrive all
router.get('/api/Othercontribs',Othercontrib.getall);
//delete
router.delete('/api/api/Othercontribs/d/:name',Othercontrib.delete);
//update
router.put('/api/Othercontribs/u/:nme',Othercontrib.update);