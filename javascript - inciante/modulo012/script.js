console.log(speedUp(60, 10));
console.log(doubleSpeed(50));


let doubleSpeed = function(speed) {
    return speed * 2;
}

function speedUp(speed, ac) {
    return speed + ac + 'km/s.';
}