 // Lógica para abrir/fechar o dropdown
 document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.getElementById('customDropdown');
    const button = dropdown.querySelector('.dropdown-button');
    const menu = dropdown.querySelector('.dropdown-menu');

    button.addEventListener('click', function () {
        dropdown.classList.toggle('show'); // Alterna a classe "show"
    });

    // Fecha o dropdown se clicar fora
    document.addEventListener('click', function (event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('show');
        }
    });
});


// Função para manipular tamanho de fonte //
function changeFontSize(action) {
    // Alvo de alteração: títulos e inputs
    const elements = document.querySelectorAll('.titulo, .subtitulo, input, .titulo-explore, .subtitulo-explore');
    elements.forEach((element) => {
        let currentSize = parseFloat(window.getComputedStyle(element).fontSize);
        if (action === 'increase') {
            element.style.fontSize = (currentSize + 2) + 'px';
        } else if (action === 'decrease') {
            if (currentSize > 12) { // Evita fontes menores que 12px
                element.style.fontSize = (currentSize - 2) + 'px';
            }
        }
    });
}


