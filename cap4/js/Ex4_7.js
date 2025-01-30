function fabricaEstrelas() {
    var inNumero = document.getElementById('inNumero');
    var outFabricado = document.getElementById('outFabricado');

    var numero = Number(inNumero.value);

    if (numero == 0 || isNaN(numero)) {
        alert('Informe um valor válido');
        inNumero.focus();
        inNumero.value = '';
        return;
    }

    var estrelas = '';

    for (var i = 1; i <= numero; i++) {
        if (i % 2 == 1) {
            estrelas = `${estrelas} *`;
        } else {
            estrelas = `${estrelas} _`;
        }
    }

    outFabricado.textContent = estrelas;
}

var btFabricar = document.getElementById('btFabricar');
btFabricar.addEventListener('click', fabricaEstrelas);