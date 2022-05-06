let nomes = [];

let opcao = prompt(`Insira qual operação será realizada:
1 - Inserir nome
2 - Remover nome específico
3 - Gerar lista
4 - Sair do programa
`);

while(opcao != "4"){
    switch(opcao){
        case "1":
            var nome = prompt('Digite um nome: ');
            nomes.push(nome);
            break;

        case "2":
            var nome = prompt('Insira um nome para remover: ');
            const posicao = nomes.indexOf(nome);
            (posicao > -1) ? nomes.splice(posicao, 1) : console.log('Nome não encontrado.');
            break;

        case "3":
            document.write('<h1>Times de Projeto</h1>')
            for(let i=0; i<nomes.length; i++){
                document.write(`<b>${nomes[i]}</b><br>`);
            }
            break;
            console.log(`Lista gerada. Aperte 4 para visualizar.`);
    }
    console.log(nomes);

    opcao = prompt(`Insira qual operação será realizada:
    1 - Inserir nome
    2 - Remover nome específico
    3 - Gerar lista
    4 - Sair do programa
    `);
}


