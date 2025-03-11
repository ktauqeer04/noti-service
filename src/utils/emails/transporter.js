const nodemailer = require('nodemailer');
const { NODEMAILER_USER, NODEMAILER_PASS } = require('../../config/server-config');


const transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 25,
    auth: {
        user: NODEMAILER_USER,
        pass: NODEMAILER_PASS
    }
});

async function sendEmail() {
    const info = await transporter.sendMail({
        from: NODEMAILER_USER, // sender address
        to: "mohammedtauqeer4oct@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
    });  
    console.log({NODEMAILER_USER, NODEMAILER_PASS})  
}

module.exports = sendEmail;
