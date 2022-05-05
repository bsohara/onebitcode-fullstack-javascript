let nomes = [];
let nome = prompt('Digite um nome: ');
let opcao = parseInt(prompt(`Escolha uma opção a ser realizada:
1 - Adicionar um nome
2 - Encontrar um nome específico
3 - Verificar a quantidade de itens
4 - Sair do programa`));

while( opcao != 3 ){
    switch(opcao){
        case 1:
            nomes.push(nome);
            break;

        case 2:
            for(let i=0; i<nomes.length; i++){
                if(nomes.includes(nome)){
                    alert(`Nome encontrado no array!`);
                    break;
                }
                else {
                    alert(`Nome não encontrado!`);
                    break;
                }
            }
        
        case 3:
            alert(nomes.length);
            break;

        default:
            break;
    }
    console.log(nomes);

    let nome = prompt('Digite um nome: ');

    opcao = parseInt(prompt(`Escolha uma opção a ser realizada:
    1 - Adicionar um nome
    2 - Encontrar um nome específico
    3 - Listar os nomes inseridos
    4 - Sair do programa`));

}