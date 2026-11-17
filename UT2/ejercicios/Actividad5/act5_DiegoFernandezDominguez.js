"use strict"
{
    /*
    */

    let divCompleto = document.querySelector(".pantalla-completa");
    let myP = document.createElement("p");
    let titulo = document.createElement("h1");
    titulo.innerHTML="EJERCICIO 5";
    myP.innerHTML="Coordenadas Desconocidas";
    myP.setAttribute("class", "parrafo-coords");
    divCompleto.insertAdjacentElement("afterbegin", titulo);
    divCompleto.insertAdjacentElement("beforeend", myP);

    divCompleto.addEventListener("mousemove", (evento) => {
        myP.innerHTML=`x:${evento.clientX} y:${evento.clientY}`
    })
}