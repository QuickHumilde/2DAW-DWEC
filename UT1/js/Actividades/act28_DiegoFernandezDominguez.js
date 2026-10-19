"use strict"
{
    /*Alt + Z*/
    /**
     *28. En un vector de cadenas, indicar:
        a. La cadena más corta. --
        b. La cadena más larga. --
        c. La cadena con más letras ‘a’. --
        d. Cuántas cadenas hay que tengan la ‘b’ y cuáles son.
     */

    let vector = ["casa", "perro", "banana", "ordenador", "barco", "sol"];

    let corta = vector[0];
    let larga = vector[0];
    let cadenaMasAs = vector[0];
    let cantidadAsMayor = 0;
    let cadenasConB = [];

    for (const cadena of vector) {

        if (cadena.length < corta.length) {
            corta = cadena;
        }

    }


    for (const cadena of vector) {

        if (cadena.length > larga.length) {
            larga = cadena;
        }

    }

    console.log(`La cadena mas corta es : ${corta}`);
    console.log(`La cadena mas larga es : ${larga}`);

    for (const cadena of vector) {

        let cantidadAs = 0;

        for (const letra of cadena) {

            if (letra.toLowerCase() === "a") {
                cantidadAs++;
            }

        }

        if (cantidadAs > cantidadAsMayor) {
            cantidadAsMayor = cantidadAs;
            cadenaMasAs = cadena;
        }

    }

    console.log(`La cadena con mas 'a' es: ${cadenaMasAs}`);
    
    for (const cadena of vector) {
    
        if (cadena.toLowerCase().includes("b")) {
                cadenasConB.push(cadena);
        }
    }

    console.log(`Hay un grandioso total de: ${cadenasConB.length} de cadenas con 'b'`);
    console.log(`Las cadenas con 'b' son: ${cadenasConB}`);
}