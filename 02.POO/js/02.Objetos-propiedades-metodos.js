/* ============================================================
Objetos: Es una coleccion de propiedades y métodos
============================================================ */
var object = {
  // Una propiedad es una asociacion entre nombre y valor.
  nombre: "Gino",
  edad: 50,
  // El metodo es una funcion dentro de un Objetos
  descripcion: function() {
    console.log("Su nombre es " + object.nombre + " y tiene " + object.edad +
      " años.");
  },
  saludar: function(saludo) {
    console.log(saludo + " " + object.nombre);
  }
}
console.log("Nombre", object.nombre);
console.log("Edad", object.edad);
object.descripcion();
object.saludar("Hola")
  /* ============================================================
  Objetos PRIMITIVOS
  ============================================================ */
  // El objeto Date se utiliza para trabajar con fechas y horas.
  // https://www.w3schools.com/js/js_dates.asp
  // https://www.w3schools.com/jsref/jsref_prototype_date.asp
var d = new Date();
console.log("Dia: ", d);
var y = d.getFullYear();
console.log("Año: ", y);
var m = d.getUTCMonth();
console.log("Mes: ", m + 1);
