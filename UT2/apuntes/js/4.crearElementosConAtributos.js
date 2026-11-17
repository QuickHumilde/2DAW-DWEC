"use strict"
{
    let nuevoDiv = document.createElement("div");
    nuevoDiv.id = "id1";
    nuevoDiv.className = "cDiv1";
    nuevoDiv.style = "color: red";
    //nuevoDiv.className += " cDiv2";
    nuevoDiv.classList.add("cDiv2");
    console.log(nuevoDiv);

    let nuevoParrafo= document.createElement("p");
    nuevoParrafo.setAttribute("id", "idP"); //nuevoParrafo.id = "idP"
    nuevoParrafo.setAttribute("name", "nP");
    nuevoParrafo.setAttribute("class", "cP");
    //nuevoParrafo.setAttribute("kk", "grande");
    console.log(nuevoParrafo.hasAttribute("id"));
    console.log(nuevoParrafo.hasAttribute("style"));
    console.log(nuevoParrafo.hasAttributes());
    let nombreAtributos = nuevoParrafo.getAttributeNames();
    console.log(nombreAtributos);
    nuevoParrafo.setAttribute("style", "color: red");
    console.log(nuevoParrafo);
    nuevoParrafo.removeAttribute("style")
    console.log(nuevoParrafo);

    let attrId = nuevoParrafo.getAttribute("id");
    console.log(attrId);
    
    let attrNodeId = nuevoParrafo.getAttribute("id");
    console.log(attrNodeId);

    let textoDelParrafo = document.createTextNode("texto del parrafo");
    nuevoParrafo.append(textoDelParrafo);

    nuevoDiv.append(nuevoParrafo);
    let np = nuevoDiv.appendChild(nuevoParrafo);
    np.setAttribute("id", "idP2");

    console.log(nuevoDiv);
    document.body.append(nuevoDiv);
    
    //03/11/2026
    //Eliminar atributos: removeAttribute y removeAttributeNode

    nuevoParrafo.setAttribute("saludar","hola");
    nuevoParrafo.setAttribute("insultar","feo");
    nombreAtributos=nuevoParrafo.getAttributeNames();
    console.log(nombreAtributos);
    nuevoParrafo.removeAttribute("saludar");
    nombreAtributos=nuevoParrafo.getAttributeNames();
    console.log(nombreAtributos);

    let atributoNodoEliminado = nuevoParrafo.removeAttributeNode(nuevoParrafo.getAttributeNode("insultar"));
    nombreAtributos=nuevoParrafo.getAttributeNames();
    console.log(nombreAtributos);

    let attr1 = nuevoParrafo.getAttributeNode("id"); //id = "idP2"
    let attr2 = nuevoParrafo.getAttribute("id");//idP2
    let attr3 = nuevoParrafo.id; //idP2
    console.log(attr1);
    console.log(attr2);
    console.log(attr3);

    // Atributos data
    let enlace = document.querySelector(".enlace");
    enlace.setAttribute("data-fono","cobrar dinero");
    enlace.setAttribute("data-description","chulako bellako");
    console.log(enlace.dataset);
    enlace.dataset.description = "hoy es martes";
    console.log(enlace.dataset);
    console.log(enlace.getAttribute("data-id"));

    // Atributos CSS
    console.log(enlace.style);
    console.log(enlace.style.backgroundColor);
    console.log(enlace.style.color);

    enlace.style.setProperty("text-decoration","none");
    enlace.style.textDecoration = "underline";
    enlace.style.setProperty("background-color","blue");
    enlace.style.display = "inline-block";
    enlace.style.width = "50%";
    enlace.style.textAlign = "right";

    let hmtl = document.documentElement;
    hmtl.style.backgroundColor = "#adea90";

    // classList.add .remove .toggle .contains
    let myH3 = document.querySelector("#idH3");
    myH3.classList.add("cUno");
    myH3.classList.add("cDos");
    console.log(myH3.classList);
    myH3.classList.remove("cDos");
    console.log(myH3.classList);
    myH3.classList.toggle("cUno"); // si existe la elimina; si no existe, la añade
    myH3.classList.toggle("cUno");
    console.log(myH3.classList[0]);
    console.log(myH3.classList.item(1));
    console.log(myH3.classList.contains("cUno"));
    console.log(myH3.classList.contains("cDos"));
    myH3.classList.replace("cUno", "cDos");

}
