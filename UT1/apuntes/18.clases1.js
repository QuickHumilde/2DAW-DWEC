"use strict"
{
    class Punto {
        #cX; // Coordenada x
        #cY; // Coordenada y

        constructor (cX = 0, cY = 0) {
            this.cX = cX;
            this.cY = cY;
        }

        set coordX(x) {
            this.cX = x;
        }

        set coordY(y) {
            this.cY = y;
        }

        get coordX() {
            this.cX;
        }

        get coordY() {
            this.cY;
        }

        static distancia(p1,p2){
            let dx = p1.cX-p2.cX;
            let dy = p1.cY-p2.cY;

            return Math.sqrt(dx*dx + Math.pow(dy,2));
        }

        multiplicaCoordenadas(){
            return this.cX*this.cY;
        }
    }

    let p1 = new Punto(10,10);
    console.log(p1);
    console.log(Punto.distancia(p1,new Punto()));
    console.log(p1.multiplicaCoordenadas());
    p1.coordX = 20;
    p1.coordY = 20;
    console.log(p1);
    console.log(p1.coordX + " - " + p1.coordY);

    p1.cX = 30;
    p1.cY = 30;
    console.log(p1);

    class PuntoProtegido {
        #cX; // Coordenada x
        #cY; // Coordenada y

        constructor (cX = 0, cY = 0) {
            this.#cX = cX;
            this.#cY = cY;
        }

        set coordX(x) {
            this.#cX = x;
        }

        set coordY(y) {
            this.#cY = y;
        }

        get coordX() {
            this.#cX;
        }

        get coordY() {
            this.#cY;
        }

        static distancia(p1,p2){
            let dx = p1.#cX-p2.#cX;
            let dy = p1.#cY-p2.#cY;

            return Math.sqrt(dx*dx + Math.pow(dy,2));
        }

        multiplicaCoordenadas(){
            return this.#cX*this.#cY;
        }
    }

    let p2 = new PuntoProtegido(1,1);
    console.log(p2.coordX);
    p2.coordX = 10;
    console.log(p2.coordX);

    class Puntito extends PuntoProtegido {
        #cZ;

        constructor (z, x, y) {
            super (x, y);
            this.#cZ = z;
        }

        set coordZ (z) {
            this. #cZ = z;
        }
    }

    let pi = new Puntito(1, 2, 3);
    console.log(pi);
    pi.coordX = 10;
    pi.coordY = 10;
    pi.coordZ = 10;
    console.log(pi);
}