let spaceship = prompt("Qual nome da espaçonave?");
let letter = prompt("Qual letra será proibida?");

let invertedSpaceship = '';

function dontAllowLetter(spaceship, letter){
    for(let i=spaceship.length - 1; i>=0; i--){
        invertedSpaceship += spaceship[i];
    
        if(spaceship[i]==letter){
            break;
        }
    }

    document.write(`Nome da espaçonave original: ${spaceship}<br>Nome da espaçonave nova: ${invertedSpaceship}`);
}

dontAllowLetter(spaceship, letter);