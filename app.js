let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
    
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  

if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
} else {
        //el usuario no acerto. 
        if (numeroDeUsuario>numeroSecreto) {
            asignarTextoElemento('p','el numero secreto es menor');
        } else {
            asignarTextoElemento('p','el numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
        
    }

    return;
}

function limpiarCaja() {
   document.querySelector('#valorUsuario').value = '';
   
}

function generarNumeroSecreto() {
    let numeroGenereado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenereado);
    console.log(listaNumerosSorteados);
    // si nya sorteamos todos los nueros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','ya se sortearon todos los numeros posibles');
    } else {

    //  si el numero generado esta en la lista 

    if (listaNumerosSorteados.includes(numeroGenereado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenereado);
        return numeroGenereado;

    }
  }
}

function condicinesIniciales() {
    asignarTextoElemento('h1', 'JUEGO DEL NUMERO SECRETO');
    asignarTextoElemento('p', `indica un numero 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalos de numeros
    //generar el numero aleatorio
    //inicializae el numero intentos
    condicinesIniciales();
    //desabhiltar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicinesIniciales();