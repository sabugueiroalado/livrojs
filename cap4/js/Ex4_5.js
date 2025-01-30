var numeroDeContas = 0;
var totalDeContas = 0;

var resposta = '';

function contasDoMes() {
    var inInfo = document.getElementById('inInfo');
    var inValor = document.getElementById('inValor');
    var outInfo = document.getElementById('outInfo');
    var outValor = document.getElementById('outValor');

    var info = inInfo.value;
    var valor = Number(inValor.value);

    if (info == '' || valor == 0 || isNaN(valor)) {
        alert('Informe corretamente os dados solicitados');
        inInfo.focus();
        inInfo.value = '';
        inValor.value = '';
        return;
    }

    numeroDeContas++;
    totalDeContas = totalDeContas + valor;

    resposta = `${resposta + info} - R$: ${valor.toFixed(2)}\n`;

    outInfo.textContent = `${resposta} ------------------------------------------`;
    outValor.textContent = `${totalDeContas} Conta(s) - Valor R$: ${totalDeContas.toFixed(2)}`;

    inInfo.value = '';
    inValor.value = '';
    inInfo.focus();
}

var btRegistrar = document.getElementById('btRegistrar');
btRegistrar.addEventListener('click', contasDoMes);