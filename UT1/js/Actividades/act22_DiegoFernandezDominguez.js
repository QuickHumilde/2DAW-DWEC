"use strict";
{

    /*Alt + Z*/
    // 22. Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.


    let textito = "hola mundo adios mundo";

    const contarAparicionPalabra = (texto, palabra) => {
        let palabras = texto.split(" ");
        let numVeces = 0;
        for (let i = 0; i < palabras.length; i++) {
            if (palabras[i] === palabra){
                numVeces++
            }
            
        }

        return numVeces

    }

    console.log(contarAparicionPalabra(textito, "mundo"));

}