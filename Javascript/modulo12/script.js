function sum(a, b){
    a + b >= 0 ? document.write(`Resultado da adição: <b>${a + b}</b>`) : document.write(`Inválido`);
}

function sub(a, b){
    a - b >= 0 ? document.write(`Resultado da subtração: <b>${a - b}</b>`) : document.write(`Inválido`);
}

function mul(a, b){
    a * b >= 0 ? document.write(`Resultado da multiplicação: <b>${a * b}</b>`) : document.write(`Inválido`);
}

function div(a, b){
    a / b >= 0 ? document.write(`Resultado da divisão: <b>${a / b}</b>`) : document.write(`Inválido`);
}

function mod(a, b){
    a % b >= 0 ? document.write(`Resultado do módulo: <b>${a % b}</b>`) : document.write(`Inválido`);
}

function chooseOperations(op, a, b) {

    switch (op) {
        case '+':
            sum(a, b);
            break;

        case '-':
            sub(a, b);
            break;

        case '*':
            mul(a, b);
            break;

        case '/':
            div(a, b);
            break;

        case '%':
            mod(a, b);
            break;

        default:
    }
}

function main(){


    var n1 = parseInt(prompt(`Qual valor para n1?`));
    var n2 = parseInt(prompt(`Qual valor para n2?`));
    var op = prompt(`Qual operação será realizada?`);

    chooseOperations(op, n1, n2);
}

main();