function saqueCaixaEletronico() {
    var inValor = document.getElementById('inValor');
    var outNotas100 = document.getElementById('outNotas100');
    var outNotas50 = document.getElementById('outNotas50');
    var outNotas10 = document.getElementById('outNotas10');

    var valor = Number(inValor.value);

    if (valor === '' || isNaN(valor)) {
        alert('Informe corretamente o valor de saque');
        inValor.focus();
        return;
    }

    if (valor % 10 != 0) {
        alert('Valor inválido para as notas disponíveis (R$: 100, 50 e 10)');
        inValor.focus();
        return;
    }

    var notas100 = Math.floor(valor / 100);
    var resto = valor % 100;
    var notas50 = Math.floor(resto / 50);
    resto = resto % 50;
    var notas10 = Math.floor(resto / 10);

    if (notas100 > 0) {
        outNotas100.textContent = `Notas de R$: 100,00: ${notas100}`;
        outNotas100.style.color = 'blue';
    }

    if (notas50 > 0) {
        outNotas50.textContent = `Notas de R$: 50,00: ${notas50}`;
        outNotas50.style.color = 'blue';
    }

    if (notas10 > 0) {
        outNotas10.textContent = `Notas de R$: 10,00: ${notas10}`;
        outNotas10.style.color = 'blue';
    }
}

var btSaque = document.getElementById('btSaque');
btSaque.addEventListener('click', saqueCaixaEletronico);

function novoSaque() {
    document.getElementById('inValor').value = '';
    document.getElementById('outNotas100').textContent = '';
    document.getElementById('outNotas50').textContent = '';
    document.getElementById('outNotas10').textContent = '';
}

var btNovoSaque = document.getElementById('btNovoSaque');
btNovoSaque.addEventListener('click', novoSaque);