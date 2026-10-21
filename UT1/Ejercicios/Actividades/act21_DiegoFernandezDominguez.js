"use strict";
{

    /*Alt + Z*/
    /**
     * 21. Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
     */

    let textito = "Hola Mundo";

    const reverseText = (texto) => {
        let arrayTextInver = texto.split("").reverse();
        let textoReverso = arrayTextInver.join("");

        return textoReverso

    }

    textitoReverso = reverseText(textito);
    console.log(textitoReverso);

}