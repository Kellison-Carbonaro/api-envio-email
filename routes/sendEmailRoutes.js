const express = require('express');
const router = express.Router();
const sendEmailController = require('../controllers/sendEmail');

router.post('/', sendEmailController.sendEmailNodemailer);

/**
 * @swagger
 * /send-email:
 *   post:
 *     summary: Envia um e-mail
 *     description: Envia um e-mail usando Nodemailer conectado ao Mailtrap. Os dados do e-mail são fornecidos no corpo da requisição.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               to:
 *                 type: string
 *                 description: Endereço de e-mail do destinatário
 *                 example: "destinatario@exemplo.com"
 *               subject:
 *                 type: string
 *                 description: Assunto do e-mail
 *                 example: "Assunto do e-mail"
 *               body:
 *                 type: string
 *                 description: Corpo do e-mail
 *                 example: "Conteúdo do e-mail"
 *     responses:
 *       201:
 *         description: E-mail enviado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "E-mail enviado com sucesso"
 *                 info:
 *                   type: object
 *                   properties:
 *                     messageId:
 *                       type: string
 *                       example: "12345"
 *       500:
 *         description: Erro ao enviar o e-mail
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Erro ao enviar email"
 *                 error:
 *                   type: object
 *                   properties:
 *                     code:
 *                       type: string
 *                       example: "EENVELOPE"
 *                     command:
 *                       type: string
 *                       example: "API"
 */

module.exports = router;