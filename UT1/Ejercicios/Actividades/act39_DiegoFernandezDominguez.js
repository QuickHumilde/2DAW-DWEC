"use strict"
{
    /**
     * 39. Programa una función que dado un array de elementos, elimine los duplicados, pe.e mi Funcion (“x”,10,”x”,2,”10,10, true,true) devolverá [“x”,10,2,”10”,true]
     */

    const devolverArraySinDuplicados = (arrayDuplicados) => {
        let set = new Set(arrayDuplicados);
        return new Array(set);
    }

    let array = ["x",10,"x",2,"10",10, true,true];
    console.log(devolverArraySinDuplicados(array));
    console.log(array);
}