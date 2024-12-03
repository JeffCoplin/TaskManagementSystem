const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  service: 'gmail',  
  auth: {
    user: 'jeffcoplin03@gmail.com',  
    pass: '1230654ronal'        
  }
});


const sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: 'jeffcoplin03@gmail.com',  
    to,                          
    subject,                     
    text                         
  };

  
  return transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
