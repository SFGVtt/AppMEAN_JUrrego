/* =============================================================
clases
Las clases, son funciones constructoras y siempre la vamos a iniciar con
mayusculas
ejemplo: new String()
============================================================= */
/* =================================================================
CLASES PRIMITIVAS
================================================================= */
// Clase String
var string = new String("Esto es un string")
console.log("string", string);
// Clase Number
var number = new Number(12)
console.log(number);
// Clases Booleanas
var boolean = new Boolean(false)
console.log(boolean);
/* =================================================================
CLASES COMPUESTAS
================================================================= */
// CLASE ARRAYS
var array = new Array("rojo", "amarillo", "verde")
console.log("array", array);

// Clase media-object
var object = new Object({
  nombre: "Pedro",
  edad: 30
})
console.log("object", object);

/* =======================================================
CLASES CREADAS PRO EL PROGRAMADOR
=======================================================*/
// Paso 1- Creamos el Prototipo
function Persona() {
  // Propiedades Públicas
  this.nombre;
  this.edad;
}
// Paso2 Creamos la clase Persona e instanciamos un Object llamado yo

var yo = new Persona();
yo.nombre = "Juan";
yo.edad = "21 años";
console.log("yo", yo);

// Clases con Parametros
function Animales(nombre, raza) {
  this.nombre = nombre;
  this.raza = raza;
}
var mascota = new Animales("perro", "pitbull")
console.log("mascota", mascota);
