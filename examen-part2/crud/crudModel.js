class CRUDModel
{
  constructor()
  {
    this.dataContainer = this.readAll();
    console.log(this.dataContainer);
  }

  create( optionsInput, inputName, inputSurname, inputPhone )
  {
    const contact = {
      optionsInput: optionsInput,
      inputName: inputName,
      inputSurname: inputSurname,
      inputPhone: inputPhone
    };

    this.dataContainer.push(contact);
    this.saveDataToStorage(this.dataContainer);

    return this.dataContainer; 
  }

  edit(inputFindSurname,optionsInput, inputNewName, inputNewSurname, inputNewPhone) {
    const contact = {
      optionsInput: optionsInput,
      inputName: inputNewName,
      inputSurname: inputNewSurname,
      inputPhone: inputNewPhone
    };
  
    for (let i = 0; i < this.dataContainer.length; i++) {
      if (this.dataContainer[i].inputSurname == inputFindSurname) {
        this.dataContainer[i] = contact; 
        this.saveDataToStorage(this.dataContainer);
      }
    }
  }

    delete(inputDeleteContact) {
      const index = this.dataContainer.findIndex(contact => contact.inputPhone === inputDeleteContact);
      if (index !== -1) {
        this.dataContainer.splice(index, 1);
        this.saveDataToStorage(this.dataContainer);
      }
    }


  readAll() {
    const data = localStorage.getItem('contacts');
    return data ? JSON.parse(data) : [];
  }

  saveDataToStorage(dataContainer) {
    
    localStorage.setItem('contacts', JSON.stringify(dataContainer));
  }
}
export {CRUDModel}; 