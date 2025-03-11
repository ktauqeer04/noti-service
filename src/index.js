const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const sendEmail = require('./utils/emails/transporter.js');

const app = express();

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    await sendEmail();
    console.log('email has been sent')
});
