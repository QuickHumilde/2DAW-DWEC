
"use strict"
{
    let divParrafos = document.querySelector(".div-parrafos");
    let botonReaparecer = document.createElement("button");
    botonReaparecer.innerHTML = "Reaparecer";
    divParrafos.insertAdjacentElement("beforebegin", botonReaparecer);

    const crearParrafos = () => {
        for (let i = 1; i < 4; i++) {
            let myP = document.createElement("p");
            myP.setAttribute("id", `idParrChul${i}`);
            myP.setAttribute("class", "parrafoChulaco");
            myP.innerHTML = `Parrafo ${i}`;

            divParrafos.insertAdjacentElement("beforeEnd", myP);
            let brrrr = document.createElement("br");

            myP.addEventListener("mouseleave", () => {
                hideParrafo(myP);
            });

            myP.addEventListener("dblclick", () => {
                removeParrafo(myP);
            });
            myP.insertAdjacentElement("afterend", brrrr);
        }
    }

    const hideParrafo = (elemento) => {
        elemento.style.setProperty("visibility", "hidden");
    }

    const removeParrafo = (elemento) => {
        elemento.remove();
    }

    const reaparecerParrafos = () => {
        let parrafos = document.querySelectorAll(".parrafoChulaco");

        parrafos.forEach((parrafo) => {
            parrafo.style.setProperty("visibility", "visible");
        });
    }

    crearParrafos();

    botonReaparecer.addEventListener("click", () => {
        reaparecerParrafos();
    });
}
