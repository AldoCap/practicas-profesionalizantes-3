/*
let     btn = document.getElementsByClassName('btn');
let btnClear = document.getElementsByClassName('btnClear');
let display = document.getElementById('display');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', () => { display.value += btn[i].innerText });
    
}
*/
function onclick()
{
    alert("holis ")
}

function startapplication()
{   
    // creates a <table> element and a <tbody> element
    let input = document.createElement("input");
    input.classList.add('input')

    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");

    let btnCero = document.createElement("button")
    let btnCeroTex = document.createTextNode("0"); 
    btnCero.classList.add('btnCero');
    btnCero.appendChild(btnCeroTex);

    let btnEqual = document.createElement("button")
    let btnEqualTex = document.createTextNode("="); 
    btnEqual.classList.add('btnEqual');
    btnEqual.appendChild(btnEqualTex);

    let btnSum = document.createElement("button")
    let btnSumTex = document.createTextNode("+"); 
    btnSum.classList.add('btnSum');
    btnSum.appendChild(btnSumTex);


    // se crean las celdas
    for (let i = 1; i < 4; i++) 
    {
        // creacion de filas en tabla 
        let rowNumber = document.createElement("tr");
        let list = [1,2,3,'/',5,6,7,8,9]
      
        for (let j = 0; j < 4; j++) 
        {
            let btnNumber = document.createElement("button");
            let btnText = document.createTextNode(list[j]);
            btnNumber.appendChild(btnText);
            btnNumber.classList.add('button')

            // Agrega fila a celda
            rowNumber.appendChild(btnNumber);
        }
      
        // agregue la fila al final del cuerpo de la tabla
        tblBody.appendChild(rowNumber);
    }
      
    // Se agrega tbl a tblBody
    tbl.appendChild(tblBody);

    // Se agrega tabla y input  a body de etiqueta HTML
    document.body.appendChild( input);
    document.body.appendChild(tbl);
    document.body.appendChild(btnEqual);
    document.body.appendChild(btnCero);
    document.body.appendChild(btnSum);

/*
    for (let index = 0; index < 5; index++) {
        let btn = document.createElement('button');
        btn.innerText = 'Execute!'; 
        btn.classList.add('redBtn');
        btn.addEventListener('click', onclick)
        document.body.appendChild(  btn);
    }
*/    
    
}

window.addEventListener('load', startapplication)