/*let i = 0;
let frameworks = ['Jasmine', 'BackboneJS', 'Jest', 'ReactJS', 'VueJS', 'React Native', 'Express', 'Next', 'NodeJS'];

document.write(`<h1>Frameworks apresentados: ${frameworks.length}</h1>`);
for(i=0; i<frameworks.length; i++){
    document.write(`Framework ${i+1}: <b>${frameworks[i]}</b><br>`);
}*/

//1. While
let speed = 50;
let accel = 5;

while(speed <= 100){
    document.write(`Acelerando: estamos a ${speed} km/s.<br>`);
    speed += accel;
    //speed = speed + accel;
}


let constellation = "Andromeda";
let pos = 0;
let constellationLength = constellation.length;

while(pos < constellationLength){
    if(constellation[pos] == 'd' || constellation[pos] == 'D'){
        console.log(`Posição: ${pos}`);
    }
    pos++;
}

//3. Do-While