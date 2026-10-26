"use strict"
{
    // ---------- Creación de regex: literal vs constructor ----------
    const r1 = /.a.o/i;          // literal. '.' = cualquier carácter, 'a' y 'o' literales
    // i => ignore case (ignora mayúsculas/minúsculas)

    //DATO dato dAro daTO  <- cosas que encajan con r1
    const r2 = new RegExp(".a.o", "i");      // constructor con string (hay que escapar las \ dobles)
    const r3 = new RegExp(/.a.o/, "i");      // constructor con un literal + flags nuevos

    console.log(r1.test("GATO"));   // true   -> G + A + T + O
    console.log(r1.test("Pato"));   // true   -> P + a + t + o
    console.log(r1.test("perro"));  // false  -> no hay ninguna 'a' en medio

    const r4 = new RegExp("^futbol", "m"); // ^ => al principio
    
    // m => multilinea: ^ y $ también valen al principio/final de CADA línea
    console.log(r4.test("no me gusta el futbol"));     // false -> "futbol" no está al principio
    console.log(r4.test("futbol es para weno, eso"));  // true  -> empieza por futbol
    console.log(r4.test("Sevilla\nfutbol club"));      // true  -> gracias a 'm', ^ encaja tras el \n

    const r5 = /./;  // un carácter cualquiera (menos salto de línea)

    console.log(r5.test("x"))   // true
    console.log(r5.test("abc")) // true  -> basta con que haya al menos uno
    console.log(r5.test(""))    // false -> cadena vacía, no hay ningún carácter

    // OJO: s es una REGEX (no un string, no lleva comillas)
    let s = /table footballfootbolin/y;
    const r6 = /foo/y; // sticky

    // y => sticky: solo busca justo en lastIndex, no avanza buscando
    console.log(r6.lastIndex)  // 0     -> aún no se ha usado
    console.log(r6.test(s));   // false -> test convierte s a string "/table footballfootbolin/y",
                               //          que empieza por "/", no por "foo" en la posición 0
    console.log(r6.lastIndex)  // 0     -> al fallar, lastIndex se resetea a 0

    /*CARACTERES ESPECIALES*/
    // . -> Cualquier caracter
    // \ -> invierte el significado del caracter. Si especial, lo escapa (\. = punto literal)

    const r7 = /\.a.o./i;
    console.log(r7.test(".GATO"));          // false -> tras el punto literal viene 'G', y se esperaba 'a'
    console.log(/\.a.o/i.test(".aTO"));     // true  -> "." + a + T + O

    console.log(/A./.test("A "));  // TRUE -> 'A' seguida de cualquier cosa (el espacio)
    console.log(/A./.test("AB"));  // TRUE -> 'A' seguida de 'B'

    // \s --> un espacio
    // [] --> cualquiera de los caracteres del interior
    // [^] --> no existen los caracteres del interior del corchete. Ej: [^abcde]
    // | --> alternativa: lo que esta a la izquierda o lo que esta en la derecha
    // $ --> Que acabe asi

    const r8 = /^[^aeiou]$/i;   // EXACTAMENTE un carácter y que no sea vocal
    console.log(r8.test("BI")); // false -> son 2 caracteres, ^...$ exige solo uno

    const r9 = /[^aeiou]|.$/i;  // (un carácter no vocal) O (cualquier carácter al final)
    console.log(r9.test("xxxxxxxxx")); // true -> la 'x' no es vocal, encaja la 1ª alternativa

    const r10 = /[^ca|ma]/i;    // dentro de [] el '|' es literal: es "ningún char de c, a, | , m"
    console.log(r10.test("mapa")); // true -> la 'p' no está en {c,a,|,m}
    // (para "ca" o "ma" como alternativas sería /(ca|ma)/ , no corchetes)

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
    // (ojo: \w en realidad es [A-Za-z0-9_], con guion bajo)

    const r11 = /^[A-Za-z0-9]$/;  // un único carácter alfanumérico ASCII
    console.log(r11.test("7"));   // true

    /**
     * \b = texto con espacios o simbolos de puntuacion, o al principio o al final
     * \B = NO texto con espacios o simbolos de puntuacion, o al principio o al final
     * (\b es un límite de palabra: no consume caracteres, solo marca la frontera
     *  entre un carácter \w y uno que no lo es)
     */

    const r12 = /fo\b/i;   // "fo" justo al final de una palabra
    console.log(r12.test("Esto es un parrafo")); // true -> "parrafo" acaba en "fo"

    const r13 = /\bfo/i;   // "fo" justo al principio de una palabra
    console.log(r13.test("Esto es un parrafos")); // false -> "fo" está en medio de "parrafos"

    /**
     *  * --> 0 o mas ocurrencias
     *  + --> 1 o mas ocurrencias
     *  ? --> el caracter que precede puede aparecer o no
     */

    const r14 = /a*/;       // 0 o más 'a' -> encaja SIEMPRE (puede encajar vacío)
    r14.test(""); // true
    r14.test("a"); // true
    r14.test("aaaaa"); // true
    r14.test("bbbb"); // true   (encaja con 0 'a')

    const r15 = /a+/;       // al menos una 'a'
    r15.test(""); // false
    r15.test("a"); // true
    r15.test("aaaaa"); // true
    r15.test("bbbb"); // false

    const r16 = /disparos?/;  // la 's' es opcional: "disparo" o "disparos"

    r16.test("eschuche disparos en la habitacion"); // true
    r16.test("eschuche un disparo en la habitacion"); // true

    /**
     * {n} --> se repite n veces
     * {n,} --> se repite n o mas veces
     * {n,m} --> se repite entre n y m veces
     * 
     */

    const r17 = /[0-9]{2}/;   // 2 dígitos seguidos EN ALGÚN SITIO (sin ^ ni $)
    r17.test(42); // true   (el número se convierte a string "42")
    r17.test(42); // true
    r17.test(1); // false
    r17.test(141); // true  <- CORREGIDO: tu comentario decía false, pero "141" contiene "14" y "41"

    const r18 = /^[0-9]{2}$/;  // EXACTAMENTE 2 dígitos
    r18.test(4) // false
    r18.test(55) // true
    r18.test(125) // false

    const r19  = /^[0-9]{3,}$/;  // 3 o más dígitos, y nada más
    r19.test(43) // false
    r19.test(554) // true
    r19.test(1256) // true

    const r20 = /^[0-9]{2,5}$/;  // entre 2 y 5 dígitos, y nada más
    r20.test(3) // false
    r20.test(859) // true
    r20.test(125656) // false <- CORREGIDO: tu comentario decía true, pero son 6 dígitos (máx. 5)

    const r21 = /^\d{2}$/;  // lo mismo que r18 con \d
    r21.test("99"); // true
    r21.test("9a9"); // false
    r21.test("999"); // false
    r21.test("a99"); // false

    const r22 = /\w/;
    r22.test("_");  // true (\w incluye el guion bajo)

    // g => global: la regex guarda estado en lastIndex y exec/test continúan desde ahí
    // Palabras de EXACTAMENTE 3 letras (con tildes incluidas en la clase)
    const r23 = /\b[a-záéíóú]{3}\b/ig;
    let s2 = "la ola del mar es azul y tenia más sal que el salero"
    console.log(r23.lastIndex);   // 0  -> todavía no se ha ejecutado
    console.log(r23.exec(s2));    // [ 'ola', index: 3, input: 'la ola del mar es azul y tenia más sal que el salero', groups: undefined ]
                                  // ('la' tiene 2 letras, no vale; la primera de 3 es 'ola')
    console.log(r23.lastIndex);   // 6  -> justo después de "ola" (3 + 3)
    console.log(r23.exec(s2));    // [ 'del', index: 7, input: 'la ola del mar es azul y tenia más sal que el salero', groups: undefined ]
                                  // (sigue buscando desde la posición 6)
    console.log(r23.lastIndex);   // 10 -> justo después de "del" (7 + 3)

    let x = s2.match(r23) // te crea un array con las ocurrencias
    // con 'g', match ignora lastIndex (lo resetea a 0) y devuelve todas las coincidencias, sin index ni groups
    console.log(x)        // [ 'ola', 'del', 'mar', 'más', 'sal', 'que' ]
    // 'más' entra porque \b se evalúa en la 'm' y en la 's' (ASCII); la 'á' del medio la cubre la clase [a-záéíóú]
}