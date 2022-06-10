/*let speed = 30;
let accel = 5;

const speedUp = (speed, accel) => {
    while (speed <= 100) {
        console.log(`Estamos andando com uma velocidade de ${speed} km/s.`);
        speed += accel;
    }
}

speedUp(speed, accel);*/

let word = 'Archaeology';
let pos = 0;
let wordLength = word.length;


const searchLetterA = (pos, word) => {
    while(pos <= wordLength){
        word[pos] == 'A' || word[pos] == 'a' ? console.log(pos) : null;
        
        pos += 1;
    }
}

searchLetterA(pos, word);