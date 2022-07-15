var linguagem = 'javascript';
var criacao = 1995;
var criador = 'Brendan Eich';
var paradigmas = ['Orientado a Objetos', 'Funcional', 'Orientado a Eventos'];
var conteudos = [];
var conteudos = ['tipagens', 'operações', 'condições', 'loops', 'arrays', 'coleções', 'objetos', 'orientação a objetos', 'DOM', 'eventos'];

const verificaTipagem = (tipagem) => {
    tipagem == true ? console.log('Possui Tipagem Dinâmica e Fraca') : console.log(null);;
}

const imprimeArrays = (array) => {
    for(let i=0; i<array.length; i++){
        console.log(`- ${array[i]}\n`);
    }
}

const mensagem = () => {
    imprimeArrays(paradigmas);
    imprimeArrays(conteudos);
}
