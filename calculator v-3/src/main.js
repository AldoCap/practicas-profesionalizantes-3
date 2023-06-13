import { calculatorView } from '../calculator/view.js';
import { calculatorModel , calculatorBackendModel } from '../calculator/model.js'; 
import { calculatorController } from '../calculator/controler.js'; 

class calculator 
{
    constructor(model) 
    {
        this.innerView = new calculatorView(); 
        this.innerModel = model;
        this.innerController = new calculatorController(this.innerView, this.innerModel);
        
    }
}; 

function main() 
{
    let calculatorModelFrontend = new calculatorModel();
	let calculatorModelBackend = new calculatorBackendModel();
    let calculatorInstance = new calculator(calculatorModelBackend);

    document.body.appendChild(calculatorInstance.innerView.container);
};

//window.addEventListener('load', main);
window.onload = main;