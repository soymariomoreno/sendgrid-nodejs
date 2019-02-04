// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey('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');

let email_to = 'mmoreno@ids.upchiapas.edu.mx';

const msg = {
  to: email_to,
  from: 'yosoymariomoreno@gmail.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

sgMail.send(msg);