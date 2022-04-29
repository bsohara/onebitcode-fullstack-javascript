let spaceship = prompt('Qual nome da espaçonave?');
let choosenLetter = prompt('Qual letra da espaçonave será substituída?');
let newLetter = prompt('Qual letra será inserida?');
let newSpaceship = '';

for(let i=0; i<spaceship.length; i++){
    if(spaceship[i] == choosenLetter || spaceship[i] == choosenLetter.toUpperCase()){
        newSpaceship += newLetter;
    }
    else {
        newSpaceship += spaceship[i];
    }
}


document.write(`Nome da espaçonave: ${spaceship} <br>Letra escolhida: ${choosenLetter} <br>Nova letra: ${newLetter} <br>Nome da espaçonave: ${newSpaceship}`);

