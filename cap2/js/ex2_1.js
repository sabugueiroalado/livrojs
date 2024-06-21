// Faça um programa JavaScript que exibe o nome informado pelo usuário no campo de edição (HTML + JavaScript).


// Declarando a função ('mostrarOla')

function mostrarOla() {

    // Obtendo conteúdo do campo de formulário com o id ('nome') 

    var nome = document.getElementById('nome').value;

    // Alterando o contéudo do campo de paragrafo com o id ('resposta')

    document.getElementById('resposta').textContent = 'Olá ' + nome;
}

// Registrando o botão ('mostrar') como um ouvinte para o evento de ('click'), que quando clicado irá chamar a função ('mostrarOla')

var mostrar = document.getElementById('mostrar');
mostrar.addEventListener('click', mostrarOla);
