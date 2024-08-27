// d) Elaborar um programa que leia três lados e verique se eles podem ou não
// formar um triângulo. Para formar um triângulo, um dos lados não pode ser
// maior que a soma dos outros dois. Caso possam formar um triângulo, exiba
// também qual o tipo do triângulo: Equilátero (3 lados iguais), Isósceles (2
// lados iguais) e Escaleno (3 lados diferentes). A Figura 3.10 exibe um exemplo
// de execução do exercício.
function tiposDeTriangulos() {
    var inLadoA = document.getElementById('inLadoA');
    var inLadoB = document.getElementById('inLadoB');
    var inLadoC = document.getElementById('inLadoC');
    var outVerificacao = document.getElementById('outVerificacao');
    var outTipo = document.getElementById('outTipo');

    var ladoA = Number(inLadoA.value);
    var ladoB = Number(inLadoB.value);
    var ladoC = Number(inLadoC.value);

    if (ladoA === '' || isNaN(ladoA)) {
        alert('Informe corretamente o Lado A');
        inLadoA.focus();
        return;
    }

    if (ladoB === '' || isNaN(ladoB)) {
        alert('Informe corretamente o Lado B');
        inLadoB.focus();
        return;
    }

    if (ladoC === '' || isNaN(ladoC)) {
        alert('Informe corretamente o Lado C');
        inLadoC.focus();
        return;
    }

    if (ladoA > ladoB + ladoC || ladoB > ladoC + ladoA || ladoC > ladoB + ladoA) {
        outVerificacao.textContent = `Os lados não podem formar um triângulo`;
    } else {
        outVerificacao.textContent = `Os lados formam um triângulo`;
        if (ladoA === ladoB && ladoA === ladoC) {
            outTipo.textContent = `Tipo: Equilátero`;
        } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
            outTipo.textContent = `Tipo: Isósceles`;
        } else {
            outTipo.textContent = `Tipo: Escaleno`;
        }
    }

}

var btDescobrir = document.getElementById('btDescobrir');
btDescobrir.addEventListener('click', tiposDeTriangulos);