const mailTransport = require('../../config/mail');

class MailController {
  async store(req, res) {
    await mailTransport.sendMail({
      to: 'edilson.junior@zoop.com.br',
      from: 'edilson.junior@zoop.com.br',
      subject: 'Teste de e-mail',
      template: 'email',
      context: {
        message: 'Hello World do mail service',
      },
    });
    return res.status(201).json({ msg: 'E-mail enviado com sucesso' });
  }
}

module.exports = new MailController();
