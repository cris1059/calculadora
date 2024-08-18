document.addEventListener("DOMContentLoaded", listen);
let obtenido = -1, obtenido2 = -1, numero = 0, resultado = 0, numero2 = 0;

function listen() {
    let body = document.querySelector('body');
    body.addEventListener('click', clicks);

}

function clicks(event) {
    if(event.target && event.target.id == 1) concatenamiento(1);
    if(event.target && event.target.id == 2) concatenamiento(2);
    if(event.target && event.target.id == 3) concatenamiento(3);
    if(event.target && event.target.id == 4) concatenamiento(4);
    if(event.target && event.target.id == 5) concatenamiento(5);
    if(event.target && event.target.id == 6) concatenamiento(6);
    if(event.target && event.target.id == 7) concatenamiento(7);
    if(event.target && event.target.id == 8) concatenamiento(8);
    if(event.target && event.target.id == 9) concatenamiento(9);
    if(event.target && event.target.id == 'cero') concatenamiento(0);
    if(event.target && event.target.id == 'mas') suma();
    if(event.target && event.target.id == 'menos') resta();
    if(event.target && event.target.id == 'por') console.log('Le diste click a x');
    if(event.target && event.target.id == 'dividido') console.log('Le diste click a /');
    if(event.target && event.target.id == 'igual') igual();
    if(event.target && event.target.id == 'clear') clearNumbers();
    
}

function concatenamiento(number) {
    if (obtenido == 0) {
        numero = parseInt(document.getElementById('scream').textContent, 10);
        document.getElementById('scream').textContent = '';
        obtenido = 1;
    }
    let pantalla = document.getElementById('scream').textContent;
    document.getElementById('scream').textContent = pantalla+number;
}

function suma() {
    if(obtenido == 1){
        let numero2 = getNumberAndClear();
        resultado = numero + numero2;
        document.getElementById('scream').textContent = resultado;
        obtenido = 0;
    } else{
        numero = getNumberAndClear();
        obtenido = 1;    
    }
}

function resta() {
    if(obtenido == 1){
        let numero2 = getNumberAndClear();
        resultado = numero - numero2;
        document.getElementById('scream').textContent = resultado;
        obtenido = 0;
    }else if(obtenido == 0){

    } else{
        numero = getNumberAndClear();
        obtenido = 1;    
    }
}

function igual() {
    document.getElementById('scream').textContent = resultado;
    obtenido = 0;
}

function getNumberAndClear() {
    let numero = parseInt(document.getElementById('scream').textContent, 10);
    document.getElementById('scream').textContent = '';
    return numero;}

    function clearNumbers() {
        numero = 0;
        numero2 = 0;
        resultado = 0;
        obtenido = -1;
        document.getElementById('scream').textContent = '';
    }