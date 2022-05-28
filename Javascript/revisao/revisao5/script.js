//exercise 01
/*const printNumbers = () => {
    for(let i=0; i<=10; i++){
        console.log();
    }
}

console.log(printNumbers());*/

//exercise 02
/*const number = parseInt(prompt('Digite um valor para a tabuada: '));
const printMulTables = (number) => {
    return number > 0 ? tables(number) : console.log('Only positive numbers can be mutiplied.');
}

function tables(number){
    if(number > 0){
        for(let i=0; i<=10; i++){
            console.log(`${number} X ${i} = ${number * i}`);
        }
    }
}

console.log(printMulTables(number));*/

//exercise 03
const kilometer = 1.61;
var miles = parseInt(prompt('Digite o número em milhas: '));

const kmForMi = (miles) => { return miles > 0 ? miles * kilometer : 0 };
console.log(`Valor (em km): ${kmForMi(miles)} km.\nValor (em milhas): ${miles} milhas.`);
