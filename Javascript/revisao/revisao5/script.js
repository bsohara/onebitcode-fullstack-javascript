/** <==== divisão ====> 
 * função 1 ==> imprimir as mensagens
 * função 2 ==> realizar o cálculo: do módulo de cada número da divisão
 * 
 * regras:
 * - se os números da iteração forem divisíveis por 3, 5 ou 15; 
 * devem mostrar as mensagens 'Fizz', 'Buzz' ou 'Fizz Buzz', respectivamente
 * 
 * - caso o número da iteração não seja divisível por alguns dos números acima, 
 * deve-se mostrar o número no console.
 */

const printMessage = (message) => {
    console.log(message);
}

const numberModule = (iterator, number) => {
    return iterator % number == 0;
}

for (let i=0; i<100; i++){
    numberModule(i, 15) ? printMessage('Fizz Buzz') : numberModule(i, 3) ? printMessage('Buzz') : numberModule(i, 3) ? printMessage('Fizz') : printMessage(i);
}

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
/*const kilometer = 1.61;
var miles = parseInt(prompt('Digite o número em milhas: '));

const kmForMi = (miles) => { return miles > 0 ? miles * kilometer : 0 };
console.log(`Valor (em km): ${kmForMi(miles)} km.\nValor (em milhas): ${miles} milhas.`);*/




