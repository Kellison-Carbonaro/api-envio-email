# API de Envio de E-mail

Esta API permite o envio de e-mails utilizando o Nodemailer e o Mailtrap.

## Endpoints

### Enviar E-mail

- **URL**: `/send-email`
- **Método**: `POST`
- **Descrição**: Envia um e-mail usando o Nodemailer conectado ao Mailtrap.
- **Headers**:
  - `Content-Type`: `application/json`

#### Requisição

- **Corpo da Requisição**: O corpo da requisição deve ser um JSON com os seguintes campos:
  
  ```json
  {
    "to": "destinatario@exemplo.com",
    "subject": "Assunto do e-mail",
    "body": "Conteúdo do e-mail"
  }

## Configuração do Ambiente

A API utiliza variáveis de ambiente para configurar o Mailtrap e outras informações sensíveis. Para isso, crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo e altera para os seus dados:

```env
HOSTMAILTRAP=smtp.mailtrap.io
PORTMAILTRAP=587
USERMAILTRAP=seu_usuario_mailtrap
PASSWORDMAILTRAP=sua_senha_mailtrap