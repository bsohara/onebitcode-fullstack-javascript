var nome = prompt('Qual o seu nome?');
var idade = prompt('Qual sua idade?');

const confirmaIdade = confirm(`Esta é sua idade? Idade: ${idade}`);

alert(`Nome: ${nome}\nIdade: ${idade}\nÉ essa idade mesmo? ${confirmaIdade}`)
