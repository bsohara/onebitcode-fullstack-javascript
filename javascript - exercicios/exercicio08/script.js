let espaconave = prompt("Qual o nome de sua espaçonave?");
let velEspaconave = 0;
const a = 5;
let opcaoEscolhida;

function menu() {
  let opcao;
  while (opcao != "1" && opcao != "2" && opcao != "3" && opcao != "4") {
    opcao = prompt(
      "Menu da espaçonave:\n1 - Acelerar velocidade\n2 - diminuir velocidade\n3 - Mostrar dados\n4 - Sair"
    );
  }
  return opcao;
}

function aumentaVel(velocidade) {
  let novaVelocidade = velocidade + a;
  return novaVelocidade;
}

function diminuiVel(velocidade) {
  let novaVelocidade = velocidade - a;
  if (novaVelocidade < 0) {
    alert("Nave está parada no momento. Vamos dar partida.");
    novaVelocidade = 0;
  }
  return novaVelocidade;
}

function mostraDados(espaconave, velocidade) {
  alert(
    `Nome da espaçonave: ${espaconave}.\nVelocidade atual: ${velocidade} km/s.`
  );
}

do {
  opcaoEscolhida = menu();
  switch (opcaoEscolhida) {
    case "1":
      velEspaconave = aumentaVel(velEspaconave);
      break;
    case "2":
      velEspaconave = diminuiVel(velEspaconave);
      break;
    case "3":
      mostraDados(espaconave, velEspaconave);
      break;
  }
} while (opcaoEscolhida != "4");
