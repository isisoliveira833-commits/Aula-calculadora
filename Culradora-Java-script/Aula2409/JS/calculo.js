var n1 = document.querySelector('#n1');
var n2 = document.querySelector('#n2');

function somar(){
    resultado.innerHTML = Number(n1.value) + Number(n2.value);
}

function multiplicacao(){
    resultado.innerHTML = Number(n1.value) * Number(n2.value);
}
function subtraçao(){
    resultado.innerHTML = Number(n1.value) - Number(n2.value);
}
function divisao(){
    resultado.innerHTML = Number(n1.value)  / Number(n2.value);
}
function areadoquatrado(){
    resultado.innerHTML = Number(n1.value) *  Number(n2.value);
}
function areadotriangulo(){
    resultado.innerHTML = Number( n1.value)  * Number(n2.value) / Number(2);
}
function areadoretangulo(){
    resultado.innerHTML = Number(n1.value) * Number(n2.value);
}