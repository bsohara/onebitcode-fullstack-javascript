let comidas = new Array();
let comida = '';
let opcaoEscolhida;

const insere = (lista, valor) => lista.push(valor);
const inserePrimeiro = (lista, valor) => lista.unshift(valor);

const removeUltimo = (lista) => lista.pop();
const removePrimeiro = (lista) => lista.shift();

const render = () => {
    comidas = comidas.join(' - ')
    setTimeout(() => {
        alert(`Lista = ${comidas}`);
    }, 4000);
}

function main() {

}



//render();
