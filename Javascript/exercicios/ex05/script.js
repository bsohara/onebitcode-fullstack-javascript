let spaceship = prompt('Olá! \nQual o nome da espaçonave?');
let warps = 0;
let option = prompt('Deseja fazer as dobras?\n1 - Sim\n2 - Não');

while(option == 1){
        warps++;
        option = prompt('Deseja fazer as dobras?\n1 - Sim\n2 - Não');
}

document.write(`Nome da espaçonave: ${spaceship}<br>Quantidade de dobras: ${warps}`);