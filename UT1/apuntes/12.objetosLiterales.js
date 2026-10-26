"use strict"
{
    // ---------- Objetos literales: clave: valor ----------
    let persona = {
        nombre: "pepe",
        edad: 30,
        ciudad: "Sevilla"
    }

    console.log(persona);           // { nombre: 'pepe', edad: 30, ciudad: 'Sevilla' }
    console.log(persona.edad);      // 30 -> notación de punto
    console.log(persona["edad"]);   // 30 -> notación de corchetes (útil si la clave está en una variable)
    persona.edad = 40;              // modifica la propiedad (el objeto es mutable aunque sea let)
    persona["edad"] = 50            // igual, con corchetes: pisa el 40
    console.log(persona);           // { nombre: 'pepe', edad: 50, ciudad: 'Sevilla' }

    // ---------- Objetos anidados y métodos ----------
    let animal = {
        tipo: "gato",
        patas: 2,
        bigotes: true,
        dimensiones: {              // objeto dentro de objeto
            alto: 40,
            ancho: 30,
            largo: 50,
        },
        maullar(){                  // método (forma abreviada de maullar: function(){...}) 
            console.log(`Soy un ${this.tipo} que hace mucho miau miau`)  // 'this' = el objeto que lo llama
        }
    }

    console.log(animal);            // { tipo: 'gato', patas: 2, bigotes: true, dimensiones: { alto: 40, ancho: 30, largo: 50 }, maullar: [Function: maullar] }
    animal.dimensiones.largo = 60;  // se encadenan puntos para llegar a la propiedad anidada
    console.log(animal);            // igual que antes pero con dimensiones: { alto: 40, ancho: 30, largo: 60 }
    animal["dimensiones"]["largo"] = 90;  // lo mismo con corchetes; largo = 90 (no se imprime)
    console.log(`El ${animal.tipo} mide ${animal.dimensiones.largo} dm de alto`)  // El gato mide 90 dm de alto (imprime largo, no alto)
    animal.maullar();               // Soy un gato que hace mucho miau miau
    console.log(Object.keys(animal)) // array con las claves -> [ 'tipo', 'patas', 'bigotes', 'dimensiones', 'maullar' ]
    console.log(Object.values(animal)) // array con los valores -> [ 'gato', 2, true, { alto: 40, ancho: 30, largo: 90 }, [Function: maullar] ]

    // DESTRECTURING O DESTRUCTURACION
    // crea variables con el mismo nombre que las claves y les copia el valor
    const {tipo, bigotes, dimensiones} = animal
    console.log(tipo);              // gato
    console.log(bigotes);           // true
    animal.tipo = "perro";          // cambia la propiedad del objeto...
    console.log(tipo);              // gato -> ...pero la variable es una copia (primitivo), no se entera

    // 'dimensiones' SÍ es referencia al mismo objeto anidado que animal.dimensiones
    const{alto, ancho, largo} = dimensiones;
    console.log(alto);              // 40

    const producto = {
        nombreProducto: "Reloj",
        tipo: "bolsillo",           // no choca con la const 'tipo': aquí es una clave, no una variable
        tamaño: "grande",
    }
    const colores = {
        esfera: "blanco",
        correa: "negro",
    }

    const productoCompleto = {producto,colores}; // por referencia pero no los une en uno solo
    // shorthand de { producto: producto, colores: colores }: guarda REFERENCIAS a los originales
    console.log(productoCompleto.producto.nombreProducto);  // Reloj
    producto.nombreProducto= "anillo";  // cambia el original y productoCompleto apunta al mismo
    console.log(productoCompleto.producto.nombreProducto);  // anillo -> se refleja porque es referencia, no copia

    const productoCompletoCopia = {...producto,...colores}; //copia y une los dos en uno
    // spread: copia superficial de las propiedades en un objeto nuevo y plano (si se repite una clave gana la última)
    console.log(productoCompletoCopia);  // { nombreProducto: 'anillo', tipo: 'bolsillo', 'tamaño': 'grande', esfera: 'blanco', correa: 'negro' }

}