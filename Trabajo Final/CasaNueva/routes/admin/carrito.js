var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin/carrito', {
      layout:'admin/layout',
      usuario: req.session.nombre
  });
});

module.exports = router;

