const { NODEMAILER_USER } = require('../../config/server-config');
const mailsender = require('./transporter.js');


const sendEmail = () => { 
    try {
        mailsender.sendMail({
            from: NODEMAILER_USER,
            to: 'itsinstakillofficial@gmail.com',
            subject: 'testing 1,2,3,4....',
            content: 'yup'
        });        
        console.log()
    } catch (error) {
        console.log(`error in email ${error}`);
    }

}

// module.exports = sendEmail;