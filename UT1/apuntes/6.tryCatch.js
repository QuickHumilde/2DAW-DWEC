"use strict"
{
    /*try {
        console.log("En el Try se agrega el código a evaluar");//se ejecuta
        let noExiste;//Lanza un error
        console.log("Segundo mensaje en el try");//no se ejecuta porque salta un error en la línea anterior
        
        let tuEdad = prompt("Introduce tu edad", 99);
        if (tuEdad < 18){
            throw new Error("Eres un/a parguela, hablame cuando seas mayor de edad");
        }

    } catch (e) {
        console.error("Catch, captura cualquier error surgido o lanzado en eltry");//se ejecuta
        console.error(e);//Se ejecuta

    } finally {
        console.log("El bloque finally se ejecutará siempre al final de unbloque try-catch");//se ejecuta siempre
}*/


   /* try {
        let a = 5, b=0;
        let c = a/b;
        console.log(`El resultado es ${c}`);

        const  v= [1,2,3];
        v[0]= 4;
        v[2] = {
            nombre: "Tomás",
            edad: 44
        }

        v[3] = "Esto no vale (si lo hace)"
        v[7] = 88
        console.log(`Mi vector es  ${v}`)

    } catch (e){
        console.error(e);
        
    }*/

    try {
        let numero = prompt("Introduce un numero", "finiquitao");

        if (isNaN(numero)){
            throw new Error("Quillo, que parte no entiendes de numero")
        }

        let nuevoNumero = parseInt(numero);
        nuevoNumero++
        console.log(nuevoNumero)

    } catch (error) {
        console.error(error);
    }

}