"use strict";
{

    /*Alt + Z*/
    // 18. Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFunción("Hola Mundo", 4) devolverá "Hola".

    const devolverTextoRecortado = (cadena, num_caracteres) => {
        return cadena.substring(0, num_caracteres)
    }

    console.log(devolverTextoRecortado("Hola mundillo", 4));

}