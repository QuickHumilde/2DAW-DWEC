"use strict"
{
    /**
     * 32. Programa una función que dada una cadena de texto cuente el número de vocales y
    consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5
     */

    const contVocCons = (cadena) => {
        let vocales = 0;
        let consonantes = 0;
      
        cadena = cadena.toLowerCase();
      
        for (let letra of cadena) {
          if ("aeiou".includes(letra)) {
            vocales++;
          } else if (letra >= "a" && letra <= "z") {
            consonantes++;
          }
        }
      
        return `Vocales: ${vocales}, Consonantes: ${consonantes}`;

    }
    console.log(contVocCons("Mecagomemeometirounpeo"));
}