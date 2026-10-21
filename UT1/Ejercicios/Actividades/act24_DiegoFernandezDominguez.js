"use strict"
{
    /*Alt + Z*/
    // 24. Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá "1, 2, 3, 4 y 5.

    const eliminarPatron = (texto, patron) => {
        
        let arrayText = texto.split(patron)
        return arrayText.join("")

    }

    console.log(eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"))

}