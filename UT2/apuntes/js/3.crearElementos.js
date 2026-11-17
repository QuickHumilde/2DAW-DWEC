"use strict"
{
    // Crear un comentario
    let comentario = document.createComment("Esto es un comentario");
    
    // Crear un nodo de texto
    let nodoTexto= document.createTextNode("soy un texto chulaco");

    // Clonar nodos
    let otroNodoTexto = document.cloneNode(true);

    comentario.isConnected?console.log("está conectado"):console.log("no está conectado");
    nodoTexto.isConnected?console.log("está conectado"):console.log("no está conectado");

    let nuevoDiv = document.createElement("div");
    nuevoDiv.textContent = "nuevo div";
    
    let nuevoDiv2 = document.createElement("div");
    nuevoDiv.textContent = "nuevo div 2";
    nuevoDiv.append(nuevoDiv2);

    console.log(nuevoDiv);

    let nuevoDiv3 = document.cloneNode(true);
    console.log(nuevoDiv3);
    nuevoDiv.textContent += "otro texto";
    console.log(nuevoDiv);
    console.log(nuevoDiv3);

}