"use strict";
const nodemailer = require("nodemailer");

// Esta función configura y envía el correo electrónico
async function notifyAdmin() {
  // Crear el transporte usando nodemailer
  const transporter = nodemailer.createTransport({
    host: "live.smtp.mailtrap.io", // Host del servicio SMTP
    port: 587, // Puerto SMTP estándar
    secure: false, // False para puertos que no usan TLS
    auth: {
      user: "api", // Usuario Ethereal
      pass: "ed46a445d97751c97bce0027ea435544", // Contraseña Ethereal
    },
  });

  // Enviar correo con el objeto de transporte configurado
  const info = await transporter.sendMail({
    from: 'Hotel_Pairumani@demomailtrap.com', // Dirección remitente
    to: "alexapazaj@gmail.com", // Lista de destinatarios
    subject: "Notificacion de reserva", // Asunto del correo
    text: "Tu pedido ya esta listo (Desayuno Americano) :)", // Cuerpo en texto plano
    //html: "<b>Hello world?</b>", // Cuerpo en formato HTML
  });

  // Confirmar que el correo se ha enviado
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info)); // URL para vista previa en Ethereal
}

// Ejecutar la función principal
notifyAdmin().catch(console.error);
