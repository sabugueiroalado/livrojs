function decremento() {
    var inNumero = document.getElementById('inNumero');
    var outOrdem = document.getElementById('outOrdem');

    var numero = Number(inNumero.value);

    if (numero == '' || isNaN(numero)) {
        alert('Informe um número válido...');
        inNumero.focus();
        inNumero.value = '';
        return;
    }

    var ordem = `Entre 1 e ${numero}: ${numero}`;

    for (var i = numero - 1; i > 0; i--) {
        ordem = `${ordem}, ${i}`;
    }

    outOrdem.textContent = `${ordem}.`;
}

var btDescobrir = document.getElementById('btDescobrir');
btDescobrir.addEventListener('click', decremento);