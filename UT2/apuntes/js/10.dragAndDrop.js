"use strict"
{
    let cajaRoja = document.querySelector(".cajaRoja");
    let cajaAzul = document.querySelector(".cajaAzul");
    let contenedor = document.querySelector(".contenedor");

    let cajaArrastrada = 0;

    cajaRoja.addEventListener("dragstart", function(evento){
        console.log("dragstart");
        cajaArrastrada = evento.target;
    })
    
    cajaAzul.addEventListener("dragstart", function(evento){
        console.log("dragstart");
        cajaArrastrada = evento.target;
    })

    cajaRoja.addEventListener("drag", function(evento){
        console.log("drag");
    })
    
    cajaAzul.addEventListener("drag", function(evento){
        console.log("drag");
    })

    
    cajaRoja.addEventListener("dragend", function(evento){
        console.log("dragend");
    })

    cajaAzul.addEventListener("dragend", function(evento){
        console.log("dragend");
    })
    
    contenedor.addEventListener("dragenter", (evento) => {
        console.log("dragenter");
    })

    contenedor.addEventListener("dragleave", (evento) => {
        console.log("dragleave");
    })
    
    contenedor.addEventListener("dragover", (evento) => {
        evento.preventDefault();
        console.log("dragover");
    })
    
    contenedor.addEventListener("drop",(evento) => {
        console.log("drop");
        //contenedor.appendChild(cajaArrastrada);
        contenedor.insertAdjacentElement("afterbegin", cajaArrastrada);
        if(contenedor.children.length===2) {
            let miH1 = document.createElement("h1");
            miH1.innerHTML= "Felicitations, eres un genio incomprendido";
            contenedor.insertAdjacentElement("afterend", miH1);
        }
    })
}