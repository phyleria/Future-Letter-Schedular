const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const schedule = require('node-schedule');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/schedule', (req, res) => {
  const { email, message, date } = req.body;
  const sendDate = new Date(date);

  if (sendDate < new Date()) {
    return res.status(400).json({ error: 'Send date must be in the future.' });
  }

  schedule.scheduleJob(sendDate, () => {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'A Letter from Your Past Self',
      text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });
  });

  res.json({ success: true, message: 'Letter scheduled!' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));