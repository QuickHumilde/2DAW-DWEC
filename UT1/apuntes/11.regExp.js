"use strict"
{
    const r1=/.a.o/i;
    // i => ignore case

    //DATO dato dAro daTO
    const r2 = new RegExp(".a.o", "i");
    const r3 = new RegExp(/.a.o/, "i");

    console.log(r1.test("GATO"));
    console.log(r1.test("Pato"));
    console.log(r1.test("perro"));

    const r4 = new RegExp("^futbol", "m"); // ^ => al principio
    // m => multilinea
    console.log(r4.test("no me gusta el futbol"));
    console.log(r4.test("futbol es para weno, eso"));
    console.log(r4.test("Sevilla\nfutbol club"));

    const r5 =/./;

    console.log(r5.test("x")) // true
    console.log(r5.test("abc")) // true
    console.log(r5.test("")) // false

    let s  =/table footballfootbolin/y;
    const r6 = /foo/y; // sticky
    
    // y => last index
    console.log(r6.lastIndex)
    console.log(r6.test(s));
    console.log(r6.lastIndex)

    /*CARACTERES ESPECIALES*/
    // . -> Cualquier caracter
    // -> invierte el significado del caracter. Si especial, lo escapa

    const r7 = /\.a.o./i;
    console.log(r7.test(".GATO"));
    console.log(/\.a.o/i.test(".aTO"));

    console.log(/A./.test("A ")); // TRUE
    console.log(/A./.test("AB")); // TRUE

    // \s --> un espacio
    // [] --> cualquiera de los caracteres del interior
    // [^] --> no existen los caracteres del interior del corchete. Ej: [^abcde]
    // | --> alternativa: lo que esta a la izquierda o lo que esta en la derecha
    // $ --> Que acabe asi

    const r8 = /^[^aeiou]$/i;
    console.log(r8.test("BI"));

    const r9 = /[^aeiou]|.$/i;
    console.log(r9.test("xxxxxxxxx"));

    const r10 = /[^ca|ma]/i;
    console.log(r10.test("mapa"));

    /*
        [0-9] = \d
        [^0-9] = \D
        [A-Z] (ni la Ñ ni tildes)
        [a-z]
        [A-Za-z0-9] = \w (la 'w' incluye el guion bajo)
        [^A-Za-z0-9] = \W (la 'W' verifica que no incluya el '_')
        [ \t\r\n] = \s O un tabulador, un salto de carro o un salto de linea
        [^ \t\r\n] = \S
    */

    const r11 = /^[A-Za-z0-9]$/;
    console.log(r11.test("7"));

    /**
     * \b = texto con espacios o simbolos de puntuacion, o al principio o al final
     * \B = NO texto con espacios o simbolos de puntuacion, o al principio o al final
     */

    const r12 = /fo\b/i;
    console.log(r12.test("Esto es un parrafo"));

    const r13 = /\bfo/i;
    console.log(r13.test("Esto es un parrafos"));

    /**
     *  * --> 0 o mas ocurrencias
     *  + --> 1 o mas ocurrencias
     *  ? --> el caracter que precede puede aparecer o no
     */

    const r14 = /a*/;
    r14.test(""); // true
    r14.test("a"); // true
    r14.test("aaaaa"); // true
    r14.test("bbbb"); // true

    const r15 = /a+/;
    r15.test(""); // false
    r15.test("a"); // true
    r15.test("aaaaa"); // true
    r15.test("bbbb"); // false

    const r16 = /disparos?/;

    r16.test("eschuche disparos en la habitacion"); // true
    r16.test("eschuche un disparo en la habitacion"); // true

    /**
     * {n} --> se repite n veces
     * {n,} --> se repite n o mas veces
     * {n,m} --> se repite entre n y m veces
     * 
     */

    const r17 = /[0-9]{2}/;
    r17.test(42); // true
    r17.test(42); // true
    r17.test(1); // false
    r17.test(141); // false

    const r18 = /^[0-9]{2}$/;
    r18.test(4) // false
    r18.test(55) // true
    r18.test(125) // false

    const r19  = /^[0-9]{3,}$/;
    r19.test(43) // false
    r19.test(554) // true
    r19.test(1256) // true

    const r20 = /^[0-9]{2,5}$/;
    r20.test(3) // false
    r20.test(859) // true
    r20.test(125656) // true

    const r21 = /^\d{2}$/;
    r21.test("99"); // true
    r21.test("9a9"); // false
    r21.test("999"); // false
    r21.test("a99"); // false

    const r22 = /\w/;
    r22.test("_");

    const r23 = /\b[a-záéíóú]{3}\b/ig;
    let s2 = "la ola del mar es azul y tenia más sal que el salero"
    console.log(r23.lastIndex);
    console.log(r23.exec(s2));
    console.log(r23.lastIndex);
    console.log(r23.exec(s2));
    console.log(r23.lastIndex);

    let x = s2.match(r23) // te crea un array con las ocurrencias
    console.log(x)
}