class TicketController {

    constructor(referenceView, referenceModel) 
    {
        this.referenceView = referenceView;
        this.referenceModel = referenceModel;

        this.referenceView.Button.addEventListener('click', () => { this.onButton0Click() });
    }

    onButton0Click() 
    {   
        let text = "Do you want to send it?";

        if (confirm(text) == true) 
        {
           //call model
            let ticketType = this.referenceView.typeOptions.value;
            let ticketPriority = this.referenceView.PriorityOptions.value;
            let ticketDescription = this.referenceView.descriptionBox.value;

            let response = this.referenceModel.evaluateExpression(ticketType,ticketPriority,ticketDescription);

            this.referenceView.tableListTickets.appendChild(response)
        }
    }

}

export {TicketController}; 