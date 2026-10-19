"use strict";
{

    /*Alt + Z*/
    // 19. Programa una función que dada una String te devuelva un Array de textos separados por cierto carácter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']

    const devolverTextoRecortado = (cadena, separador) => {
        return cadena.split(separador)
    }

    console.log(devolverTextoRecortado("Hola mundillo", ' '));

}