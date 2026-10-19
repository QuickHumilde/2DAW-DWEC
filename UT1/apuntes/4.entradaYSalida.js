"use strict"
{
    console.time("espatula")
    let a = [[1,2,3], [4,5,6]];
    console.log("hoLA");
    console.log(a);
    console.table(a);
    console.timeEnd("espatula");

    // alert("Cuidao" + " que hay mucho maleante" + " suelto");

    // let respuesta = confirm ("¿Estas dispuest@ a vender tu alma al diablo por un bocata de jamon york y queso?");
    // console.log("Bocata jamon york y queso: " + respuesta);

    let otraRespuesta = prompt("Como te llamas?", "Victoria");
    console.log(otraRespuesta);
    console.log(typeof otraRespuesta);

    /* 
        Si escape --> null
        Si acepta sin haber escrito nada --> Cadena vacia
        Si cancelar --> null
        Si aceptar con datos --> string
    */

    let valorNumerico = parseInt(otraRespuesta);
    if (valorNumerico != NaN){
        console.log(valorNumerico);
    }
}