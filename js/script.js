
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
let pResult = document.querySelector('#resultado');


function btnOnClick() {
    let resultadoSuma = Number(input1.value) + Number(input2.value);    
    pResult.innerText = "Resultado " + String(resultadoSuma);
}

btn.addEventListener('click',btnOnClick);

