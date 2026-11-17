"use strict"
{
    console.log(window);
    console.log(window.document);
    console.log(window.document.documentElement);
    console.log(document.documentElement);
    console.log(document.head);
    console.log(document.body);
    console.log(document.doctype);
    console.log(document.characterSet); //UTF8
    console.log(document.title);
    console.log(document.documentElement.lang); //idioma
    console.log(document.links); // "Array" con los links
    console.log(document.images);
    console.log(document.forms);
    console.log(document.styleSheets);
    console.log(document.scripts);

    //Node
    //NodeList // [Node1, Node2, Node3, ...]

    //HTMLElement
    //let ac = new HTMLCollection(new HTMLElement(),);

    let myHTMLCo = document.links;
    
    /* NO FUNCIONAN CON FOREACH NI CON MAP

    myHTMLCo.array.forEach(element => {
        console.log(elem);
    });*/
    
    for (const elem of myHTMLCo) {
        console.log(elem + " Con ForOf");
    }

    for (let i = 0; i < myHTMLCo.length; i++) {
        console.log(myHTMLCo[i]+ " Con For");
        
    }

}