function calcularConsumoCliente() {

    // Referenciando os elementos da página

    var inPreco = document.getElementById('inPreco');
    var inConsumo = document.getElementById('inConsumo');
    var outConsumo = document.getElementById('outConsumo');

    // Obtendo conteúdo dos campos de entrada de dados <<ENTRADA DE DADOS>>

    var preco = Number(inPreco.value);
    var consumo = Number(inConsumo.value);

    // Calculando <<PROCESSAMENTO DE DADOS>>

    var calculo = Math.ceil((preco / 15) * consumo);

    // Alterando o conteúdos dos titulos de resposta da página <<SAÍDA DE DADOS>>

    outConsumo.textContent = `Total R$: ${calculo.toFixed(2)} por ${consumo} minutos`;
}

// Referenciando o elemento de botão da página

var btMostrar = document.getElementById('btMostrar');

// Adicionando um observador de evento no botão que executará a function

btMostrar.addEventListener('click', calcularConsumoCliente);