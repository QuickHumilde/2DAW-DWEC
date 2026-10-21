"use strict"
{
    /*Alt + Z*/
    // 25. Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

    const esCapicua = (num) => {
        let numberString = num.toString();
        let numberStringRever = numberString.split("").reverse();
        numberStringRever = numberStringRever.join("");
        return numberString == numberStringRever;

    };

    console.log(esCapicua(2002));
    console.log(esCapicua(2020));
    console.log(esCapicua(8888));

}