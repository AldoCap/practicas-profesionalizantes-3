
class CRUDViewController
{
  constructor(view, model)
  {
    
    this.innerView = view;
    this.innerModel = model;

    this.innerView.createButton.onclick = () => this.createContact();
    this.innerView.updateButton.onclick = () => this.updateButton();
    this.innerView.deleteButton.onclick = () => this.deleteButton();
  }

  createContact()
  {
    let optionsInput = this.innerView.optionsInput.value;
    let inputName = this.innerView.inputName.value;
    let inputSurname = this.innerView.inputSurname.value;
    let inputPhone = this.innerView.inputPhone.value;

    this.innerModel.create(optionsInput, inputName, inputSurname, inputPhone)
    this.innerView.render(this.innerModel.readAll()); 
    
  }
  updateButton()
  {
    let optionsInput = this.innerView.optionsInput.value;
    let inputFindSurname = this.innerView.inputFindSurname.value;
    let inputNewName = this.innerView.inputNewName.value;
    let inputNewSurname = this.innerView.inputNewSurname.value;
    let inputNewPhone = this.innerView.inputNewPhone.value;
    this.innerModel.edit(inputFindSurname,optionsInput, inputNewName, inputNewSurname, inputNewPhone); 
    this.innerView.render(this.innerModel.readAll());

  }

  deleteButton()
  {

    this.innerModel.delete(this.innerView.inputDeleteContact.value);
    this.innerView.render(this.innerModel.readAll());
  }
}

export{CRUDViewController}; 