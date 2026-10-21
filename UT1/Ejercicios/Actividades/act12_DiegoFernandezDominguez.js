"use strict";
{

    /*Alt + Z*/
    /*12. Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F */

    const cambioGrados = (temperatura, medida) => {

        let nuevaTemperatura = temperatura;

        if (medida.toUppercase === "C"){
            nuevaTemperatura = (temperatura *9/5) + 32;

        } else if(medida.toUppercase === "F"){
            nuevaTemperatura = (temperatura -32) * 5/9;
        }

        return nuevaTemperatura;
    };

    console.log(cambioGrados(0, "c"));
    console.log(cambioGrados(32, "f"));
    console.log(cambioGrados(43, "g"));

}