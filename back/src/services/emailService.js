// backend/src/services/emailService.js
const nodemailer = require('nodemailer');

// Function to send emails
async function sendEmail(recipient, subject, message) {
    try {
        // Create a transporter object using SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER, // Your email username
                pass: process.env.EMAIL_PASS // Your email password
            }
        });

        // Send mail with defined transport object
        let info = await transporter.sendMail({
            from: `"Your Name" <your_email@gmail.com>`, // Sender address
            to: recipient, // List of recipients
            subject: subject, // Subject line
            text: message // Plain text body
        });

        console.log('Message sent: %s', info.messageId);
    } catch (error) {
        console.error('Error occurred while sending email:', error);
    }
}

module.exports = { sendEmail };
