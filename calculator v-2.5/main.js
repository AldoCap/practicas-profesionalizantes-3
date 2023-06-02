class calculator {
    constructor() {
        this.container = document.createElement('div');

    }
}

function main() {
    let calculatorInstance = new calculator();

    document.body.appendChild(calculatorInstance.view.container);
}

//window.addEventListener('load', startApplication);
window.onload = main;