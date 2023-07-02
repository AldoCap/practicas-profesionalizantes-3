class TicketModel 
{
    constructor() {}

    evaluateExpression(type,priority,description) 
    {
      this.row = document.createElement('tr');
      this.td1 = document.createElement('td');
      this.td1.innerText = `${type}`
      this.td2 = document.createElement('td');
      this.td2.innerText =  `${description}`
      this.td3 = document.createElement('td');
      this.td3.innerText = `${priority}`

      this.row.appendChild(this.td1)
      this.row.appendChild(this.td2)
      this.row.appendChild(this.td3)

      return this.row;
    }
}
export { TicketModel }; 