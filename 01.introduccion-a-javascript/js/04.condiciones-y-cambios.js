/* =======================================
CONDICIONES
======================================= */
var a = 5;
var b = 10;
if (a > b) {
  console.log("a es mayor que b");
} else if (a == b) {
  console.log("a es igual a b");
} else {
  console.log("a no es lo mismo que b, y a es menor que b");
}

/* =================================================
CAMBIOS Metodo switch
=================================================*/
var dia = "martes";

switch (dia) {
  case "sabado":
    console.log("voy a estudiar php");
    break;
  case "martes":
    console.log("voy a estudiar java");
    break;
  case "miercoles":
    console.log("voy a estudiar python");
    break;
  case "jueves":
    console.log("voy a estudiar Ruby");
    break;
  case "viernes":
    console.log("voy a estudiar linux");
    break;
  case "domingo":
    console.log("voy a  descansar");
    break;

  default:
    console.log("voy a estudiar Javascript");

}
