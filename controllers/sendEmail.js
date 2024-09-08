const sendEmailService = require('../services/sendEmailService');

exports.sendEmailNodemailer = async (req, res) => {
  try {
    const emailSent = await sendEmailService.sendEmailNodemailer(req.body);
    res.status(201).json(emailSent);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao enviar email', error });
  }
};