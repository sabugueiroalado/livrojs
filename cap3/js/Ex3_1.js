function calcularMediaAluno() {
    var inNome = document.getElementById('inNome');
    var inNota1 = document.getElementById('inNota1');
    var inNota2 = document.getElementById('inNota2');
    var outMedia = document.getElementById('outMedia');
    var outResultado = document.getElementById('outResultado');

    var nome = inNome.value;
    var nota1 = Number(inNota1.value);
    var nota2 = Number(inNota2.value);

    if (nome == '' || !/^[A-Za-z]+$/.test(nome)) {
        alert('Informe corretamente o nome do Aluno...');
        inNome.focus();
        return;
    }

    if (nota1 == '' || isNaN(nota1)) {
        alert('Informe corretamente a 1º Nota...');
        inNota1.focus();
        return;
    }

    if (nota2 == '' || isNaN(nota2)) {
        alert('Informe corretamente a 2º Nota...');
        inNota2.focus();
        return;
    }

    var media = (nota1 + nota2) / 2;

    if (media >= 7) {
        outResultado.textContent = `Parabéns ${nome}! Você foi aprovado(a). :)`;
        outResultado.style.color = `green`
    } else if (media >= 4) {
        outResultado.textContent = `Atenção ${nome}! Você ficou em exame final. :/`;
        outResultado.style.color = `orange`
    } else {
        outResultado.textContent = `Que pena ${nome}! Você foi reprovado(a). :(`;
        outResultado.style.color = `red`
    }

    outMedia.textContent = `Média: ${media.toFixed(2)}`;
    outMedia.style.color = `blue`
}

var btCalcular = document.getElementById('btCalcular');
btCalcular.addEventListener('click', calcularMediaAluno);

function limparCampos() {
document.getElementById('inNome').value = '';
document.getElementById('inNota1').value = '';
document.getElementById('inNota2').value = '';
document.getElementById('outMedia').textContent = '';
document.getElementById('outResultado').textContent = '';
}

var btLimpar = document.getElementById('btLimpar');
btLimpar.addEventListener('click', limparCampos);