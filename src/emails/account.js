const sgMail = require('@sendgrid/mail');

const sendgridAPIKey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'a.khoshbakht79@gmail.com',
    subject: `Welcome To Task Manager App, ${name}!`,
    text: `We are glad to have you with us, ${name}. Let me know how you get along with the application.`
  });
};

const sendDeleteAccountEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'a.khoshbakht79@gmail.com',
    subject: `We're sorry to see you go, ${name}!`,
    text: `Come back soon, ${name}!`
  });
};
module.exports = {
  sendWelcomeEmail,
  sendDeleteAccountEmail
};
