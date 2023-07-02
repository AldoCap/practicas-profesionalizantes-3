import { TicketView } from '../ticket/view.js'
import { TicketModel } from '../ticket/model.js'; 
import { TicketController } from '../ticket/controler.js'; 

class ticket 
{
    constructor() 
    {
        this.innerView = new TicketView(); 
        this.innerModel = new TicketModel();
        this.innerController = new TicketController(this.innerView, this.innerModel);
        
    }
}; 

function main() 
{
    let ticketInstance = new ticket();

    document.body.appendChild(ticketInstance.innerView.conteiner);
};

window.onload = main;