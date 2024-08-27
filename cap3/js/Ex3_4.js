function horaNaFranca() {
    var inHoraBrasil = document.getElementById('inHoraBrasil');
    var outHoraFranca = document.getElementById('outHoraFranca');

    var horaBrasil = Number(inHoraBrasil.value);

    if (horaBrasil === '' || isNaN(horaBrasil)) {
        alert('Informe corretamente o horário no Brasil');
        inHoraBrasil.focus();
        return;
    }

    var horaFranca = horaBrasil + 5;

    if (horaFranca > 24) {
        horaFranca = horaFranca - 24;
    }

    outHoraFranca.textContent = `Horário na França: ${horaFranca}`;
}

var btCalcular = document.getElementById('btCalcular');
btCalcular.addEventListener('click', horaNaFranca);