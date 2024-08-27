function calcularPesoIdeal() {
    var inNome = document.getElementById('inNome');
    var inAltura = document.getElementById('inAltura');
    var rdMasculino = document.getElementById('rdMasculino');
    var rdFeminino = document.getElementById('rdFeminino');
    var outNome = document.getElementById('outNome');
    var outPeso = document.getElementById('outPeso');

    var nome = inNome.value;
    var altura = Number(inAltura.value);
    var masculino = rdMasculino.checked;
    var feminino = rdFeminino.checked;

    if (nome === '' || !/^[A-Za-z]+$/.test(nome) || altura === '' || isNaN(altura) || !masculino && !feminino) {
        alert('Preencha corretamente os dados!');
        inNome.focus();
        return;
    }

    if (masculino) {
        var peso = 22 * Math.pow(altura, 2);
    } else {
        var peso = 21 * Math.pow(altura, 2);
    }

    outNome.textContent = `Nome: ${nome}`;
    outPeso.textContent = `Peso Ideal: ${peso.toFixed(3)}`;
    outPeso.style.color = `blue`
}

var btCalcular = document.getElementById('btCalcular');
btCalcular.addEventListener('click', calcularPesoIdeal);

function limparCampos() {
    document.getElementById('inNome').value = '';
    document.getElementById('inAltura').value = '';
    document.getElementById('rdMasculino').checked = '';
    document.getElementById('rdFeminino').checked = '';
    document.getElementById('outNome').textContent = '';
    document.getElementById('outPeso').textContent = '';
}

var btLimpar = document.getElementById('btLimpar');
btLimpar.addEventListener('click', limparCampos);