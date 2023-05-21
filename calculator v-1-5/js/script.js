/*
let     btn = document.getElementsByClassName('btn');
let btnClear = document.getElementsByClassName('btnClear');
let display = document.getElementById('display');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', () => { display.value += btn[i].innerText });
    
}
*/

class view
{
    constructor()
    {
    
        this.inputt = document.createElement("input");
        this.inputt.classList.add('inputt');
        this.inputt.colspan = 4;

        this.btnCero = document.createElement("button")
        this.btnCero.innerText = "0";
        this.btnCero.classList.add('btnCero', 'btn');
    
        this.btnOne = document.createElement("button");
        this.btnOne.innerText = '1';
        this.btnOne.classList.add('btnOne', 'btn');

        this.btnTwo = document.createElement("button");
        this.btnTwo.innerText = '2';
        this.btnTwo.classList.add('btnTwo','btn'); 

        this.btnThree = document.createElement("button");
        this.btnThree.innerText = '3';
        this.btnThree.classList.add('btnThree','btn');

        this.btnFour = document.createElement("button");
        this.btnFour.innerText = '4';
        this.btnFour.classList.add('btnFour','btn');

        this.btnFive = document.createElement("button");
        this.btnFive.innerText = '5';
        this.btnFive.classList.add('btnFive','btn');

        this.btnSix = document.createElement("button");
        this.btnSix.innerText = '6';
        this.btnSix.classList.add('btnSix','btnSix');

        this.btnSeven = document.createElement("button");
        this.btnSeven.innerText = '7';
        this.btnSeven.classList.add('btnSeven','btn');

        this.btnEight = document.createElement("button");
        this.btnEight.innerText = '8';
        this.btnEight.classList.add('btnEight','btn');

        this.btnNine = document.createElement("button");
        this.btnNine.innerText = '9';
        this.btnNine.classList.add('btnNine','btn');

        this.btnEqual = document.createElement("button")
        this.btnEqual.innerText = "=";
        this.btnEqual.classList.add('btnEqual','btn');

        this.btnAdd = document.createElement("button");
        this.btnAdd.innerText = '+';
        this.btnAdd.classList.add('btnAdd','btn');

        this.btnSub = document.createElement("button");
        this.btnSub.innerText = '-';
        this.btnSub.classList.add('btnSub','btn');

        this.btnMul = document.createElement("button");
        this.btnMul.innerText = 'X';
        this.btnMul.classList.add('btnMul','btn');

        this.btnDiv = document.createElement("button");
        this.btnDiv.innerText = '/';
        this.btnDiv.classList.add('btnDiv','btn');

        this.btnClean = document.createElement("button");
        this.btnClean.innerText = 'C';
        this.btnClean.classList.add('btnClean','btn');


        //document.body.appendChild(inputt);
        document.body.appendChild(btnCero);
        document.body.appendChild(btnOne);
        document.body.appendChild(btnTwo);
        document.body.appendChild(btnThree);
        document.body.appendChild(btnFour);
        document.body.appendChild(btnFive);
        document.body.appendChild(btnSix);
        document.body.appendChild(btnSeven);
        document.body.appendChild(btnEight);
        document.body.appendChild(btnNine);
        document.body.appendChild(btnEqual);
        document.body.appendChild(btnClean);
        document.body.appendChild(btnAdd);
        document.body.appendChild(btnMul);
        document.body.appendChild(btnDiv);
    }    
}

class model
{
    constructor()
    {
       
    }
}

class controller
{
    constructor(viewReference, modelReference)
    {

      this.innerView = viewReference;
      this.innerModel = modelReference;

      this.innerView.btnCero.addEventListener('click', ()=>{this.onButton0Click() } );
      this.innerView.btnOne.addEventListener('click', ()=>{this.onButton1Click() } );
      this.innerView.btnTwo.addEventListener('click', ()=>{this.onButton2Click() } );
      this.innerView.btnThree.addEventListener('click', ()=>{this.onButtonPlusClick() } );
      this.innerView.btnFour.addEventListener('click', ()=>{this.onButtonCalculateClick() } );
      this.innerView.btnAdd.addEventListener('click', ()=>{ this.onButtonAddClick() } ); 
    } 
    
    onButtonAddClick()
   {     
      this.innerView.input.value += '+'; 
      alert(a)
    
   }
}


function startapplication() 
{
    this.myView = new view(); 
    this.myModel = new model();
    this.myController = new controller(this.view,this.model);

}

window.addEventListener('load', startapplication)