/*function escreva() {
    console.log(`Olá, Yotyan.`);
}

escreva();

function escrevaMensagem(mensagem) {
    console.log(mensagem);
}

escrevaMensagem("Olá, Yotyan.");

function soma(a, b){
    return a + b;
}

console.log(soma(1, 2));

var r = soma("Terra", 4);
console.log(r);

function somaTudo(numeros) {
    var total = 0;
    for(var numero of numeros){
        total = total + numero;
    }

    return total;
}

var array = [3, 4, 5, 12, 11, 2, 7, 13];
var tot = somaTudo(array);
console.log(tot);

function escreverEnd(rua, cidade, pais, ...complementos){
    console.log(rua);
    console.log(cidade);
    console.log(pais);
    console.log(complementos);
}

escreverEnd('Rua nhemon da silva', 'Campinas', 'Brasil', 'SP', '12345-678', 'Bloco T', 'Apto 64');

*/

var subtracao = function(a, b){
    return a - b;
}

var resultado = subtracao(1, 2);
console.log(resultado);


(function(nome){
    console.log(`Executado automaticamente, ${nome}.`);
}('Bruno'))