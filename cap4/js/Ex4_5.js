// Contadoreseacumuladores

// Declarando variáveis globais, contadores e acumulares
var numContas = 0;
var valorTotal = 0;

// Variável string que acumula as contas
var resposta = ''

function registrarConta() {
    var inInfo = document.getElementById('inInfo');
    var inValor = document.getElementById('inValor');
    var outListaContas = document.getElementById('outListaContas');
    var outTotal = document.getElementById('outTotal');

    var info = inInfo.value;
    var valor = Number(inValor.value);

    if (info == '' || valor == 0 || isNaN(valor)) {
        alert('Informe os dados corretamente...')
        inInfo.focus();
        inInfo.value = '';
        inValor.value = '';
        return;
    }

    // Adiciona valores ao contador e acumulador

    numContas++;
    valorTotal = valorTotal + valor;

    // Concatena as contas

    resposta = `${resposta + info} - R$: ${valor.toFixed(2)}\n`;

    outListaContas.textContent = `${resposta} ----------------------------------------------`;
    outTotal.textContent = `${numContas} Conta(s) - Total R$: ${valorTotal.toFixed(2)}`;

    // Limpa os campos e posiciona o cursor em inInfo

    inInfo.value = '';
    inValor.value = '';
    inInfo.focus();
}

var btRegistrar = document.getElementById('btRegistrar');
btRegistrar.addEventListener('click', registrarConta);