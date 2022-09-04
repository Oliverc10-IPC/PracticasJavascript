var deporte1={
    nombre: "Judo",
    origen: "Japon",
    clubes: [{dojo: "Sensei VU", ciudad: "Inmaculada"},{dojo:"Sensei Sato",ciudad:"Tokio"}]
}
function impresion(deporte1){
    for(var i=0;i< deporte1.clubes.length;i++){
        console.log("Club de "+deporte1.nombre + " "+ deporte1.clubes[i].dojo+", Ciudad: "+ deporte1.clubes[i].ciudad)
    
}
}
impresion(deporte1);