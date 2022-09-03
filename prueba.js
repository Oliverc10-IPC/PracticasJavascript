
//function saludar(nombre, apellido, curso) {
    //Interpolado con comillas invertidas
  //  var resultado = `Hola ${nombre} ${apellido}, bienvenido al curso ${curso}`
    //return resultado;
//}
//Hola <nombre> <apellido>, bienvenido al curso + <curso>


//Procesando filas
/* aca un ejemplo de como hacer un parrafo comentado
visto en las clases.
Dada fila donde el nombre y apellodo separado por ","
Retornar el nombre y apellido con la primera letra en mayuscula
y el resto en minuscula

Ejemplo: para la fila `    luiS, BLANCO    `
el resultado es `Luis Blanco`
*/
function capitalize(x){
return resultado= x.charAt(0).toUpperCase()+ x.slice(1).toLowerCase();
}

function procesarFila(fila){
    var arreglo = fila.split(",");
    var nombre = arreglo[0].trim();
    var apellido = arreglo[1].trim();
  return capitalize(nombre)+" "+ capitalize(apellido);

}
var fila= "   anA, OLIVARES "

function imprimirReceta(nombreReceta,ing1,ing2,ing3,ing4,ing5){

    var mensaje = `Mi Bolsa de Comida: Nombre de la receta: ${nombreReceta}, Ingredientes: ${ing1}, ${ing2}, ${ing3}, ${ing4}, ${ing5}`;
    console.log(mensaje);
}  

function encabezadoEvento(evento,lugar){
var mensaje = `Evento: ${evento}. Lugar: ${lugar}`
return mensaje;
}

function limpiarNombreParticipante(nombreApellido){
  var mensaje= nombreApellido.split(",");
  var nombre = mensaje[0].trim().toLowerCase();
  var apellido=mensaje[1].trim().toUpperCase();
  var nombreLimpio= `${apellido}, ${nombre}`;
  return nombreLimpio;
}

console.log(encabezadoEvento("Curso de desarrollo","Online"));
console.log(limpiarNombreParticipante("   OLIVER,    CrUz     "));