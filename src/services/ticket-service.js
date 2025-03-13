const { StatusCodes } = require("http-status-codes");
const { TicketRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const { sendMail } = require("../utils/emails");



const ticketRepository = new TicketRepository();



const sendEmail = async (data) => {

    try {

        const response = await sendMail.sendEmail(data);
        return response;

    } catch (error) {
        console.log(error);
        throw new AppError('Cannot send email to receivers', StatusCodes.BAD_REQUEST);
    }

}


const createTicket = async (data) => {

    try {
        
        const response = await ticketRepository.create(data);
        return response;

    } catch (error) {
        
        console.log(error);
        throw new AppError('Error while creating a ticket', StatusCodes.BAD_REQUEST);

    }

}

const getPendingEmails = async () => {

    try {
        
        const response = await ticketRepository.getPendingEmails();
        return response;

    } catch (error) {
        
        console.log(error);
        throw new AppError('Error while fetching Pending Emails', StatusCodes.BAD_REQUEST);

    }

}


module.exports = {
    createTicket,
    sendEmail,
    getPendingEmails
}