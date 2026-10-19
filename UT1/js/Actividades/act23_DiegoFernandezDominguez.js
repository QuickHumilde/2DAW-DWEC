"use strict";
{

    /*Alt + Z*/
    // 23. Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

    const palabraPalindroma = (texto) => {
        texto = texto.toUpperCase();
        let arrayTextInver = texto.split("").reverse();
        let textoReverso = arrayTextInver.join("");

        if (texto === textoReverso) {
            return true;
        } else {
            return false;
        }

    }

    console.log(palabraPalindroma("Salas"));
    console.log(palabraPalindroma("salas"));
    console.log(palabraPalindroma("Alameda"));

}