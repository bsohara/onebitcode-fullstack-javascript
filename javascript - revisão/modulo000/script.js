const criacao = 1995;
const criador = 'Brendan Eich';
const paradigmas = ['Orientado a Objetos', 'Funcional', 'Orientado a eventos'];
const possuiTipagemDinamicaEFraca = true;

const verifica = (possuiTipagemDinamicaEFraca) => {
    possuiTipagemDinamicaEFraca == true ? console.log('Possui Tipagem Dinâmica e Fraca') : console.log(null);;
}

verifica(possuiTipagemDinamicaEFraca);
