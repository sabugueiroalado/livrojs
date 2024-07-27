function promocaoDeMedicamento() {

    // Referenciando os elementos da página

    var inMedicamento = document.getElementById('inMedicamento');
    var inPreco = document.getElementById('inPreco');
    var outMedicamento = document.getElementById('outMedicamento');
    var outPreco = document.getElementById('outPreco');

    // Obtendo conteúdo dos campos de entrada de dados <<ENTRADA DE DADOS>>

    var medicamento = inMedicamento.value;
    var preco = Number(inPreco.value);

    // Calculando <<PROCESSAMENTO DE DADOS>>

    var promo = Math.floor(preco * 2);
    var desconto = (preco * 2) % 2;

    // Alterando o conteúdos dos titulos de resposta da página <<SAÍDA DE DADOS>>

    outMedicamento.textContent = `~~~~ < ${medicamento} > ~~~~`;
    outPreco.textContent = `Valor promocional R$: ${promo.toFixed(2)} - Desconto de R$: ${desconto.toFixed(2)}`;
}

// Referenciando o elemento de botão da página

var btMostrar = document.getElementById('btMostrar');

// Adicionando um observador de evento no botão que executará a function

btMostrar.addEventListener('click', promocaoDeMedicamento);