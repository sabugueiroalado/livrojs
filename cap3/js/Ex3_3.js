var bairro = prompt('Informe o bairro de entrega!');
var taxa;
switch (bairro) {
    case 'Centro':
        taxa = 5.00;
        break;
    case 'Fundos':
    case 'Rio Caveiras':
    case 'Universitário':
        taxa = 7.00;
        break;
    case 'Vendaval':
        taxa = 7.50;
        break;
    case 'Jardim Carandai':
    case 'Jardim Janaina':
        taxa = 8.75;
        break;
    case 'Praia João Rosa':
        taxa = 8.00;
        break;
    default:
        taxa = 10.00;
        break;
}

alert(`Taxa de Entrega: ${taxa}`);