function mostrarPromoDoVeiculo() {

    // Referenciando os elementos da página

    var inModelo = document.getElementById('inModelo');
    var inPreco = document.getElementById('inPreco');
    var outModelo = document.getElementById('outModelo');
    var outEntrada = document.getElementById('outEntrada');
    var outParcela = document.getElementById('outParcela');

    // Obtendo conteúdo dos campos de entrada de dados <<ENTRADA DE DADOS>>

    var modelo = inModelo.value;
    var preco = Number(inPreco.value);

    // Calculando <<PROCESSAMENTO DE DADOS>>

    var desconto = preco / 2;
    var parcela = desconto / 12;

    // Alterando o conteúdos dos titulos de resposta da página <<SAÍDA DE DADOS>>

    outModelo.textContent = `~~~~< ${modelo} > ~~~~`;
    outEntrada.textContent = `Entrade de R$: ${desconto.toFixed(2)}`
    outParcela.textContent = `Parcelado em 12x de R$: ${parcela.toFixed(2)}`
}

// Referenciando o elemento de botão da página

var btMostrar = document.getElementById('btMostrar');

// Adicionando um observador de evento no botão que executará a function

btMostrar.addEventListener('click', mostrarPromoDoVeiculo);