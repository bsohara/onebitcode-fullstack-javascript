let esteira = {
    velocidade: 0,
    aceleracao: 5,
    aumentar: (velocidade, aceleracao) =>  esteira.velocidade += esteira.aceleracao,
    diminuir: (velocidade, aceeleracao) => esteira.velocidade -= esteira.aceleracao
}
let opcaoEscolhida;

let aumentarVelocidade = (aceleracao) => {
    esteira.aumentar(aceleracao);
    console.log(`Aumentando a velocidade.`);
}   

let diminuirVelocidade = (aceleracao) => {
    esteira.velocidade > 0 ? esteira.diminuir(aceleracao) : alert("A esteira está parada. Considere aumentar gradativamente a velocidade da esteira.")
    console.log(`Diminuindo a velocidade.`);
    
}   

let mostrarVelocAtual = (medida="km/s.") => {
    alert(`Velocidade atual: ${esteira.velocidade} ${medida}`);
}

let pararEsteira = () => {
    console.log("Parando a esteira.");
    esteira.velocidade = 0;
}

const funcaoPrincipal = () => {
  do {
    opcaoEscolhida = parseInt(prompt("Javascript Treadmill. Digite uma das opções:\n1-Aumentar a velocidade\n2-Diminuir a velocidade\n3-Mostrar velocidade atual\n4-Parar esteira"));

    switch (opcaoEscolhida) {
      case 1:
        aumentarVelocidade();
        break;

      case 2:
        diminuirVelocidade();
        break;

      case 3:
        mostrarVelocAtual();
        break;

      case 4:
        pararEsteira();
        break;

      default:
        alert(`Opção inválida. Tente outras opções existentes.`);
    }
  } while (opcaoEscolhida != 4);
}

funcaoPrincipal();



