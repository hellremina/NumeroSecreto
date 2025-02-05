/*let titulo= document.querySelector('h1');
titulo.innerHTML = 'Juego del número secreto';*/

/*let parrafo =  document.querySelector('p');
parrafo.innerHTML='Indica un número del 1 al 10';*/

//let numSecreto; = generarNumSecreto();
//numSecreto = generarNumSecreto();
//console.log(numSecreto);
let numIntentos;
let listaNumeroSorteados = [];
let numMaximo = 10;

function condicionesIniciales() {
    asignarTxtElemento('h1', 'Juego del número secreto');
    asignarTxtElemento('p', `Indica un número del 1 al ${numMaximo}`);
    numSecreto = generarNumSecreto();
    numIntentos = 1;
}

condicionesIniciales();

function limiteIntentos(intentos) {
    if(intentos>3){
        asignarTxtElemento('p','No adivinaste el numero secreto, se acabó el juego');
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('intentar').setAttribute('disabled','true');

    }
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

        if (numeroDeUsuario === numSecreto) {
            asignarTxtElemento('p', `¡Acertaste el número secreto en ${numIntentos} ${numIntentos === 1 ? 'intento' : 'intentos'}!`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }
        else if (numSecreto > numeroDeUsuario) {
            asignarTxtElemento('p', 'El número secreto es mayor');
            numIntentos++;
            limpiarInput();
        }
        else if (numSecreto < numeroDeUsuario) {
            asignarTxtElemento('p', 'El número secreto es menor');
            numIntentos++;
            limpiarInput();
        }
        else {
            asignarTxtElemento('p', 'No se ingreso un número');
            limpiarInput();
        }

        limiteIntentos(numIntentos);
    
}

function limpiarInput() {
    //let valor= document.querySelector('#valorUsuario');//Selección por 'id'
    //valor.value='';
    document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego() {
    //Limpiar input de usuario
    limpiarInput();
    //Indicar mensaje de intervalo de números
    //Generar num aleatorio
    //Inicilizar el numero de intentos
    condicionesIniciales();

    //Deshabilitar botón Nuevo Juego
    document.getElementById('reiniciar').setAttribute('disabled', 'true');

}

function asignarTxtElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);//'h1'
    elementoHTML.innerHTML = texto;//'Juego del número secreto';
}



function generarNumSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numMaximo) + 1;

    //console.log(numeroGenerado);
    //console.log(listaNumeroSorteados);

    if (listaNumeroSorteados.length == numMaximo) {//Condición de salida de recursividad
        asignarTxtElemento('p', 'Ya se sortearon todos los números posibles');
    }
    else {
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumSecreto(); //Llamada recursiva
        }
        else {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}