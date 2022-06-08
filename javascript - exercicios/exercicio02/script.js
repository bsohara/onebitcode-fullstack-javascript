let maisVelho = {
    nome: prompt('Qual o nome da pessoa mais velha?'),
    idade: prompt('Qual a idade dela?')
}

let maisNovo = {
    nome: prompt('Qual o nome da pessoa mais nova?'),
    idade: prompt('Qual a idade dela?')
}

var calculoDiferenca = (valor1, valor2) => {
    if(valor1>=18 && valor2>=18){
        return valor1-valor2;
    }
    else{
        return null;
    }
}

alert(`Nome da pessoa mais velha: ${maisVelho.nome}.
    Idade desta pessoa: ${maisVelho.idade}.
    Nome da pessoa mais nova: ${maisNovo.nome}.
    Idade desta pessoa: ${maisNovo.idade}.
    Diferença das idades: ${calculoDiferenca(maisVelho.idade, maisNovo.idade)} anos.`);