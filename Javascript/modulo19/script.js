let names = ["Gerson", "Miguel", "Icaro"];

console.log(names);

let splicedNames = names.splice(1, 2, "Demetrio", "Pedro", "Heitor");

console.log(names);
console.log(splicedNames);

let extractedNames = names.slice(0, 2);
//pega os valores da lista, de acordo com a posição

console.log(names);
console.log(extractedNames);

names.forEach((name) => console.log(name));

const sums = (a, b) => { return a + b };

console.log(sums(12, 12));

const pow = (a, b) => { return Math.pow(a, b)}

console.log(pow(12, 2));

const verifyAge = (age) => {
    return age >= 18 && age != null;
}

console.log(verifyAge(19));
console.log(verifyAge(17));
console.log(verifyAge(0));