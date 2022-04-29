let speed = 20;
let acceleration = 5;

do {
    document.write(`Estamos a ${speed} km/s<br>`);
    speed += acceleration;
} while (speed <= 110)