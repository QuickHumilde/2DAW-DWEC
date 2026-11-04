"use strict"
{
 
    let datos = [{nombre: "Pepa Márquez Sete", DNI: "21147465T", edad: 6},
        {nombre: "Federico García Molina", DNI: "24545535G", edad: 32},
        {nombre: "María González Mújica", DNI: "45678912L", edad: 4},
        {nombre: "Ángel García Álvarez", DNI: "28765000G", edad: 14}]

    // EJERCICIO 1: TILDES

    const ejercicio1 = (array_original) => {
        let identificadores = [];
        array_original.map((elem) => {
            //elem.nombre= reemplazarTildes(elem.nombre.toLowerCase());
            let separados =  elem.nombre.split(" ");
            let firstChar = separados[0].charAt(0).toLowerCase();
            let threeFirst = separados[1].substring(0, 3).toLowerCase();
            let threeSecond = separados[2].substring(0, 3).toLowerCase();
            let dniChars = elem.DNI.substring(5, 8);
            identificadores.push(`${firstChar}${threeFirst}${threeSecond}${dniChars}`);
            return identificadores;
        })
        return identificadores;
    }

    const ejercicio2 = (array_original) => {
        let regExp = /^[0-9]{8}[A-Za-z]$/
        let dnis = [];
        let letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
        array_original.map((elem) => {
            dnis.push(elem.DNI);
        })

        let validos = dnis.filter((elem) => {
            if (regExp.test(elem)){
                let dniSinLetra = elem.substring(0, 8);
                let letraDni = elem.charAt(8)
                if (letras[dniSinLetra%23] == letraDni.toUpperCase()){
                    return elem
                }
            }
        })

        return validos;
    }

    const ejercicio3 = (array_original) => {
        let ordenados;
        let random =  Math.floor(Math.random()*(10-1+1)+1);
        console.log(`Numero random: ${random}`)
        if (random%2 === 0){
            ordenados = array_original.sort((a, b) =>  b.edad-a.edad );
        } else {
            ordenados = array_original.sort((a, b) =>  a.nombre.length-b.nombre.length );
        }

        return ordenados;
    }

    const ejercicio4 = (array_original) => {
        let primos = array_original.filter((elem) => esPrimo(elem.edad/2));

        let ordenados = primos.sort((a, b) =>  a.edad-b.edad );

        let resultado = ordenados.map((elem) => {
            return elem.edad    
        })

        return resultado;

    }

    const esPrimo = (numerin) => {

        if (numerin <= 2){
            return true
        }

        if (numerin%2 === 0) {
            return false
        } else {
            for (let i = 3; i < numerin ; i++) {
                if (numerin%i === 0) {
                    return false;
                }
            }
        }
        return true
    }

    const reemplazarTildes = (cadena) => {
        cadena.replace("á", "a");
        cadena.replace("é", "e");
        cadena.replace("í", "i");
        cadena.replace("ó", "o");
        cadena.replace("ú", "u");
        console.log(cadena)

        return cadena
    }

    console.log("--------------------------------------");
    console.log("EJERCICIO 1");
    console.log(ejercicio1(datos));
    console.log("--------------------------------------");
    console.log("\n");

    console.log("--------------------------------------");
    console.log("EJERCICIO 2");
    console.log(ejercicio2(datos));
    console.log("--------------------------------------");
    console.log("\n");

    console.log("--------------------------------------");
    console.log("EJERCICIO 3");
    console.log(ejercicio3(datos));
    console.log("--------------------------------------");
    console.log("\n");

    console.log("--------------------------------------");
    console.log("EJERCICIO 4");
    console.log(ejercicio4(datos));
    console.log("--------------------------------------");
    console.log("\n");


}