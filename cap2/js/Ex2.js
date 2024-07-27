function calcularTempoDeFilme() {

    // Referenciando os elementos da página

    var inNome = document.getElementById('inNome');
    var inTempo = document.getElementById('inTempo');
    var outNome = document.getElementById('outNome');
    var outTempo = document.getElementById('outTempo');

    // Obtendo conteúdo dos campos de entrada de dados <<ENTRADA DE DADOS>>

    var nome = inNome.value;
    var tempo = Number(inTempo.value);

    // Calculando <<PROCESSAMENTO DE DADOS>>

    var horas = Math.floor(tempo / 60);
    var minutos = tempo % 60;

    // Alterando o conteúdos dos titulos de resposta da página <<SAÍDA DE DADOS>>

    outNome.textContent = `~~~~ < ${nome} > ~~~~`;
    outTempo.textContent = `O Filme possuí ${horas} hora e ${minutos} minutos`;
}

// Referenciando o elemento de botão da página

var btMostrar = document.getElementById('btMostrar');

// Adicionando um observador de evento no botão que executará a function

btMostrar.addEventListener('click', calcularTempoDeFilme)