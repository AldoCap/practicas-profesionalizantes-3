let btn = document.getElementsByClassName('btn');
let btnClear = document.getElementsByClassName('btnClear');
let display = document.getElementById('display');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', () => { display.value += btn[i].innerText });
    
}
