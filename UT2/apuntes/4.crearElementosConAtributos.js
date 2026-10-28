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
    
}