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
    console.log(elementoCiclomotor);
    console.log(elementoCiclomotor.textContent);

    console.log("---------------------");

    let elemento = document.querySelector("#idCoches"); // id (#) o class (.)
    console.log(elemento);

    elemento = document.querySelector(".cListaVehiculos"); // id (#) o class (.)
    console.log(elemento);
    elemento = document.querySelector(".cListaVehiculos"); // id (#) o class (.)
    console.log(elemento);

    elemento = document.querySelector("ul"); // id (#) o class (.)
    console.log(elemento);

    elemento = document.querySelector("p"); // id (#) o class (.)
    console.log(elemento);
    console.log(elemento.textContent);

    elemento = document.querySelector('[name=nLista]'); // id (#) o class (.)
    console.log(elemento);

    console.log("---------------------");

    let elementos = document.querySelectorAll('[name=nLista]'); // id (#) o class (.)
    console.log(elemento);
    elementos.forEach(elemento => {
        console.log(elemento);
        console.log(elemento.textContent);
    });

}