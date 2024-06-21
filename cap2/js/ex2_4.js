// Elaborar um programa para um restaurante que leia o preço por kg e o consumo (em gramas) de um cliente. Exiba o valor a ser pago (HTML + JavaScript).

function totalCliente() {

    // Referenciando os elementos da página

    var inPreco = document.getElementById('inPreco');
    var inPeso = document.getElementById('inPeso');
    var outTotal = document.getElementById('outTotal');

    // Obtendo conteúdo dos campos de entrada de dados <<ENTRADA DE DADOS>>

    var preco = Number(inPreco.value);
    var peso = Number(inPeso.value);


    // Calculando o valor do almoço <<PROCESSAMENTO DE DADOS>>

    var valorTotal = (preco / 1000) * peso;

    // Alterando o conteúdos dos titulos de resposta da página <<SAÍDA DE DADOS>>

    outTotal.textContent = "Total do almoço R$: " + valorTotal.toFixed(2);
}

// Referenciando o elemento de botão da página

var btCalcular = document.getElementById('btCalcular');

// Adicionando um observador de evento no botão que executará a function (totalCliente)

btCalcular.addEventListener('click', totalCliente);

