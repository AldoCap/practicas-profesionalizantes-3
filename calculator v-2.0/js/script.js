class view
{
   constructor()
   {
      this.display = document.createElement('input');
      //this.display.type = 'text';
      //this.display.setAttribute('disabled','');
      //this.display.value = '';
      this.display.classList.add('displayResult');

      this.button0 = document.createElement('button');
      this.button0.innerText = '0';
      this.button0.classList.add('btn', 'button0');

      this.button1 = document.createElement('button');
      this.button1.innerText = '1';
      this.button1.classList.add('btn', 'button1');

      this.button2 = document.createElement('button');
      this.button2.innerText = '2';
      this.button2.classList.add('btn','button2');

      this.button3 = document.createElement('button');
      this.button3.innerText = '3';
      this.button3.classList.add('btn', 'button3');

      this.button4 = document.createElement('button');
      this.button4.innerText = '4';
      this.button4.classList.add('btn', 'button4');

      this.button5 = document.createElement('button');
      this.button5.innerText = '5';
      this.button5.classList.add('btn', 'button5');

      this.button6 = document.createElement('button');
      this.button6.innerText = '6';
      this.button6.classList.add('btn', 'button6');

      this.button7 = document.createElement('button');
      this.button7.innerText = '7';
      this.button7.classList.add('btn', 'button7');

      this.button8 = document.createElement('button');
      this.button8.innerText = '8';
      this.button8.classList.add('btn', 'button8');

      this.button9 = document.createElement('button');
      this.button9.innerText = '9';
      this.button9.classList.add('btn', 'button9');

      this.buttonPlus = document.createElement('button');
      this.buttonPlus.innerText = '+';
      this.buttonPlus.classList.add('btn', 'buttonPlus');

      this.buttonClean = document.createElement('button');
      this.buttonClean.innerText = 'C';
      this.buttonClean.classList.add('btn', 'buttonClean');

      this.buttonDiv = document.createElement('button');
      this.buttonDiv.innerText = '/';
      this.buttonDiv.classList.add('btn', 'buttonDiv');

      this.buttonMul = document.createElement('button');
      this.buttonMul.innerText = '*';
      this.buttonMul.classList.add('btn', 'buttonMul');

      this.buttonSub = document.createElement('button');
      this.buttonSub.innerText = '-';
      this.buttonSub.classList.add('btn', 'buttonSub');

      this.buttonCalculate = document.createElement('button');
      this.buttonCalculate.innerText = '=';
      this.buttonCalculate.classList.add('calculateButton');

      //Container
      this.container = document.createElement('div');
      this.container.appendChild(this.display);
      this.container.appendChild(this.button0);
      this.container.appendChild(this.button1);
      this.container.appendChild(this.button2);
      this.container.appendChild(this.button3);
      this.container.appendChild(this.button4);
      this.container.appendChild(this.button5);
      this.container.appendChild(this.button6);
      this.container.appendChild(this.button7);
      this.container.appendChild(this.button8);
      this.container.appendChild(this.button9);
      this.container.appendChild(this.buttonDiv);
      this.container.appendChild(this.buttonMul);
      this.container.appendChild(this.buttonSub);
      this.container.appendChild(this.buttonPlus);
      this.container.appendChild(this.buttonClean);
      this.container.appendChild(this.buttonCalculate);
   }

   style() 
   {
        this.a = this.container.getElementsByClassName("btn");
        this.a.set
   }
   
}

//-------------------------Controller------------------------

class controller
{
   constructor( viewReference, modelReference)
   {
      this.innerView = viewReference;
      this.innerModel = modelReference;

      this.innerView.button0.addEventListener('click', ()=>{ this.onButton0Click() } );
      this.innerView.button1.addEventListener('click', ()=>{ this.onButton1Click() } );
      this.innerView.button2.addEventListener('click', ()=>{ this.onButton2Click() } );
      this.innerView.button3.addEventListener('click', ()=>{ this.onButton3Click() } );
      this.innerView.button4.addEventListener('click', ()=>{ this.onButton4Click() } );
      this.innerView.button5.addEventListener('click', ()=>{ this.onButton5Click() } );
      this.innerView.button6.addEventListener('click', ()=>{ this.onButton6Click() } );
      this.innerView.button7.addEventListener('click', ()=>{ this.onButton7Click() } );
      this.innerView.button8.addEventListener('click', ()=>{ this.onButton8Click() } );
      this.innerView.button9.addEventListener('click', ()=>{ this.onButton9Click() } );
      this.innerView.buttonSub.addEventListener('click', ()=>{ this.onButtonSubClick() } );
      this.innerView.buttonMul.addEventListener('click', ()=>{ this.onButtonMulClick() } );
      this.innerView.buttonDiv.addEventListener('click', ()=>{ this.onButtonDivClick() } );
      this.innerView.buttonClean.addEventListener('click', ()=>{ this.onButtoncleanClick() } );
      this.innerView.buttonPlus.addEventListener('click', ()=>{ this.onButtonPlusClick() } );
      this.innerView.buttonCalculate.addEventListener('click', ()=>{ this.onButtonCalculateClick() } );
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


//--------------------------Model----------------------------

class model
{
   constructor()
   {

   }

   evaluateExpression(expr)
   {
      return eval(expr);
   }
}

//--------------------------main---------------------------

class calculator
{
   constructor()
   {
      this.view = new view();
      this.view.style(); 
      this.model = new model();
      this.controller = new controller(this.view,this.model);

   }
}

function startApplication()
{
   let myCalculator = new calculator();

   document.body.appendChild(myCalculator.view.container);
}

window.addEventListener('load', startApplication );