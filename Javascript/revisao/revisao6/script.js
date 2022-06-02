/** ==> mensagem para os divisores
 *  
 * - fazer a iteração, de 1 a 100, realizando seguintes mensagens
 * a. "Fizz": quando aparece os números em que são divisíveis por 3
 * b. "Buzz": quando aparecem números divisíveis por 5
 * c. "Fizz Buzz": quando aparecem números que são divisíveis por 15
 */


const fizz = 3;
const buzz = 5;
const fizzbuzz = 15;

const msg = (message) => {
    return console.log(message);
}

const module = (iterator, number) => {
    return iterator % number == 0;
}

for(let i=0; i<100; i++){
    module(i, fizz) ? msg('Fizz') : module(i, buzz) ? msg('Buzz') : module(i, fizzbuzz) ? msg('Fizz Buzz') : msg(i);
}

// 0, 1, 1, 2, 3, 5, 8, 13...