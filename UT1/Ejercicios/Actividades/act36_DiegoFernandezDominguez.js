"use strict"
{
    /**
     * 36. Programa una función que dado un array devuelva el número más alto y el más bajo de dicho array, p.e. miFuncion([1,5,34,99,-2]) devolverá [99,-60]
     */

    const devolverMasAltoYMasBajo = (array)  => {
        return [Math.min(...array), Math.max(...array)]
    }

    console.log(devolverMasAltoYMasBajo([1, 5, 34, 99, -2]));
}