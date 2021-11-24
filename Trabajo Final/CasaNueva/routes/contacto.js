var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render('contacto', {
    
    title: 'Casa Nueva: Contactanos'
  });
});

router.post("/", async (req, res, next) => {
  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var telefono = req.body.tel;
  var coment = req.body.coment;

  console.log(req.body);

  var obj = {
    to: "maximiliano.juarez05@gmail.com",
    subject: "Contacto desde la web",
    html:
      nombre +
      " " +
      apellido +
      " " +
      " dejo un este comentario en tu sitio web: " +
      coment + "<br></br> Podes contactarlo con los siguientes datos: <br></br>" +
      email + "<br></br>" +
      telefono
  }

  var transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  var info = await transporter.sendMail(obj);

  res.render("contacto", {
    message: "Mensaje enviado correctamente",
  });
});

module.exports = router;
