var express = require('express');
var router = express.Router();
var mueblesModel = require('../../models/mueblesModel');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  var muebles = await mueblesModel.getMuebles();
  res.render('admin/muebles', {
      layout:'admin/layout',
      usuario: req.session.nombre,
      muebles
  });
});

router.get('/agregar', (req,res,next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  });
});

router.post('/agregar', async (req, res, next) => {
  try {
    if (req.body.nombreMueble != "" && req.body.descripcionMueble != "" && req.body.cuerpo != "") {
      await mueblesModel.insertMueble(req.body);
      res.redirect('/admin/muebles')
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true, message: 'Todos los campos son requeridos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true, message: 'No se cargo la mueble'    
    });
  }
});

router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;
  await mueblesModel.deleteMuebleById(id);
  res.redirect('/admin/muebles')
});

router.get('/modificar/:id', async (req, res, next) => {
  let id = req.params.id;
  let mueble = await mueblesModel.getMuebleById(id);
  res.render('admin/modificar', {
    layout: 'admin/layout',
    mueble
  });
});

router.post('/modificar', async (req, res, next) => {
  try {
    let obj = {
      nombreMueble: req.body.nombreMueble,
      descripcionMueble: req.body.descripcionMueble,
      cuerpo: req.body.cuerpo
    }
    await mueblesModel.modificarMuebleById(obj, req.body.id);
    res.redirect('/admin/muebles');
  }
  catch(error) {
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true, message: 'No se modifico la mueble'
    })
  }
})

module.exports = router;