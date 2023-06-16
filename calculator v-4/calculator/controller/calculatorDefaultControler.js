class calculatorDefaultController {

    constructor(viewReference, modelReference) 
    {
        this.viewReference = viewReference;
        this.modelReference = modelReference;
    }

    enable()
    {    
        this.viewReference.button0.onclick = () => this.onButton0Click();
        this.viewReference.button1.onclick = () => this.onButton1Click();
        this.viewReference.button2.onclick = () => this.onButton2Click();
        this.viewReference.button3.onclick = () => this.onButton3Click();
        this.viewReference.button4.onclick = () => this.onButton4Click();
        this.viewReference.button5.onclick = () => this.onButton5Click();
        this.viewReference.button6.onclick = () => this.onButton6Click();
        this.viewReference.button7.onclick = () => this.onButton7Click();
        this.viewReference.button8.onclick = () => this.onButton8Click();
        this.viewReference.button9.onclick = () => this.onButton9Click();
        this.viewReference.buttonSub.onclick = () => this.onButtonSubClick();
        this.viewReference.buttonMul.onclick = () => this.onButtonMulClick();
        this.viewReference.buttonDiv.onclick = () => this.onButtonDivClick();
        this.viewReference.buttonClean.onclick = () => this.onButtoncleanClick();
        this.viewReference.buttonPlus.onclick = () => this.onButtonPlusClick();
        this.viewReference.buttonCalculate.onclick = () => this.onButtonCalculateClick();
    }

    disable()
    {    
        this.viewReference.button0.onclick = null;
        this.viewReference.button1.onclick = null;
        this.viewReference.button2.onclick = null;
        this.viewReference.button3.onclick = null;
        this.viewReference.button4.onclick = null;
        this.viewReference.button5.onclick = null;
        this.viewReference.button6.onclick = null;
        this.viewReference.button7.onclick = null;
        this.viewReference.button8.onclick = null;
        this.viewReference.button9.onclick = null;
        this.viewReference.buttonSub.onclick = null;
        this.viewReference.buttonMul.onclick = null;
        this.viewReference.buttonDiv.onclick = null;
        this.viewReference.buttonClean.onclick = null;
        this.viewReference.buttonPlus.onclick = null;
        this.viewReference.buttonCalculate.onclick = null;
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
        //this.modelReference.calculateExpression(this.viewReference.display.value).then( response =>  
		//{
		//	this.viewReference.display.value = response.message;
		//});
    }
}

export {calculatorDefaultController}; 