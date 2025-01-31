require('dotenv').config()
const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')

const app = express()
app.use(cors())
app.use(express.json())

// Configuração do Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

// Rota de contato
app.post('/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Mensagem de ${name} - Portfólio Engenheiro`,
      text: message
    }

    await transporter.sendMail(mailOptions)
    res.status(200).json({ success: true })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao enviar mensagem' })
  }
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
