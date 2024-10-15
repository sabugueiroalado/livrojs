function tabuada() {
    var inNumero = document.getElementById('inNumero');
    var outTabuada = document.getElementById('outTabuada');

    var numero = Number(inNumero.value);

    if (numero == '' || isNaN(numero)) {
        alert('Informe um número válido...');
        inNumero.focus();
        inNumero.value = '';
        return;
    }

    var resultado = '';

    for (var i = 1; i <= 10; i++) {
        resultado = `${resultado + numero} x ${i} = ${numero * i}\n`;
    }

    outTabuada.textContent = resultado;
}

var btDescobrir = document.getElementById('btDescobrir');
btDescobrir.addEventListener('click', tabuada);