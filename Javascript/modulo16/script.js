var nome = prompt('qual seu nome?');
var idade = parseInt(prompt('Qual sua idade?'));


const verificaMaioridade = (nome, idade) => {
    idade > 18 ? `Nome: ${nome}\nIdade: ${idade}` : `Menor de idade`;
}

const verificacao1 = verificaMaioridade(nome, idade);
console.log(verificacao1);