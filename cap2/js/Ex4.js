function calcularConsumoCliente () {

    // Referenciando os elementos da página

    var inPreco = document.getElementById('inPreco');
    var inConsumo = document.getElementById('inConsumo');
    var outConsumo = document.getElementById('outConsumo');

    // Obtendo conteúdo dos campos de entrada de dados <<ENTRADA DE DADOS>>

    var preco = Number(inPreco.value);
    var consumo = Number(inConsumo.value);

    // Calculando <<PROCESSAMENTO DE DADOS>>

    var total = ((consumo/1000)*preco);

    // Alterando o conteúdos dos titulos de resposta da página <<SAÍDA DE DADOS>>

    outConsumo.textContent = `Total R$: ${total.toFixed(2)}`;
}

// Referenciando o elemento de botão da página

var btMostrar = document.getElementById('btMostrar');

// Adicionando um observador de evento no botão que executará a function

btMostrar.addEventListener('click', calcularConsumoCliente);