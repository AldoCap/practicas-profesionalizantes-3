class calculatorController {

    constructor(viewReference, modelReference) 
    {
        this.viewReference = viewReference;
        this.modelReference = modelReference;

        this.viewReference.button0.addEventListener('click', () => { this.onButton0Click() });
        this.viewReference.button1.addEventListener('click', () => { this.onButton1Click() });
        this.viewReference.button2.addEventListener('click', () => { this.onButton2Click() });
        this.viewReference.button3.addEventListener('click', () => { this.onButton3Click() });
        this.viewReference.button4.addEventListener('click', () => { this.onButton4Click() });
        this.viewReference.button5.addEventListener('click', () => { this.onButton5Click() });
        this.viewReference.button6.addEventListener('click', () => { this.onButton6Click() });
        this.viewReference.button7.addEventListener('click', () => { this.onButton7Click() });
        this.viewReference.button8.addEventListener('click', () => { this.onButton8Click() });
        this.viewReference.button9.addEventListener('click', () => { this.onButton9Click() });
        this.viewReference.buttonSub.addEventListener('click', () => { this.onButtonSubClick() });
        this.viewReference.buttonMul.addEventListener('click', () => { this.onButtonMulClick() });
        this.viewReference.buttonDiv.addEventListener('click', () => { this.onButtonDivClick() });
        this.viewReference.buttonClean.addEventListener('click', () => { this.onButtoncleanClick() });
        this.viewReference.buttonPlus.addEventListener('click', () => { this.onButtonPlusClick() });
        this.viewReference.buttonCalculate.addEventListener('click', () => { this.onButtonCalculateClick() });
    }

    onButton0Click() 
    {
        this.viewReference.display.value += '0';
    }

    onButton1Click() 
    {
        this.viewReference.display.value += '1';
    }

    onButton2Click() 
    {
        this.viewReference.display.value += '2';
    }

    onButton3Click() 
    {
        this.viewReference.display.value += '3';
    }
    onButton4Click() 
    {
        this.viewReference.display.value += '4';
    }
    onButton5Click() 
    {
        this.viewReference.display.value += '5';
    }
    onButton6Click() 
    {
        this.viewReference.display.value += '6';
    }

    onButton7Click() 
    {
        this.viewReference.display.value += '7';
    }

    onButton8Click() 
    {
        this.viewReference.display.value += '8';
    }

    onButton9Click() 
    {
        this.viewReference.display.value += '9';
    }

    onButtonSubClick() 
    {
        this.viewReference.display.value += '-';
    }

    onButtonMulClick() 
    {
        this.viewReference.display.value += '*';
    }

    onButtonDivClick() 
    {
        this.viewReference.display.value += '/';
    }

    onButtoncleanClick() 
    {
        this.viewReference.display.value = '';
    }

    onButtonPlusClick() 
    {
        this.viewReference.display.value += '+';
    }

    onButtonCalculateClick() 
    {
        //this.viewReference.display.value = this.innerModel.evaluateExpression(this.viewReference.display.value);
        this.modelReference.calculateExpression(this.viewReference.display.value).then( response => 
		{
			this.viewReference.display.value = response.message;
		});
    }
}

export {calculatorController}; 