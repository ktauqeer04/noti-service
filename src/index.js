const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const sendEmail = require('./utils/emails/transporter.js');

const app = express();

app.use(express.json())
app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);  
});
