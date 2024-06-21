// Um supermercado está com uma promoção – Para aumentar suas vendas no setor de higiene, cada etiqueta de produto deve
// exibir uma mensagem anunciando 50% de desconto (para um item) na compra de três unidades do produto. Elaborar um
// programa que leia descrição e preço de um produto.
function calcularPromocao() {

    // Referenciando os elementos da página

    var inProduto = document.getElementById('inProduto');
    var inPreco = document.getElementById('inPreco');
    var outProduto = document.getElementById('outProduto');
    var outPromocao = document.getElementById('outPromocao');

    // Obtendo conteúdo dos campos de entrada de dados <<ENTRADA DE DADOS>>


    var produto = inProduto.value;
    var preco = Number(inPreco.value);

    // Calculando o valor da promoção <<PROCESSAMENTO DE DADOS>>


    var promocao = preco / 2;
    var precoFinal = (preco * 2) + promocao;

    // Alterando o conteúdos dos titulos de resposta da página <<SAÍDA DE DADOS>>


    outProduto.textContent = produto + " - Promoção: Leve 3 por R$: " + precoFinal.toFixed(2);
    outPromocao.textContent = "O 3º produto sai por apenas R$: " + promocao;
}

// Referenciando o elemento de botão da página

var btMostrarPromocao = document.getElementById('btMostrarPromocao');

// Adicionando um observador de evento no botão que executará a function (totalCliente)

btMostrarPromocao.addEventListener('click', calcularPromocao);