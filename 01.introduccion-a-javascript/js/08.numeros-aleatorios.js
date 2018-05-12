var numeroAleatorio = document.querySelector("#numeroAleatorio");
var numero = 0;

/* =============================================================================
NUMEROS aleatorios
El objetivo Math permite realizar tareas matemáticas en los números.
Math.random = devueleun número aleatorio entre 0(inclusive), y1 (exclusivo)
Math.floor= redondea al número menor del decimal
Math.ceil = redondea al número mayor decimal
Math.round = devuelve el valor de x redondeado a su número entero más proximo
=============================================================================*/
numero = Math.ceil(Math.random() * 10);
//console.log("numero", numero);
numeroAleatorio.innerHTML = numero;
