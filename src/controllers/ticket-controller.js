const { ticketService } = require('../services/index');
const { SuccessResponse, ErrorResponse } = require('../utils/common');
const { StatusCodes } = require('http-status-codes');

const createTicket = async (req, res) => {

    try {
        
        const { subject, content, receipientEmail } = req.body;

        const response = await ticketService.createTicket({ subject, content, receipientEmail });

        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);

    } catch (error) {

        console.log(error);
        ErrorResponse.error = error; // this error is custom class error i.e. AppError that we created 
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
        
    }

}

module.exports = {
    createTicket
}