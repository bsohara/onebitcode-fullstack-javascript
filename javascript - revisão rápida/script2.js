let pessoa = {
    nome: prompt("Qual seu nome?"),
    letraProibida: prompt("Qual letra você não quer?"),
    novoNome: '',
}

const mostrarDados = () => {
    alert(`Nome: ${pessoa.nome}\nLetra proibida: ${pessoa.letraProibida}\nNovo nome: ${pessoa.novoNome}`);
}

const inverter = () => {
    for(let i=pessoa.nome.length-1; i>=0; i--){
        pessoa.novoNome += pessoa.nome[i];
    }
    mostrarDados();
}

inverter();