do {
    var num = Number(prompt('Informe um número: '));
    if (num == 0 || isNaN(num)) {
        alert('Informe um número válido');
    }
} while (num == 0 || isNaN(num));

var pares = `Pares entre 1 e ${num}: `;

if(num > 1) {
    pares = pares + '2';
} 

for (var i = 4; i <= num; i = i + 2) {
    pares = pares + ',' + i;
}

alert(pares);