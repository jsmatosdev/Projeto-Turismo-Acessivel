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
    const elements = document.querySelectorAll('.titulo, .subtitulo, input, .titulo-explore, .subtitulo-explore, .input-group, .form-select, .subtitulo-exp, .conteudo-filtro');
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


// Seleciona o carrossel
const carousel = document.querySelector('#cardCarousel');
const carouselInstance = new bootstrap.Carousel(carousel);

// Variáveis para rastrear o movimento
let startX = 0;
let endX = 0;

// Evento de início do arraste
carousel.addEventListener('mousedown', (e) => {
    startX = e.clientX; // Posição inicial do mouse
});

// Evento durante o arraste
carousel.addEventListener('mousemove', (e) => {
    if (startX !== 0) {
        endX = e.clientX; // Posição atual do mouse
    }
});

// Evento de final do arraste
carousel.addEventListener('mouseup', () => {
    if (startX !== 0 && endX !== 0) {
        // Verifica a direção do movimento
        if (endX < startX) {
            carouselInstance.next(); // Avança para o próximo slide
        } else if (endX > startX) {
            carouselInstance.prev(); // Volta para o slide anterior
        }
    }
    startX = 0;
    endX = 0;
});

// Evento para garantir que o arraste é finalizado ao sair do carrossel
carousel.addEventListener('mouseleave', () => {
    startX = 0;
    endX = 0;
});

