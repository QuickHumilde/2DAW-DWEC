"use strict"
{
    /*Alt + Z*/
    /**
     * 27. En un vector de números, indicar:
            a. El número de elementos del vector. --
            b. Cuántos son pares y cuántos impares y cuáles son. --
            c. La suma de todos los números negativos. --
            d. El producto de todos los números positivos. --
            e. Cuántos son primos y cuáles son. --
            f. Los números que ocupan las posiciones pares del vector. --
            g. El número mayor. --
            h. El número menor. --
            i. La media de todos los números, los números que están por encima y los que están por
            debajo. --
            j. El vector ordenado de mayor a menos y viceversa. --
            k. Buscar un valor introducido por el usuario e indicar si existe o no.
     */

    const esPrimo = (numero) => {
        if (numero < 2) {
            return false;
        }

        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                return false;
            }
        }

        return true;
    };
        

    let vector = [1,2,-3,4,-5];
    console.log("a) Número de elementos:", vector.length);

    let pares = [];
    let impares = [];
    let sumaNegativos = 0;
    let productoPositivos = 1;
    let suma = 0;
    let media = 0;

    let primos = [];
    let posicionesPares = [];

    let encima = [];
    let debajo = [];

    for (let i = 0; i < vector.length; i++) {

        let numerin = vector[i];

        if (numerin%2 ===0){
            pares.push(numerin);

        } else {
            impares.push(numerin);
        }

        if (numerin < 0) {
            sumaNegativos += numerin;
        }
    
        if (numerin > 0) {
            productoPositivos *= numerin;
        }
        
        if (esPrimo(numerin)){
            primos.push(numerin);
        }

        if (i%2 === 0){
            posicionesPares.push(numerin);
        }

        suma += vector[i];
        
    };

    for (const num of vector) {

        if (num > media) {
            encima.push(num);
        } else if (num < media) {
            debajo.push(num);
        }
    }

    console.log(`El numero mayor es: ${Math.max(...vector)}`);
    console.log(`El numero menor es: ${Math.min(...vector)}`);
    console.log(`La media de los numeros es: ${suma/vector.length}`)

    console.log("Por encima de la media:", encima);
    console.log("Por debajo de la media:", debajo);

    media = suma / vector.length;

    let ascendente = [...vector].sort((a, b) => a - b);
    let descendente = [...vector].sort((a, b) => b - a);
    console.log(`De menor a mayor: ${ascendente}`);
    console.log(`De mayor a menor: ${descendente}`);

    let valor = Number(prompt("Introduce un numero para buscar:"));

    if (vector.includes(valor)) {
        console.log(`El número", ${valor}, "SÍ existe en el vector.`);
    } else {
        console.log(`El número", ${valor}, "NO existe en el vector.`);
    }


}