/*let numero = prompt('qual seu número? ');

switch(numero % 2) {
    case 0:
        alert('Número divisível por 2');
        break;

    case 1:
        alert('Número não divisível por 2');
        break;
    
    default:
        alert('Número desconhecido.');    
}*/

let operacao = prompt("Qual será a operação que gostaria de ver? ");

switch (operacao) {
  case "Adição", "adição":
    alert(`Operação escolhida: ${operacao}. Exemplo de operação: 10 + 5 = ${10 + 5}`);
    break;

  case "Subtração", "subtração":
    alert(`Operação escolhida: ${operacao}. Exemplo de operação: 10 - 5 = ${10 - 5}`);
    break;

  case "Multiplicação", "multiplicação":
    alert(`Operação escolhida: ${operacao}. Exemplo de operação: 10 * 5 = ${10 * 5}`);
    break;

  case "Divisão", "divisão":
    alert(`Operação escolhida: ${operacao}. Exemplo de operação: 10 / 5 = ${10 / 5}`);
    break;

  case "Módulo", "módulo":
    alert(`Operação escolhida: ${operacao}. Exemplo de operação: 10 % 5 = ${10 % 5}`);
    break;

  default:
    alert(`Operação não identificada.`);
}
