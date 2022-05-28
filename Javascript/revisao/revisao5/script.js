/*const printNumbers = () => {
    for(let i=0; i<=10; i++){
        console.log();
    }
}

console.log(printNumbers());*/


const number = parseInt(prompt('Digite um valor para a tabuada: '));
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

console.log(printMulTables(number));

