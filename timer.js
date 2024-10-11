const display = document.getElementById('display');

let timer;

// Função para iniciar o contador
function startTimer() {
    clearInterval(timer);
    
    // Define a data alvo
    const targetDate = new Date('2024-10-31T23:59:00');
    const currentDate = new Date();
    
    // Calcula a diferença em segundos
    let time = Math.floor((targetDate - currentDate) / 1000);

    if (time <= 0) {
        display.textContent = "O evento começou!";
        return;
    }

    timer = setInterval(() => {
        if (time <= 0) {
            clearInterval(timer);
            display.textContent = "Corra! O evento já começou!";
        } else {
            time--;
            display.textContent = formatTime(time);
        }
    }, 1000);
}

// Função para formatar o tempo
function formatTime(seconds) {
    const days = Math.floor(seconds / (24 * 3600));
    seconds %= (24 * 3600);
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${days} Dias ${hours} Horas ${minutes} Minutos ${secs} Segundos`;
}

window.onload = startTimer;
