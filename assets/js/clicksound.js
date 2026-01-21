// clicksound

document.addEventListener // aguarda todo o conteúdo do html carregar antes de rodar o código
    ('DOMContentLoaded', function() 
        {
            const clicksound = new Audio('../assets/sounds/clicksound.wav'); // variável clicksound que seleciona o arquivo de áudio
            
            function tocarSom() // função que toca o som ao clicar em qualquer lugar da página
            {
                clicksound.currentTime = 0; // reinicia o som para evitar sobreposição
                clicksound.play(); // toca o som
            }
    
        document.addEventListener('click', tocarSom); // adiciona o evento de clique para tocar o som
        }
    );