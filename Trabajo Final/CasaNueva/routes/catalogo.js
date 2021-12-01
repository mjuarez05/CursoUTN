var express = require('express');
var router = express.Router();
var mueblesModel = require('./../models/mueblesModel');

/* GET home page. */
router.get('/', async function(req, res, next) {
    var muebles = await mueblesModel.getMuebles();

  res.render('catalogo', { 
    title: 'Casa Nueva',
    muebles
 });
});



module.exports = router;
