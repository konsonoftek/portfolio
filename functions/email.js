const nodemailer = require('nodemailer');
require('dotenv').config()

exports.handler = function(event, context, callback) {
  
  const data = JSON.parse(event.body);

  const transport = nodemailer.createTransport({
    host: process.env.REACT_APP_EMAIL_HOST,
    port: process.env.REACT_APP_EMAIL_PORT,
    auth: {
      user: process.env.REACT_APP_EMAIL_USER,
      pass: process.env.REACT_APP_EMAIL_PASS
    }
  });
  
  const name = data.name;
  const email = data.email;
  const subject = data.subject;
  const message = data.message; 

  transport.sendMail({
    from: email,
    to: process.env.REACT_APP_EMAIL,
    subject: subject,
    html: `
        <h3>Email from ${name} ${email}<h3>
        <p>${message}<p>
        `
}, function(error, info) {
    if (error) {
        callback(error);
    } else {
        callback(null, {
        statusCode: 200,
        body: JSON.stringify({
              'result': 'success'
            })
    });
    }
});
}