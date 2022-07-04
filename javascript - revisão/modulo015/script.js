//1. intrudução aos arrays
/*let numeros = [0,1,2,3,4,5,6,7,8,9];
console.log(numeros);

let pares = numeros.filter(numero => numero %2 === 0);
console.log(pares);*/

//2. funções comuns
let topPlayers = ["Le me", "L33", "Omid"];
console.log(topPlayers);

//a. any.length
console.log(topPlayers.length);

//b. push
insertedTopPlayer = topPlayers.push("Maikeru");
console.log(insertedTopPlayer);
console.log(topPlayers);


//c. pop
let removedTopPlayer = topPlayers.pop();
console.log(removedTopPlayer);
console.log(topPlayers);


//d. shift
let removedFirstPlace = topPlayers.shift();
console.log(removedFirstPlace);
console.log(topPlayers);

//e. unshift
let shiftIndex0 = topPlayers.unshift("Yotyan");
console.log(shiftIndex0);
console.log(topPlayers);

//f. indexOf
let yotyanPos = topPlayers.indexOf("Yotyan");
console.log(`Posição do jogador: ${yotyanPos + 1}º`);

let omidPos = topPlayers.indexOf("Omid");
console.log(`Posição do jogador: ${omidPos + 1}º`);

