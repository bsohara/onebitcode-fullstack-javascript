let espaconave = prompt('Qual será o nome de sua espaçonave?');
let nova = '';

let substituicao = {
    velho: prompt('Caractere a ser substituído: '),
    novo: prompt('Inserir um novo caractere: ')
};

for(let i=0; i<espaconave.length; i++){
    if(espaconave[i] == substituicao.velho){
        nova += substituicao.novo;
    }
    else {
        nova += espaconave[i];
    }
}

alert(`Espaçonave inserida: ${espaconave}\nNova espaçonave: ${nova}`)