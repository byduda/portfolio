// portfolio/modal.js

document.addEventListener('DOMContentLoaded', () => {
    // seleciona os elementos que vão abrir o modal
    const gridItems = document.querySelectorAll('.template, .pixelart');
    
// seleciona os elementos do modal
    const modalOverlay = document.getElementById('modal-overlay');
    const modalTitle = document.getElementById('modal-title');
    const modalImg = document.getElementById('modal-img');
    // Seleção de elementos que podem não existir (como em pixel_art.html)
    const modalDescription = document.getElementById('modal-description');
    const modalDesign = document.getElementById('modal-design');
    const closeModalBtn = document.getElementById('modal-close-btn');
    
    // NOVO: Seleciona todos os botões e links de ação dentro dos templates
    const actionButtons = document.querySelectorAll('.template .pixelart .botoes, .template .pixelart a.botoes');

// função para abrir o modal
    function openModal(item) {
        // Pega as informações dos data-attributes do item clicado
        const title = item.getAttribute('modal-title'); // Adiciona fallback
        const imgSrc = item.getAttribute('modal-img-src');
        const description = item.getAttribute('modal-description');
        const design = item.getAttribute('modal-design');

        // preenche o modal com as informações
        modalTitle.textContent = title;
        modalImg.src = imgSrc;
        modalImg.alt = `Imagem do projeto ${title}`;
        
        // **ALTERAÇÃO CRÍTICA AQUI:** Verifica se os elementos existem antes de tentar preencher
        if (modalDescription && description) {
            modalDescription.innerHTML = description;
        }
        
        if (modalDesign && design) {
            modalDesign.innerHTML = design;
        }

        // mostra o modal
        modalOverlay.style.display = 'flex';
    }

    // função para fechar o modal
    function closeModal() {
        modalOverlay.style.display = 'none';
    }

    // ADIÇÃO CRÍTICA: Impedir que cliques nos botões abram o modal
    actionButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // ESSENCIAL: Impede que o clique suba para o elemento .template pai
            event.stopPropagation();
            // Para o caso do link de Preview, permite que ele siga para o link
            // Para o caso do botão 'Coven', o clique é anulado e nada acontece
        });
    });

    // adiciona o evento de clique para cada item do template
    gridItems.forEach(item => {
        // Adiciona o evento de clique APENAS na FIGURA para simular o "zoom-in"
        // O evento de clique principal deve ser movido da div.template (o item inteiro) para a figura!
        const figure = item.querySelector('figure');

        // Note que o evento agora está no `figure`
        figure.addEventListener('click', () => {
            openModal(item);
        });
        // adiciona um cursor de ponteiro para indicar que é clicável
        figure.style.cursor = 'pointer'; 
    });

    // Removendo o cursor dos itens gerais, pois o clique está na figure
    // Opcional: Se quiser manter o cursor no item todo, mantenha o `item.style.cursor = 'pointer';`

    // adiciona o evento de clique para o botão de fechar
    closeModalBtn.addEventListener('click', closeModal);

    // adiciona o evento de clique no overlay (fundo) para fechar o modal
    modalOverlay.addEventListener('click', (event) => {
        // fecha o modal apenas se o clique for no fundo (overlay) e não no conteúdo
        if (event.target === modalOverlay) {
            closeModal();
        }
    });
});