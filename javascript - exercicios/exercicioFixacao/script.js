//let pedido = prompt('Qual marmitex gostaria de pedir?');
//let tamanho = prompt('Qual o tamanho da marmitex?\n1-Pequena\n2-Média\n3-Grande');

const pequena = 25;
const media = 50;
const grande = 75;

const pesoP = 0.400;
const pesoM = 0.600;
const pesoG = 0.800;

const calculoPreco = (peso, preco) => {
    return peso * preco;
}

console.log(calculoPreco(pesoP, pequena));
console.log(calculoPreco(pesoM, media));
console.log(calculoPreco(pesoG, grande));