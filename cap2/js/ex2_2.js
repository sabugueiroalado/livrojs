// Elaborar um programa para uma Vídeo Locadora, que leia o título e a duração de um filme em minutos. Exiba o título do filme e converta a duração para horas e minutos (HTML + JavaScript).
function converterDuracao () {

    // Criando referência a elementos da página

    var inTitulo = document.getElementById('inTitulo');
    var inTempo = document.getElementById('inTempo');
    var outTitulo = document.getElementById('outTitulo');
    var outTempo = document.getElementById('outTempo');

    // Obtendo conteúdo dos campos de entrada de dados <<ENTRADA DE DADOS>>

    var titulo = inTitulo.value;
    var tempo = Number(inTempo.value);

    // Arredonda para baixo o resultado da divisão <<PROCESSAMENTO DE DADOS>>

    var horas = Math.floor(tempo/60);

    // Obtendo o resto da divisão entre os números

    var minutos = tempo % 60;

    // Alterando os conteúdos dos paragarfos de titulo e tempo de duração <<SAÍDA DE DADOS>>

    outTitulo.textContent = titulo;
    outTempo.textContent = horas + " hora(s) e " + minutos + " minuto(s) ";
}

// Referenciando o elemento de botão da página

var btConverter = document.getElementById('btConverter');

// Adicionando um observador de evento no botão que executará a function (converterDuracao)

btConverter.addEventListener('click', converterDuracao);