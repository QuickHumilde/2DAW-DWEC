"use strict"
{
    console.log(window.location.href);      // https://www.ejemplo.com:5505/carpeta/index.html
    console.log(window.location.origin);    // https://www.ejemplo.com:5505
    console.log(window.location.protocol);  // https:
    console.log(window.location.host);      // www.ejemplo.com:5505
    console.log(window.location.hostname); // www.ejemplo.com
    console.log(window.location.port);      // 5505
    console.log(window.location.pathname); // /carpeta/index.html

    // https://developer.mozilla.org/en-US/docs/Web/API/History_API
    console.log(window.history);

    let back = document.createElement("button");
    back.innerHTML="Patras";

    let siguiente = document.createElement("button");
    siguiente.innerHTML="Palante";

    document.body.append(back);
    document.body.append(siguiente);

    back.onclick = function (e) {
        window.history.back();
    }
    siguiente.onclick = function (e) {
        ///window.history.forward();
        window.history.go(1);
    }

    let refrescar = document.createElement("button");
    refrescar.innerHTML="Refrescar";
    document.body.append(refrescar);

    refrescar.onclick = function (e) {
        window.history.go(); // go(0)
    }

    // https://developer.mozilla.org/es/docs/Web/API/Window/navigator

    console.log(window.navigator);
    console.log(window.navigator.userAgent);
    console.log(window.navigator.connection);

    console.log(window.navigator);

    // https://developer.mozilla.org/es/docs/Web/API/Navigator/geolocation

    let geolocalizacion = document.createElement("button");
    geolocalizacion.innerHTML="Doxeo";
    document.body.append(geolocalizacion);
    geolocalizacion.addEventListener("click", (e) =>{
        window.navigator.geolocation.getCurrentPosition(verDatosGeolocalizacion,error,opciones)
    })

    const opciones = {
        enableHighAccuracy: true,
        timeout: 5000, // tiempo max de espera
        maximuAge: 0 // para que no coja el dato dela cache del navegador
    }

    function verDatosGeolocalizacion(pos) {
        let coordenada = pos.coords;
        console.log("Tu ubicacion actual es:");
        console.log(coordenada.latitude);
        console.log(coordenada.longitude);
        console.log(coordenada.accuracy + " metros");
    }

    function error(err) {
        console.error(err.code + " - " + err.message);
    }
    
    let myH2 = document.createElement("h2");
    let myBr = document.createElement("br");
    myH2.innerHTML="botones parte 2"
    document.body.appendChild(myH2);
    document.body.appendChild(myBr);
    document.body.appendChild(myBr);


    let ventana;

    let abrirVentana = document.createElement("button");
    abrirVentana.innerHTML="Abrir Ventana"
    document.body.appendChild(abrirVentana);
    abrirVentana.addEventListener("click", (evento) => {
        ventana = window.open("https://deltarune.com");
    })

    let cerrarVentana = document.createElement("button");
    cerrarVentana.innerHTML="Cerrar Ventana"
    document.body.appendChild(cerrarVentana);
    cerrarVentana.addEventListener("click", (evento) => {
        ventana.close(); // te cierra la ventana que has abierto
        //window.close(); // te cierra a ti mismo
    })

    
    let imprimir = document.createElement("button");
    imprimir.innerHTML="Imprimir Ventana"
    document.body.appendChild(imprimir);
    imprimir.addEventListener("click", (evento) => {
        window.print();
    })

}