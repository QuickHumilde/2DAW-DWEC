"use strict" 
{

    // EXERCISE 1: Using prompt, ask a number N to an user and create in DOM N paragraphs with a random number between 0 and 10 each one (both included).

    let numerin = prompt("Dime un numero", 10);

    for (let i = 0; i < numerin; i++) {

        let nuevoP = document.createElement("p");

        nuevoP.setAttribute("class","cEj1");

        nuevoP.innerHTML = Math.floor(Math.random() * 11);

        document.body.append(nuevoP);

    } 


    //EXERCISE 2: Using prompt, ask a number N to an user and create in DOM N H2 elements writing your name in bold and italic + a random number between 0 and 10 in each H2.

    for (let i = 0; i < numerin; i++) {

        let cont = i
        let nuevoH2 = document.createElement("h2");
        nuevoH2.setAttribute("id", `idEj2_${++cont}`);
        
        nuevoH2.innerHTML = '<i><strong>Diego</strong></i>' + Math.floor(Math.random() * 11);

        cont=0;
        document.body.append(nuevoH2);
    }


    //EXERCISE 3: Using prompt, ask a number N to an user and create in DOM an unordered list with N random numbers between 1 and 15 for each element in bold.

    let nuevoUl = document.createElement("ul");
    nuevoUl.setAttribute("class", "cEj3");
    
    for (let i = 0; i < numerin; i++) {
    
        let nuevoLi = document.createElement("li");
    
        nuevoUl.append(nuevoLi);
    
        nuevoLi.outerHTML = `<li><strong>${Math.floor(Math.random() * 15 + 1)}</strong></li>`;
    
    }
    
    document.body.append(nuevoUl);

    //EXERCISE 4: Create an image and put it after the last random number in exercise number one.

    let nuevaImg = document.createElement("img");
    nuevaImg.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg");
    nuevaImg.style.setProperty("width", "50px");

    let listaEj1 = document.querySelectorAll(".cEj1");
    let ultimoPEj1 =  listaEj1[listaEj1.length-1];

    ultimoPEj1.insertAdjacentElement("afterend",nuevaImg);

    //EXERCISE 5: Create a link to www.google.es before the first child of the H2 in exercise number two

    let nuevoLink = document.createElement("a");

    nuevoLink.setAttribute("href", "https://www.google.es");
    nuevoLink.innerHTML = "Google";
    
    let listaEj2 = document.querySelector("#idEj2_1");
    let nuevoBr = document.createElement("br");
    
    listaEj2.insertAdjacentElement("afterbegin", nuevoLink);
    nuevoLink.insertAdjacentElement("afterend",nuevoBr);

    //EXERCISE 6: Create a paragraph with your name and put it after the end of unorderer list in exercise three

    let listaEj3 = document.querySelector(".cEj3");

    let nuevoP2 = document.createElement("p");
    
    nuevoP2.innerHTML = "Diego";
    
    listaEj3.insertAdjacentElement("afterend", nuevoP2);

}