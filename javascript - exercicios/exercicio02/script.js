let older = {
    name: prompt('Qual o nome da pessoa mais velha?'),
    age: prompt('Qual a idade dela?')
}

let younger = {
    name: prompt('Qual o nome da pessoa mais nova?'),
    age: prompt('Qual a idade dela?')
}

const calcDifference = (val1, val2) => {
    if(val1>=18 && val2>=18){
        return val1-val2;
    }
    else{
        return null;
    }
}

alert(`Nome da pessoa mais velha: ${older.name}.
    Idade desta pessoa: ${older.age}.
    \nNome da pessoa mais nova: ${younger.name}.
    Idade desta pessoa: ${younger.age}.
    \nDiferença das idades: ${calcDifference(older.age, younger.age)} anos.`);