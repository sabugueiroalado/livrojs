function parquimetro() {
    var inValor = document.getElementById('inValor');
    var outTempo = document.getElementById('outTempo');
    var outTroco = document.getElementById('outTroco');

    var valor = Number(inValor.value);

    if (valor === '' || isNaN(valor)) {
        alert('Informe um valor válido');
        inValor.focus();
        return;
    }

    if (valor < 1) {
        alert('Valor insuficiente para depósito');
        inValor.focus();
        return;
    }

    var tempo;
    var troco;

    if (valor >= 3) {
        tempo = 120;
        troco = valor - 3.00;
    } else if (valor >= 1.75) {
        tempo = 60;
        troco = valor - 1.75;
    } else {
        tempo = 30;
        troco = valor - 1.00;
    }

    outTempo.textContent = `Tempo: ${tempo}`;
    outTroco.textContent = `Troco: ${troco.toFixed(2)}`
}

var btDeposito = document.getElementById('btDeposito');
btDeposito.addEventListener('click', parquimetro);