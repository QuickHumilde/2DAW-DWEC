
"use strict"
{
    const FILAS = 10;
    const COLUMNAS = 10;

    let contenedor = document.querySelector(".contenedor");
    let botonCalcularPrimo = document.querySelector(".botonCalcularPrimo");
    let botonRestablecerCelda = document.querySelector(".botonRestablecerCelda");

    const restablecerNumero = () => {
        contenedor.innerHTML = "";
        let tabla = document.createElement("table");
        let numero = 1;

        for (let i = 0; i < FILAS; i++) {
            let fila = document.createElement("tr");

            for (let j = 0; j < COLUMNAS; j++) {
                let celda = document.createElement("td");
                celda.innerHTML = numero;
                celda.setAttribute("class", "normal");
                fila.append(celda);
                numero++;
            }
            tabla.append(fila);
        }
        contenedor.append(tabla);
    }

    const calcularPrimos = () => {
        contenedor.innerHTML = "";
        let tabla = document.createElement("table");
        let numero = 1;

        for (let i = 0; i < FILAS; i++) {
            let fila = document.createElement("tr");

            for (let j = 0; j < COLUMNAS; j++) {
                let celda = document.createElement("td");
                celda.innerHTML = numero;

                if (esPrimo(numero)) {
                    celda.setAttribute("class", "primo");
                    
                } else {
                    celda.setAttribute("class", "normal");
                }

                fila.append(celda);
                numero++;
            }
            tabla.append(fila);
        }
        contenedor.append(tabla);
    }

    const esPrimo = (numero) => {
        if (numero <= 1) {
            return false;
        }

        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                return false;
            }
        }
        return true;
    }

    botonCalcularPrimo.addEventListener("click", () => {
        calcularPrimos();
    });

    botonRestablecerCelda.addEventListener("click", () => {
        restablecerNumero();
    });

    restablecerNumero();
}
