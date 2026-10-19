"use strict"
{
    let persona = {
        nombre: "pepe",
        edad: 30,
        ciudad: "Sevilla"
    }

    console.log(persona);
    console.log(persona.edad);
    console.log(persona["edad"]);
    persona.edad = 40;
    persona["edad"] = 50
    console.log(persona);

    let animal = {
        tipo: "gato",
        patas: 2,
        bigotes: true,
        dimensiones: {
            alto: 40,
            ancho: 30,
            largo: 50,
        },
        maullar(){
            console.log(`Soy un ${this.tipo} que hace mucho miau miau`)
        }
    }

    console.log(animal);
    animal.dimensiones.largo = 60;
    console.log(animal);
    animal["dimensiones"]["largo"] = 90;
    console.log(`El ${animal.tipo} mide ${animal.dimensiones.largo} dm de alto`)
    animal.maullar();
    console.log(Object.keys(animal)) // array con las claves
    console.log(Object.values(animal)) // array con los valores

    // DESTRECTURING O DESTRUCTURACION
    const {tipo, bigotes, dimensiones} = animal
    console.log(tipo);
    console.log(bigotes);
    animal.tipo = "perro";
    console.log(tipo);

    const{alto, ancho, largo} = dimensiones;
    console.log(alto);

    const producto = {
        nombreProducto: "Reloj",
        tipo: "bolsillo",
        tamaño: "grande",
    }
    const colores = {
        esfera: "blanco",
        correa: "negro",
    }

    const productoCompleto = {producto,colores}; // por referencia pero no los une en uno solo
    console.log(productoCompleto.producto.nombreProducto);
    producto.nombreProducto= "anillo";
    console.log(productoCompleto.producto.nombreProducto);

    const productoCompletoCopia = {...producto,...colores}; //copia y une los dos en uno
    console.log(productoCompletoCopia);

}