const nodemailer = require('nodemailer');
const { sendEmailNodemailer } = require('../services/sendEmailService');

jest.mock('nodemailer');

describe('sendEmailNodemailer', () => {
  it('deve enviar um e-mail com sucesso', async () => {
    const sendMailMock = jest.fn().mockResolvedValue({ messageId: '12345' });
    nodemailer.createTransport.mockReturnValue({
      sendMail: sendMailMock,
    });

    const result = await sendEmailNodemailer();

    expect(sendMailMock).toHaveBeenCalledWith({
      from: '"Pessoa Teste" <pessoa@teste.com>',
      to: 'teste@teste.com',
      subject: 'email com nodemailer',
    });

    expect(result).toEqual({
      message: 'E-mail enviado com sucesso',
      info: { messageId: '12345' },
    });
  });
});