// VARIABLES NUMERICAS
 var numeroDecimal  = 5;
console.log("numeroDecimal",numeroDecimal);

// Variables de texto
var palabra ="palabras";
console.log("palabra",palabra);

// Variables booleanas
var booleana =true;
console.log("boleana",booleana);

// Variables de tipo Arreglo (Arrays)
var colores =["rojo","amarillo"];
console.log("colores",colores[1]);

// Variables de tipo Objeto(object: propiedad y el valor

var jugo = {"ingrediente1":"fresa",
            "ingrediente2":"mandarina",
            "ingrediente3":"banana"}
console.log("Jugo",jugo.ingrediente3);

// Variables DOM ('Modelos de Objetos de Documentos')
/*El DOM es la estructura de objetos que genera el navegador
cunado se carga un documento y se puede alterar mediante
Javascript para cambiar dinamicamente los contenidos y
aspectos de la pagina.*/
 var caja = document.querySelector("#caja");
 console.log("caja",caja);

 caja.style.width="200px";
 caja.style.height ="200px";
 caja.style.background ="red";

 var cajas = document.querySelectorAll(".cajas");
 console.log("cajas",cajas);
