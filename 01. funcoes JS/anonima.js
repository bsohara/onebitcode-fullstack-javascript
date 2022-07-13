let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//filtra os números que possuem resto 1 (ímpares)
let odds = numbers.filter(number => number % 2 === 1);
console.log(odds);

//filtra os números que possuem resto 0 (pares)
let evens = numbers.filter(number => number % 2 === 0);
console.log(evens);

//filtra os números que possuem resto 0 e dobra
let doubleEvens = numbers.filter(number => number % 2 === 0).map(number => number * 2);
console.log(doubleEvens);

let invertedNumbers = () => {
    for(let i=numbers.length-1; i >= 0; i--){
        console.log(numbers[i]);
    }
}

invertedNumbers();

let name = "Bruno Yoshihiro Sohara";
let newName = '';
let invertedName = () => {
    for(let i=name.length-1; i>=0; i--){
        newName += name[i];
    }

    console.log(newName);
}

invertedName();

let name2 = "Bruno Yoshihiro Sohara"
let findLetter = "y";
let newName2 = '';
let invertedName2 = () => {
    for(let i=name2.length-1; i>=0; i--){
        newName2 += name2[i];
        if(name2[i] === findLetter || name2[i] === findLetter.toUpperCase()){
            break;
        }
    }
    console.log(newName2);
}
console.log(name2);
invertedName2();