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

