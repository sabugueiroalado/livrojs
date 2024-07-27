function mostrarMensagemAoUsuario() {

    // Referenciando os elementos da página

    var inNome = document.getElementById('inNome')
    var outMensagem = document.getElementById('outMensagem')

    // Obtendo conteúdo dos campos de entrada de dados <<ENTRADA DE DADOS>>

    var nome = inNome.value;

    // Alterando o conteúdos dos titulos de resposta da página <<PROCESSAMENTO E SAÍDA DE DADOS>>

    outMensagem.textContent = `Olá ${nome}, seja bem vindo ao curso de JS!`
}

// Referenciando o elemento de botão da página

var btMostrar = document.getElementById('btMostrar');

// Adicionando um observador de evento no botão que executará a function

btMostrar.addEventListener('click', mostrarMensagemAoUsuario)