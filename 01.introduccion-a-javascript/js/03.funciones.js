/* =====================================
FUNCIONES SIN PARAMETROS
===================================== */

// Declaramos la función
function saludo(){
console.log("saludo","hola");
}

// Ejecutamos la función
saludo();

/* =====================================
FUNCIONES CON PARAMETROS
===================================== */

// Declaramos la función
function suma(digito1,digito2){
  var resultado = digito1+digito2;
console.log("resultado de la suma =",resultado);
}

function resta(digito1,digito2){
  var resultado = digito1-digito2;
console.log("resultado de la resta =",resultado);
}

function multiplicacion(digito1,digito2){
  var resultado = digito1*digito2;
console.log("resultado de la multiplicacion =",resultado);
}

function division(digito1,digito2){
  var resultado = digito1/digito2;
console.log("resultado de la division =",resultado);
}

// Ejecutamos las funciónes
suma(5,9);
resta(10,2);
multiplicacion(10,5);
division(5,0);

/*=====================================================
FUNCIONES CON RETORNO SIN PARAMETROS
=====================================================*/
function retorno1(){
  var numero=5;
  return numero;
}
console.log("El retorno de la funcion es: ",retorno1());

/*=====================================================
FUNCIONES CON RETORNO CON PARAMETROS
=====================================================*/
function retorno2(numero){
  return numero;
}
console.log(retorno2(20));
