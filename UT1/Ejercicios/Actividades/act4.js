"use strict";
{

    /*Alt + Z*/
    /*4. Utilizando un bucle, mostrar la suma, el producto y la media de los números introducidos hasta introducir un número negativo y entonces mostrar el resultado.
    */

    let numIntroducido;
    let suma = 0;
    let producto = 0;
    let media = 0;
    let cont = 0; 

    numIntroducido = Number(prompt("Dime el numerin", 0));
    
    while(numIntroducido >= 0 ){
        if (!isNaN(numIntroducido)){
            cont++
            suma += numIntroducido
            producto *= numIntroducido

            numIntroducido =  Number(prompt("Dime otro numerin"));

        } else {
            numIntroducido =  Number(prompt("Dime un numero >:("));
        }
        
    }

    media = suma / cont

    console.log(`Suma: ${suma}`)
    console.log(`Producto: ${producto}`)
    console.log(`Media: ${media}`)


}