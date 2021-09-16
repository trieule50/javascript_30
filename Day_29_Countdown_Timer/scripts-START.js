let countdown;
const timerDisplay = document.querySelector('.display__time-left');

function timer(seconds){
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds)
    
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if(secondsLeft < 0){
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft)
    }, 1000)
}

function displayTimeLeft(seconds){
    const mintues = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${mintues}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds};`
    document.title = display;
    timerDisplay.textContent = display;
}