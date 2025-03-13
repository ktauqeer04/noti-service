const nodemailer = require('nodemailer');
const { NODEMAILER_USER, NODEMAILER_PASS } = require('../../config/server-config');


const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: NODEMAILER_USER,
        pass: NODEMAILER_PASS
    }
});

async function sendEmail(data) {

    console.log(data)

    const info = await transporter.sendMail({
        from: NODEMAILER_USER, // sender address
        to: data.recepientEmail, 
        subject: data.subject, // Subject line
        text: data.content, // plain text body
    });  
    console.log({NODEMAILER_USER, NODEMAILER_PASS})  
}

module.exports = {
    sendEmail
};
