var totalDeFrutas = 0;
var frutas = '';

function repetidorDeFrutas() {
    var inNome = document.getElementById('inNome');
    var inQuantidade = document.getElementById('inQuantidade');
    var outRepeticao = document.getElementById('outRepeticao');

    var nome = inNome.value;
    var quantidade = Number(inQuantidade.value);

    if (nome == '' || quantidade == 0 || isNaN(quantidade)) {
        alert('Informe corretamente os dados');
        inNome.focus();
        inNome.value = '';
        inQuantidade.value = '';
        return
    }

    totalDeFrutas++;


}

var btRepetidor = document.getElementById('btRepetidor');
btRepetidor.addEventListener('click', repetidorDeFrutas);