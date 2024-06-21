// Elaborar um programa para uma lan house de um aeroporto – O programa deve ler o valor de cada 15 minutos de uso de um
// computador e o tempo de uso por um cliente em minutos.
// Informe o valor a ser pago pelo cliente, sabendo que as frações extras de 15 minutos devem ser cobradas de forma
// integral.

function tempoDeUso() {

    // Referenciando os elementos da página

    var inPreco = document.getElementById('inPreco');
    var inTempo = document.getElementById('inTempo');
    var outPreco = document.getElementById('outPreco');

    // Obtendo conteúdo dos campos de entrada de dados <<ENTRADA DE DADOS>>

    var preco = Number(inPreco.value);
    var tempo = Number(inTempo.value);

    // Calculando o valor da promoção <<PROCESSAMENTO DE DADOS>>

    var calculo = Math.ceil(tempo / 15) * preco;

    // Alterando o conteúdos dos titulos de resposta da página <<SAÍDA DE DADOS>>

    outPreco.textContent = "Valor a pagar R$: " + calculo.toFixed(2);
}

// Referenciando o elemento de botão da página

var btCalcular = document.getElementById('btCalcular');

// Adicionando um observador de evento no botão que executará a function (totalCliente)

btCalcular.addEventListener('click', tempoDeUso);