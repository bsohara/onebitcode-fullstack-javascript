function doubleSpeed(speed, printer){
    console.log('Entrando em doubleSpeed')
    doubledSpd = speed * 2;
    printer(doubledSpd);
    return doubledSpd;
}

let anotherSpd = doubleSpeed(50, function(speed) {
    console.log(`Outra velocidade: ${speed}km/s`)
})

