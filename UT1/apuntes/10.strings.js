"use strict"
{

    let s = "Hoy parece que LLUEVE";
    console.log(s.toLowerCase());
    console.log(s)

    let s2 = new String(" y yo soy soy inevitable");
    console.log(s.toUpperCase())

    console.log(s.concat(s2));
    console.log(s.indexOf("L"));
    console.log(s.indexOf("V", 15));
    console.log(s.charAt(0));
    console.log(s.lastIndexOf("E"));
    console.log(s.lastIndexOf("e", 15));
    console.log(s.replace("L", "Mecago"));

    let datos = "Peter:Benjamin:Parker:21";
    let arrayConDatos = datos.split(":");
    console.table(arrayConDatos);
    console.log(arrayConDatos);
    console.log(arrayConDatos[3]);
    console.log(datos.length);
    console.log(arrayConDatos.length);

    console.log(datos.substring(5));
    console.log(datos.substring(5, 15));
    datos.includes("Benjamin")?console.log("SI"):console.log("NO");

    let datos2 = new String("        con espacios      ");
    console.log(datos2);
    console.log(datos2.trim());
    console.log(datos2);

    console.log(datos.repeat(2));
}