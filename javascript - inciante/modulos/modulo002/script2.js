console.log("AND == &&");
console.log(4 >= 2 && 4 != 5); //v
console.log(4 <= 2 && 4 != 5); //f
console.log(4 >= 2 && 4 == 5); //f
console.log(4 <= 2 && 4 == 5); //f

console.log();
console.log("OR == ||");
console.log(4 >= 2 || 4 != 5); //v
console.log(4 <= 2 || 4 != 5); //v
console.log(4 >= 2 || 4 == 5); //v
console.log(4 <= 2 || 4 == 5); //f

console.log();
console.log("NOT == !");
console.log(!(4 >= 2 || 4 != 5)); //f
console.log(!(4 <= 2 || 4 != 5)); //f
console.log(!(4 >= 2 || 4 == 5)); //f
console.log(!(4 <= 2 || 4 == 5)); //v

console.log();
console.log("===================================================");
let nome = "Bruno";
console.log("AND com strings == &&");
console.log(nome.length == 5 && nome == 'Bruno'); //v
console.log(nome.length == 6 && nome == 'Bruno'); //f
console.log(nome.length == 5 && nome == 'Breno'); //f
console.log(nome.length == 10 && nome >= 'Breno'); //f

console.log();
console.log("OR com strings == ||");
console.log(nome.length == 5 || nome == 'Bruno'); //v
console.log(nome.length == 6 || nome == 'Bruno'); //v
console.log(nome.length == 5 || nome <= 'Breno'); //v
console.log(nome.length == 10 || nome <= 'Breno'); //f

console.log();
console.log("NOT com strings == !");
console.log(!(nome.length == 5 || nome == 'Bruno')); //f
console.log(!(nome.length == 6 || nome == 'Bruno')); //f
console.log(!(nome.length == 5 || nome == 'Breno')); //f
console.log(!(nome.length == 10 || nome == 'Breno')); //v