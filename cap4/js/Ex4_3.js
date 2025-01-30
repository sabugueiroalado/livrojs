do {
    var numero = Number(prompt('Digite um número'));
    if (numero == 0 || isNaN(numero)) {
        alert('Informe um número válido');
    }
} while (numero == 0 || isNaN(numero));

var pares = `Pares entre 1 e ${numero}: `;

if (numero > 1) {
    pares = `${pares} 2`;
}

for (var i = 4; i <= numero; i = i + 2) {
    pares = `${pares}, ${i}`;
}

alert(`${pares}.`);