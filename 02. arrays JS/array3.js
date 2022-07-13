let comidas = new Array();
let comida = "";
let opcaoEscolhida;

let insere = () => Array.isArray(comidas) ? comidas.push(comida) : null;
let inserePrimeiro = () => comidas.unshift(comida);

let removeUltimo = (comidas) => comidas.pop();
let removePrimeiro = (comidas) => comidas.shift();

let mostraInseridos = () => {
  alert(`${comidas}`);
}

(() => {
  do {
    opcaoEscolhida = parseInt(prompt("Adicionando comidas.\n\n1-Inserir comida\n2-Remover comida\n3-Mostrar comidas\n4-Sair do programa"));
    
    switch (opcaoEscolhida) {
      case 1:
        comida = prompt("Qual comida inserir? (emoji -> windows + .): ");
        console.log("Inserindo a comida na lista.");
        insere();
        break;

      case 2:
        console.log("Removendo a comida na lista.");
        remove(comidas);
        break;

      case 3:
        console.log("Mostrando as comidas inseridas.");
        mostraInseridos();
        break;

      case 4:
        alert("Saindo do programa. . .");
        break;

      default:
        alert("Opção inválida. Escolha uma das opções mostradas anteriormente.");
    }
  } while (opcaoEscolhida != 4);
})();
