function mostrarPromoDoProduto() {
    // Referenciando os elementos da página

    var inProduto = document.getElementById('inProduto');
    var inPreco = document.getElementById('inPreco');
    var outProduto = document.getElementById('outProduto');
    var outPromo = document.getElementById('outPromo');
    var outTotal = document.getElementById('outTotal')

    // Obtendo conteúdo dos campos de entrada de dados <<ENTRADA DE DADOS>>

    var produto = inProduto.value;
    var preco = Number(inPreco.value);

    // Calculando <<PROCESSAMENTO DE DADOS>>

    var desconto = preco / 2;
    var promo = (preco * 2) + desconto;

    // Alterando o conteúdos dos titulos de resposta da página <<SAÍDA DE DADOS>>

    outProduto.textContent = `~~~~ < ${produto} > ~~~~`
    outPromo.textContent = `PROMOÇÃO! Na compra de 3 unidades a terceira recebe 50% de desconto`
    outTotal.textContent = `Três por R$: ${promo.toFixed(2)} com desconto no terceiro item de R$: ${desconto.toFixed(2)}`
}

// Referenciando o elemento de botão da página

var btMostrar = document.getElementById('btMostrar');

// Adicionando um observador de evento no botão que executará a function

btMostrar.addEventListener('click', mostrarPromoDoProduto);