"use strict";

const nodemailer = require("nodemailer"),
    smtpTransport = require('nodemailer-smtp-transport'),
    config = require('../config/config')

const transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    tls: {
        rejectUnauthorized: false
    },
    auth: {
        user: config.user, //RE REALIZA EL VINCULO PARA EL USUARIO Y CONTRASEÑA bk/config
        pass: config.pwd //RE REALIZA EL VINCULO PARA EL USUARIO Y CONTRASEÑA bk/config
    }
}));

exports.sendMailContact = function(data) { // se envia correo de bk config.js user y pwd con la plantilla htmlCustom por formulario postman
    let htmlCustom = `<ul>
                        <li>${data.name}</li>
                        <li>${data.email}</li>
                        <li>${data.subject}</li>
                        </ul>
                        <p> ${data.message} </p>
                        `
    let mailOptions = {
        from: 'correo',
        to: data.email,
        subject: 'Notificación de contacto ',
        html: htmlCustom
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error)
            console.log(error);
        else
            console.log('Email sent: ' + info.response);
    })

}