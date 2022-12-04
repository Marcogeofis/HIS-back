
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function sendMain() {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    secure: true, // true for 465, false for other ports
    port: 465,
    auth: {
        user: 'marcogeofis@gmail.com',
        pass: 'tvpmdweznjwkwaui'
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'marcogeofis@gmail.com', // sender address
    to: 'toncortes.dev.web@gmail.com', // list of receivers
    subject: "Prueba de nodemailer ✔", // Subject line
    text: "Este correo fue enviado como prueba de nodemailer", // plain text body
    html: "<b>Este correo fue enviado como prueba de nodemailer</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

sendMain();
