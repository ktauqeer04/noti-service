const crudRespository = require("./crud-repository");
const { Ticket } = require('../models');


class TicketRepository extends crudRespository{
    constructor(){
        super(Ticket);
    }

    //additional functionalities for airplanes specific

    async getPendingEmails() {

        const response = await Ticket.findAll({
            where: {
                status: 'PENDING'
            }
        })

        return response;

    }

}

module.exports = TicketRepository;