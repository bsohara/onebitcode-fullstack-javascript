let nave = {
    nome: '',
    tipo: '',
    maxima: 0,
    velocidade: 0,
    acelerar: (aceleracao) => {
        nave.velocidade += aceleracao
    }
}

function registraNave() {
    nave.nome = prompt("Qual o nome da sua espaçonave?");
    nave.tipo = prompt("Qual o tipo da espaçonave? Ex: Guerra, Neutra, Defesa, Transporte.");
    nave.maxima = Number(prompt("Qual a velocidade máxima da sua espaçonave?"));
}

function acelerarVeloc(medida="km/s.") {
    let aceleracao = Number(prompt("Quanto você quer acelerar? (${medida})"));
    nave.acelerar(aceleracao);
    if(nave.velocidade > nave.maxima){
        let mensagem = "Velocidade máxima ultrapassada";
        alert(`${mensagem.toUpperCase()}
                \nVelocidade da nave: ${nave.velocidade} ${medida}.
                \nVelocidade máxima: ${nave.maxima} ${medida}.`);
    }
}

function pararNave(medida="km/s."){
    alert(`Nome da espaçonave: ${nave.nome}\nTipo: ${nave.tipo}\nVelocidade: ${nave.velocidade} ${medida}\nVelocidade máxima: ${nave.maxima} ${medida}`);
    nave.velocidade = 0
}

function mostrarMenu(){
    let opcaoEscolhida;
    do {
        opcaoEscolhida =  Number(prompt("Você deseja: \n1-Acelerar \n2-Parar"));
        switch(opcaoEscolhida) {
            case 1:
                acelerarVeloc();
                break;
            case 2:
                pararNave();
                break;
            default:
                alert("Opção inválida");
        }
    } while (opcaoEscolhida != 2);
}

registraNave();
mostrarMenu();