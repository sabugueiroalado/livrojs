alert('Digite 0 para sair');
do {
    var numero = Number(prompt('Digite um número'));
    if (numero == 0 || isNaN(numero)) {
        var sair = confirm('Confirmar saída?');
        if (sair) { break } else { continue }
    }

    if (numero % 2 == 0) {
        alert(`O dobro de ${numero} é: ${numero * 2}`);
    } else {
        alert(`O triplo do ${numero} é: ${numero * 3}`);
    }
} while (true);

alert('Bye, bye');
