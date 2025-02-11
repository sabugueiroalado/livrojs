function tabuada() {
    var inNumero = document.getElementById('inNumero');
    var outTabuada = document.getElementById('outTabuada');

    var numero = Number(inNumero.value);

    if (numero == 0 || isNaN(numero)) {
        alert('Informe um número válido');
        inNumero.focus();
        inNumero.value = '';
        return;
    }

    var resposta = '';

    for (var i = 1; i <= 10; i++) {
        resposta = `${resposta + numero} x ${i} = ${numero * i}\n`;
    }

    outTabuada.textContent = resposta;
}

var btDescobrir = document.getElementById('btDescobrir');
btDescobrir.addEventListener('click', tabuada);
