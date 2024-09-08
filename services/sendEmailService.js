const nodemailer = require("nodemailer")

const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.HOSTMAILTRAP,
    port: process.env.PORTMAILTRAP,
    auth: {
      user: process.env.USERMAILTRAP,
      pass: process.env.PASSWORDMAILTRAP
    }
  });
};

exports.sendEmailNodemailer = async (emailData) => {
  const transporter = createTransporter();

  let info = await transporter.sendMail({
    to: emailData.to,
    subject: emailData.subject,
    text: emailData.text  
  })
  return { message: 'E-mail enviado com sucesso', info};
};