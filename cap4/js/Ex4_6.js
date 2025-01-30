function numerosPrimos() {
    var inNumero = document.getElementById('inNumero');
    var outResultado = document.getElementById('outResultado');

    var numero = Number(inNumero.value);

    if (numero == 0 || isNaN(numero)) {
        alert('Informe um valor válido');
        inNumero.focus();
        inNumero.value;
        return;
    }

    var divisores = 0;

    for (var i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            divisores++;
        }
    }

    if (divisores == 2) {
        outResultado.textContent = `[ ${numero} ] é PRIMO`;
    } else {
        outResultado.textContent = `[ ${numero} ] NÃO é primo`;

    }
}

var btVerificar = document.getElementById('btVerificar');
btVerificar.addEventListener('click', numerosPrimos);