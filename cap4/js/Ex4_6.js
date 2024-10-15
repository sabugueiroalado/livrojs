function verificarPrimo() {
    var inNumero = document.getElementById('inNumero');
    var outResultado = document.getElementById('outResultado');

    var numero = Number(inNumero.value);

    if (numero == '' || isNaN(numero)) {
        alert('Informe um número válido');
        inNumero.focus();
        inNumero.value = '';
        return;
    }

    var numerosDivisores = 0; //Declara e inicializa o contador

    for (var i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            numerosDivisores++; //Incrementa o contador se a condição for true
        }
    }

    if (numerosDivisores == 2) {
        outResultado.textContent = `${numero}, é PRIMO`;
    } else {
        outResultado.textContent = `${numero}, NÃO é primo`;
    }
}
var btVerificar = document.getElementById('btVerificar');
btVerificar.addEventListener('click', verificarPrimo);  
