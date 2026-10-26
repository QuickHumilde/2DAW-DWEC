"use strict"
{
    /**
     * getElementsByTagName
     * getElementsByClassName
     * getElementsByName
     * getElementsById
     * querySelector
     * querySelectorAll
     */

    let listas = document.getElementsByTagName("ul");
    for (const elem of listas) {
        console.log(elem);
        console.log(elem.textContent);
        let myArray1 = elem.textContent.trim().split("\n");
        console.log(myArray1);
    }

    console.log("---------------------");

    listas = document.getElementsByClassName("cListaPersonajes");
    for (const elem of listas) {
        console.log(elem);
        console.log(elem.textContent);
    }
    console.log("---------------------");

    listas = document.getElementsByName("nLista");
    for (const elem of listas) {
        console.log(elem);
        console.log(elem.textContent);
    }
    console.log("______________________________");

    listas.forEach(elem => {
        console.log(elem);
        console.log(elem.textContent);
    });

    console.log("---------------------");

    let elementoCiclomotor = document.getElementById("idCiclomotores");
}