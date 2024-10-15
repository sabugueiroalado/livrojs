alert('Digite 0 para sair');
do {
    var num = Number(prompt('Número: '));

    if (num == 0 || isNaN(num)) {
        var sair = confirm('Confirmar saída?');
        if (sair) {
            break
        } else {
            continue
        }
    }


    if (num % 2 == 0) {
        alert(`O dobro de ${num} é: ${num * 2}`);
    } else {
        alert(`O triplo de ${num} é: ${num * 3}`);
    }

} while (true)

alert('Bye, Bye...')