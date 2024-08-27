function parOuImpar() {
    var inNumero = document.getElementById('inNumero');
    var outResultado = document.getElementById('outResultado');

    var numero = Number(inNumero.value);

    if (numero === '' || isNaN(numero)) {
        alert('Informe um número válido');
        inNumero.focus();
        return;
    }

    if (numero % 2 == 0) {
        outResultado.textContent = `O número ${numero} é PAR`;
    } else {
        outResultado.textContent = `O número ${numero} é ÍMPAR`;
    }

}

var btDescobrir = document.getElementById('btDescobrir');
btDescobrir.addEventListener('click', parOuImpar);