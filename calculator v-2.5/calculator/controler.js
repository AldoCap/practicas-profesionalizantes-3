class calculatorController {

    constructor(innerView, modelReference) 
    {
        this.innerView = innerView;
        this.innerModel = modelReference;

        this.innerView.button0.addEventListener('click', () => { this.onButton0Click() });
        this.innerView.button1.addEventListener('click', () => { this.onButton1Click() });
        this.innerView.button2.addEventListener('click', () => { this.onButton2Click() });
        this.innerView.button3.addEventListener('click', () => { this.onButton3Click() });
        this.innerView.button4.addEventListener('click', () => { this.onButton4Click() });
        this.innerView.button5.addEventListener('click', () => { this.onButton5Click() });
        this.innerView.button6.addEventListener('click', () => { this.onButton6Click() });
        this.innerView.button7.addEventListener('click', () => { this.onButton7Click() });
        this.innerView.button8.addEventListener('click', () => { this.onButton8Click() });
        this.innerView.button9.addEventListener('click', () => { this.onButton9Click() });
        this.innerView.buttonSub.addEventListener('click', () => { this.onButtonSubClick() });
        this.innerView.buttonMul.addEventListener('click', () => { this.onButtonMulClick() });
        this.innerView.buttonDiv.addEventListener('click', () => { this.onButtonDivClick() });
        this.innerView.buttonClean.addEventListener('click', () => { this.onButtoncleanClick() });
        this.innerView.buttonPlus.addEventListener('click', () => { this.onButtonPlusClick() });
        this.innerView.buttonCalculate.addEventListener('click', () => { this.onButtonCalculateClick() });
    }

    onButton0Click() 
    {
        this.innerView.display.value += '0';
    }

    onButton1Click() 
    {
        this.innerView.display.value += '1';
    }

    onButton2Click() 
    {
        this.innerView.display.value += '2';
    }

    onButton3Click() 
    {
        this.innerView.display.value += '3';
    }
    onButton4Click() 
    {
        this.innerView.display.value += '4';
    }
    onButton5Click() 
    {
        this.innerView.display.value += '5';
    }
    onButton6Click() 
    {
        this.innerView.display.value += '6';
    }

    onButton7Click() 
    {
        this.innerView.display.value += '7';
    }

    onButton8Click() 
    {
        this.innerView.display.value += '8';
    }

    onButton9Click() 
    {
        this.innerView.display.value += '9';
    }

    onButtonSubClick() 
    {
        this.innerView.display.value += '-';
    }

    onButtonMulClick() 
    {
        this.innerView.display.value += '*';
    }

    onButtonDivClick() 
    {
        this.innerView.display.value += '/';
    }

    onButtoncleanClick() 
    {
        this.innerView.display.value = '';
    }

    onButtonPlusClick() 
    {
        this.innerView.display.value += '+';
    }

    onButtonCalculateClick() 
    {
        this.innerView.display.value = this.innerModel.evaluateExpression(this.innerView.display.value);
    }
}

export {calculatorController}; 