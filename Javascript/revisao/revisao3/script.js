const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function isOdd(array, oddArray = []){
    for(let i=0; i<array.length; i++){
        (array[i] % 2 !== 0) ? oddArray.push(array[i]) : null;
    }

    return oddArray;
}

const oddNumb = isOdd(numbers);
console.log(oddNumb);



const oddNumb2 = numbers.filter((number) => number % 2 !== 0);
console.log(oddNumb2);