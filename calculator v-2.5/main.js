import { calculatorView } from './calculator/view.js';
import { calculatorModel } from './calculator/model.js'; 
import { calculatorController } from './calculator/controler.js'; 

class calculator 
{
    constructor() 
    {
        this.innerView = new calculatorView(); 
        this.innerModel = new calculatorModel();
        this.innerController = new calculatorController(this.innerView, this.innerModel);
        
    }
}; 

function main() 
{
    let calculatorInstance = new calculator();

    document.body.appendChild(calculatorInstance.innerView.container);
};

//window.addEventListener('load', main);
window.onload = main;