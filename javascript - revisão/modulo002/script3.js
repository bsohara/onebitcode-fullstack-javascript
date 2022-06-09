let speed = 130;

const printMessage = (msg) => {
    console.log(msg);
}

const verifySpeed = (speed) => {
    speed < 100 ? printMessage('Estamos em uma velocidade razoável') : 
    speed <= 100 ? printMessage('Estamos próximos à velocidade de risco') : 
                    printMessage('Velocidade de risco!');
}

verifySpeed(speed);