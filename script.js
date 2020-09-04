setInterval(setClock, 1000)

let hourHand = document.querySelector('[data-hour-hand]');
let minuteHand = document.querySelector('[data-minute-hand]');
let secondHand = document.querySelector('[data-second-hand]');

function setClock() {
    let currentData = new Date(); 
    let secondsRatio = currentData.getSeconds() / 60;
    let minutesRatio = (secondsRatio + currentData.getMinutes()) / 60;
    let hoursRatio = (minutesRatio + currentData.getHours()) / 12;

    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}
setClock();