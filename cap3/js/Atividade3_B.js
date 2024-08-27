function situacao() {
    var inVelocidadePermitida = document.getElementById('inVelocidadePermitida');
    var inVelocidadeCondutor = document.getElementById('inVelocidadeCondutor');
    var outSituacao = document.getElementById('outSituacao');

    var veloPermitida = Number(inVelocidadePermitida.value);
    var veloCondutor = Number(inVelocidadeCondutor.value);

    if (veloPermitida === '' || isNaN(veloPermitida)) {
        alert('Informe corretamente a velocidade permitida...')
        inVelocidadePermitida.focus();
        return;
    }

    if (veloCondutor === '' || isNaN(veloCondutor)) {
        alert('Informe corretamente a velocidade do condutor...')
        inVelocidadeCondutor.focus();
        return;
    }

    if (veloCondutor <= veloPermitida) {
        outSituacao.textContent = `Sem Multa`
    } else if (veloCondutor <= veloPermitida * 1.20) {
        outSituacao.textContent = `Multa Leve`
    } else {
        outSituacao.textContent = `Multa Grave`
    }
}

var btSituacao = document.getElementById('btSituacao');
btSituacao.addEventListener('click', situacao);