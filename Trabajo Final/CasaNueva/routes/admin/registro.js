var express = require('express');
const { capturaDatos } = require('../../models/usuariosModel');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin/registro', {
      layout:'admin/layout'
  });
});




module.exports = router;
