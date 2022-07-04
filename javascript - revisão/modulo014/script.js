function doubleSpd(speed, printer){
    console.log(`Entrei em doubleSpd`);
    let newSpd = speed * 2;
    printer(newSpd);
    return newSpd;
}

/*let printSpd = speed => {
    console.log(`Nova velocidade : ${speed} km/s.`);
}

let newSpd = doubleSpd(60, printSpd);
console.log(newSpd);*/

let anotherSpd = doubleSpd(50, speed => {
    console.log(`Outra velocidade ${speed} km/s.`);
})


