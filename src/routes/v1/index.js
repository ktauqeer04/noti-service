const express = require('express');
const ticketRouter = require('./ticket-routes');

const router = express.Router();

router.use('/tickets', ticketRouter);

module.exports = router;