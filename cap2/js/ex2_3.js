// Elaborar um programa para uma revenda de veículos. O programa deve ler modelo e preço do veículo. Apresentar como resposta o valor da entrada (50%) e o saldo em 12x (HTML + JavaScript).

function promocao() {

    // Referenciando os elementos da página

    var inModelo = document.getElementById('inModelo');
    var inPreco = document.getElementById('inPreco');
    var outModelo = document.getElementById('outModelo');
    var outPreco = document.getElementById('outPreco');
    var outPromocao = document.getElementById('outPromocao');

    // Obtendo conteúdo dos campos de entrada de dados <<ENTRADA DE DADOS>>

    var modelo = inModelo.value;
    var preco = Number(inPreco.value);

    // Calculando o valor do desconto e o total de parcelas com desconto <<PROCESSAMENTO DE DADOS>>

    var entrada = preco * 0.50;
    var parcela = (preco * 0.50) / 12;

    // Alterando o conteúdos dos titulos de resposta da página <<SAÍDA DE DADOS>>

    outModelo.textContent = "Promoção: " + modelo;
    outPreco.textContent = "Entrada de R$: " + entrada.toFixed(2);
    outPromocao.textContent = "Parcelado em 12x de R$: " + parcela.toFixed(2);

}

// Referenciando o elemento de botão da página

var btPromocao = document.getElementById('btPromocao');

// Adicionando um observador de evento no botão que executará a function (promocao)

btPromocao.addEventListener('click', promocao);