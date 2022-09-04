// Creacion de objeto

var evento = {
    nombre: "Expo Comicon",
    descripcion: "Evento de exposicion de comic",
    fecha: new Date(2022, 10, 03)
// Creacion de Funciones
}
function stringValido(string, largo) {
    string = string.trim();
    if (string.length >= largo) {
        return true;
    } else {
        return false
    }
}

function fechaValida(fecha, fechaMinima) {
    if (fecha >= fechaMinima) {
        return true;
    } else {
        return false;
    }
}
function eventoValido(evento) {
    if (stringValido(evento.nombre, 3) && stringValido(evento.descripcion, 10) && fechaValida(evento.fecha, new Date(2022, 09, 15))) {
        console.log("Evento Valido");
    } else {
        console.log("Evento invalido");
    }

}

eventoValido(evento);
