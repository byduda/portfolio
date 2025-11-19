document.addEventListener('DOMContentLoaded', function() {
    const clicksound = new Audio('../assets/sounds/clicksound.wav');
    
    function tocarSom() {
        clicksound.currentTime = 0;
        clicksound.play();
    }
    
    document.addEventListener('click', tocarSom);
});