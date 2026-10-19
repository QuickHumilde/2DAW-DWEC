"use strict"
{
    /**
     * 35. Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25]
     */

    const elevarNumerosArray = (array) => {

        let arrayElevado = array.map((elem) => {
            return Math.pow(elem, 2);
        })

        return arrayElevado
    }

    console.log(elevarNumerosArray([1, 4, 5]))

}