// Uma farmácia está com uma promoção – Na compra de duas unidades de um mesmo medicamento, o cliente recebe como desconto os centavos do valor total.
// Elaborar um programa que leia descrição e preço de um medicamento.Informe o valor do produto na promoção.

function calcularPromocao() {

    // Referenciando os elementos da página

    var inProduto = document.getElementById('inProduto');
    var inPreco = document.getElementById('inPreco');
    var outProduto = document.getElementById('outProduto');
    var outPreco = document.getElementById('outPreco');

    // Obtendo conteúdo dos campos de entrada de dados <<ENTRADA DE DADOS>>

    var produto = inProduto.value;
    var preco = Number(inPreco.value);

    // Calculando o valor da promoção <<PROCESSAMENTO DE DADOS>>

    var promocao = preco * 2;
    var promocaoDesconto = Math.floor(promocao);

    // Alterando o conteúdos dos titulos de resposta da página <<SAÍDA DE DADOS>>

    outProduto.textContent = "Medicamento: " + produto;
    outPreco.textContent = "Leve 2 por apenas R$: " + promocaoDesconto.toFixed(2);

}

// Referenciando o elemento de botão da página

var btPromocao = document.getElementById('btPromocao');

// Adicionando um observador de evento no botão que executará a function (totalCliente)

btPromocao.addEventListener('click', calcularPromocao);