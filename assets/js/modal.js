// modal do portfolio

document.addEventListener('DOMContentLoaded', () => // aguarda todo o conteúdo do html carregar antes de rodar o código
    {
        const gridItems = document.querySelectorAll('.template, .pixelart'); // seleciona os elementos que vão abrir o modal
    
        // elementos do modal
        const modalOverlay = document.getElementById('modal-overlay');
        const modalTitle = document.getElementById('modal-title');
        const modalImg = document.getElementById('modal-img');
        const modalDescription = document.getElementById('modal-description');
        const modalDesign = document.getElementById('modal-design');
        const closeModalBtn = document.getElementById('modal-close-btn');
    
        // seleciona todos os botões e links de ação dentro dos templates
        const actionButtons = document.querySelectorAll('.template .pixelart .botoes, .template .pixelart a.botoes');

        // função para abrir o modal
        function openModal(item) {
    const title = item.getAttribute('modal-title');
    const imgSrcRaw = item.getAttribute('modal-img-src'); // Pega o texto com os caminhos
    
    modalTitle.textContent = title;
    
    // Limpa o conteúdo atual do corpo do modal para não acumular imagens de cliques anteriores
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = ''; 

    // Transforma a string em um Array (lista) de caminhos
    // O .split(',') corta o texto onde tem vírgula
    const images = imgSrcRaw.split(',');

    images.forEach((src) => {
        const newImg = document.createElement('img');
        newImg.src = src.trim(); // .trim() remove espaços em branco extras
        newImg.alt = `Imagem do projeto ${title}`;
        newImg.className = 'modal-img-item'; // Classe para você estilizar no CSS
        modalBody.appendChild(newImg);
    });

    modalOverlay.style.display = 'flex';
}

        // função para fechar o modal
        function closeModal() 
        {
            modalOverlay.style.display = 'none';
        }   

        // impedir que cliques nos botões abram o modal
        actionButtons.forEach(button => 
            {
                button.addEventListener('click', (event) => 
                    {
                        // impede que o clique suba para o elemento .template pai
                        event.stopPropagation();
                    });
            });
            
        // adiciona o evento de clique para cada item do template
        gridItems.forEach(item => 
            {
                // Adiciona o evento de clique APENAS na FIGURA para simular o "zoom-in"
                // O evento de clique principal deve ser movido da div.template (o item inteiro) para a figura!
                const figure = item.querySelector('figure');

                // Note que o evento agora está no `figure`
                figure.addEventListener('click', () => 
                    {
                        openModal(item);
                    });
        
                // adiciona um cursor de ponteiro para indicar que é clicável
                figure.style.cursor = 'pointer'; 
            });


        closeModalBtn.addEventListener('click', closeModal);

        // adiciona o evento de clique no overlay (fundo) para fechar o modal
        modalOverlay.addEventListener('click', (event) => 
            {
                // fecha o modal apenas se o clique for no fundo (overlay) e não no conteúdo
                if (event.target === modalOverlay) 
                    {
                        closeModal();
                    }
            });
    });