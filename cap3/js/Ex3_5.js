function calcularRaiz() {
    var inNumero = document.getElementById('inNumero');
    var outResultado = document.getElementById('outResultado');

    var numero = Number(inNumero.value);

    if (numero === '' || isNaN(numero)) {
        alert('Informe corretamente o número');
        inNumero.focus();
        return;
    }

    var raiz = Math.sqrt(numero);

    if (raiz == Math.floor(raiz)) {
        outResultado.textContent = `Raíz: ${raiz}`;
    } else {
        outResultado.textContent = `O número ${numero} não possuí raíz exata`;
    }

}

var btCalcular = document.getElementById('btCalcular');
btCalcular.addEventListener('click', calcularRaiz);