const nodemailer = require('nodemailer');
const { sendEmailNodemailer } = require('../services/sendEmailService');

jest.mock('nodemailer');

describe('sendEmailNodemailer', () => {
  it('deve enviar um e-mail com sucesso', async () => {
    const sendMailMock = jest.fn().mockResolvedValue({ messageId: '12345' });
    nodemailer.createTransport.mockReturnValue({
      sendMail: sendMailMock,
    });

    const emailData = {
      to: 'teste@teste.com',
      subject: 'Assunto do e-mail',
      text: 'Conteúdo do e-mail',
    };

    const result = await sendEmailNodemailer(emailData);

    expect(sendMailMock).toHaveBeenCalledWith({
      to: 'teste@teste.com',
      subject: 'Assunto do e-mail',
      text: 'Conteúdo do e-mail',
    });

    expect(result).toEqual({
      message: 'E-mail enviado com sucesso',
      info: { messageId: '12345' },
    });
  });
});