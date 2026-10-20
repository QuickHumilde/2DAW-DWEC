"use strict"
{
    let nombreJugador1 = "";
    let nombreJugador2 = "";
    let jugadaJ1="";
    let jugadaJ2="";
    let numRondas = 0;
    let numEmpates = 0;
    let ganadorRonda;

    // Array en el cual la primera posicion es el numero de rondas ganadas del jugador1 y la segunda posicion es el numero de rondas ganadas del jugador2
    let jugadasGanadas = [0, 0];

    /**
     * Valida el nombre para que no se pueda introducir un nombre incorrecto
     * @param {String} nombre 
     * @returns true si el nombre es valido false si el nombre no es valido
     */
    const validarNombre = (nombre) => {
        
        // La primera letra debe ser mayuscula con o sin tilde, las siguientes letras pueden ser mayusculas o minusculas con o sin tilde o un espacio
        const regExp = /^[A-ZÁÉÍÚÓ]+[A-Za-záéíóúÁÉÍÚÓ\s]+$/;

        if(regExp.test(nombre)) {
            return true;
        }
        return false;
    }

    /**
     * Valida la jugada para que no se introduzca una incorrecta
     * @param {String} nombre 
     * @returns true si la jugada es valida false si la jugada no es valida
     */
    const validarJugada = (jugada) => {
        
        // Expresion regular para que la jugada solamente pueda ser uno de los tres caracteres especificados (R, P o S)
        const regExp = /^[RPS]$/;

        if(regExp.test(jugada)) {
            return true;
        }
        return false;
    }

    /**
     * Compara las jugadas de ambos jugador para saber cual de los dos ha ganado o ha habido un empate
     * @param {String} j1 
     * @param {String} j2 
     * @returns 1 si ha ganado el jugador 1, 2 si ha ganado el jugador 2 y 0 si es empate
     */
    const compararTiradas = (j1, j2) => {
        
        // Victorias para el jugador 1
        if ( (j1 === 'R' && j2 === 'S') || (j1 === 'P' && j2 === 'R') || (j1 === 'S' && j2 === 'P') ){
            return 1;
        
        // Victorias para el jugador 2
        } else if ( (j2 === 'R' && j1 === 'S') || (j2 === 'P' && j1 === 'R') || (j2 === 'S' && j1 === 'P') ){
            return 2;
        }

        // Empate
        return 0;
    }

    // Mientras el nombre del jugador 1 no sea valido, se le preguntara 
    while (!validarNombre(nombreJugador1)){
        nombreJugador1 = prompt("Dime el nombre del primer jugador", ""); 
    }

    // Mientras el nombre del jugador 2 no sea valido, se le preguntara 
    while (!validarNombre(nombreJugador2)){
        nombreJugador2 = prompt("Dime el nombre del segundo jugador", ""); 
    }

    // Mientras ninguno de los dos jugadores haya ganado 3 rondas, o se hayan jugado 5 rondas, se seguira jugando
    while (jugadasGanadas[0] !== 3 && jugadasGanadas[1] !== 3 && numRondas<5) {

        // Pregunto la jugada al jugador 1 hasta que sea valida
        while (!validarJugada(jugadaJ1)){
            jugadaJ1 = prompt(`Dime la jugada de ${nombreJugador1} (J1):`, ""); 
        }

        // Pregunto la jugada al jugador 2 hasta que sea valida
        while (!validarJugada(jugadaJ2)){
            jugadaJ2 = prompt(`Dime la jugada de ${nombreJugador2} (J2):`, ""); 
        }

        // Guardo en una variable el resultado de la ronda
        ganadorRonda = compararTiradas(jugadaJ1, jugadaJ2);

        // Compruebo quien ha ganado la ronda o si se ha quedado en empate, lo muestro por un alert y le sumo 1 punto al jugador correspondiente
        if (ganadorRonda===1){
            alert(`La ronda la ha ganado ${nombreJugador1} (J1)`);
            jugadasGanadas[0]++

        } else if(ganadorRonda===2) {
            alert(`La ronda la ha ganado ${nombreJugador2} (J2)`);
            jugadasGanadas[1]++

        } else {
            alert("EMPATEEEEEEEEE");
            numEmpates++;
        }

        // Avanzo la ronda
        numRondas++;
        
        // Rondas jugadas
        alert(`Llevais un total de: ${numRondas} ronda/s jugada/s`);

        // Jugadas de cada jugador
        alert(`Jugadas: 
            ${nombreJugador1} (J1): ${jugadaJ1}\n
            ${nombreJugador2} (J2): ${jugadaJ2}`);

        // Puntuacion de cada jugador
        alert(`Puntuacion: 
            ${nombreJugador1} (J1): ${jugadasGanadas[0]}\n
            ${nombreJugador2} (J2): ${jugadasGanadas[1]}`);
        
        // Reinicio las jugadas para que se vuelvan a preguntar
        jugadaJ1="";
        jugadaJ2="";

    }
    
    alert("---------- FIN DE LA PARTIDA ----------");

    // Compruebo si alguno de los dos jugadores ha ganado o han quedado empate y lo saco por pantalla
    if(jugadasGanadas[0]>jugadasGanadas[1]) {
        alert(`HA GANADOOOOOOOOOOOOO ${nombreJugador1} (Jugador 1)`);

    } else if(jugadasGanadas[1]>jugadasGanadas[0]) {
        alert(`HA GANADOOOOOOOOOOOOO ${nombreJugador2} (Jugador 2)`);

    } else {
        alert("La partida se ha quedado en un empate :^(")
    }

    // Numero total de rondas jugadas
    alert(`Habeis jugado un total de: ${numRondas} rondas`);

    // Numero total de empates
    alert(`Habeis quedado empate: ${numEmpates} veces`);

    // Puntuaciones finales
    alert(`Puntuaciones finales: 
        ${nombreJugador1} (J1): ${jugadasGanadas[0]}\n
        ${nombreJugador2} (J2): ${jugadasGanadas[1]}`);

}