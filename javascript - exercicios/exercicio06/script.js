let espaconave = prompt("Qual será o nome de sua espaçonave?");
let nova = "";

let substituicao = {
  velho: prompt("Caractere a ser substituído: "),
  novo: prompt("Inserir um novo caractere: "),
};

for (let i = 0; i < espaconave.length; i++) {
  espaconave[i] == substituicao.velho ? nova += substituicao.novo : nova += espaconave[i]
}

alert(`Espaçonave inserida: ${espaconave}\nNova espaçonave: ${nova}`);
