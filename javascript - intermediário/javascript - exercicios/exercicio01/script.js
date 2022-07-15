class Espaconave {
    constructor(nome, qtdTripulantes) {
        this.nome = nome;
        this.qtdTripulantes = qtdTripulantes;
        this.engatada = false;
        this.portasAbertas = false;
    }

    engatar() {
        this.engatada = true;
        this.portasAbertas = true;
    }
}

let espaconavesEngatadas = [];
let opcaoEscolhida;

const criarEspaconave = () => {
    let nomeEspaconave = prompt("Digite o nome da espaçonave: ");
    let qtdTripulantesEspaconave = parseInt(prompt("Digite a quantidade de tripulantes da espaçonave: "));
    let espaconave = new Espaconave(nomeEspaconave, qtdTripulantesEspaconave);
    return espaconave;
}

const imprimirEspaconaves = (espaconavesEngatadas) => {
    let listaEspaconaves = "";
    espaconavesEngatadas.forEach((espaconave, posicao) => {
        listaEspaconaves += (posicao + 1) + " - " + espaconave.nome + " (" + espaconave.qtdTripulantes + " tripulantes.)\n";
    })
    alert(listaEspaconaves);
}

while(opcaoEscolhida != 3) {
    opcaoEscolhida = mostraMenu();
    switch(opcaoEscolhida){
        case 1:
            let adcEspaconave = criarEspaconave();
            adcEspaconave.engatar();
            espaconavesEngatadas.push(adcEspaconave);
            
            break;

        case 2:
            imprimirEspaconaves(espaconavesEngatadas);
            
            break;

        case 3:
            alert("Saindo do programa");
            break;
    }
}


function mostraMenu() {
    let opcaoEscolhida;
    while(opcaoEscolhida != 1 && opcaoEscolhida != 2 && opcaoEscolhida != 3){
        opcaoEscolhida = parseInt(prompt("O que quer fazer?\n1 - Engatar nave\n2 - Imprimir naves\n3 - Sair do programa"));
    }

    return opcaoEscolhida;   
}