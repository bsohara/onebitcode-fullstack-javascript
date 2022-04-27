//operações comuns
console.log(5+4);

console.log(5-4);

console.log(5*4);

console.log(5/4);

console.log(5%4);


//concatenação - operações com strings
palavra1 = "Planeta";
palavra2 = "Terra";
console.log(palavra1 + ' ' + palavra2); 

console.log(palavra1 + ' ' + palavra2[4].toUpperCase());

console.log(palavra1[0]);

console.log(palavra1.length + palavra2.length); 

//Quiz 1
console.log("======= Quiz 1 =======");
console.log("Javascript".length + 2 * 8); //resposta: 26
console.log(("Javascript".length + 2) * 8); //resposta: 96
console.log((((5 + 1 * 4) - "JS".length) * 2) - 10); //resposta: 4
console.log(3.5 * 2.34 + ("Escola"[2] + "Javascript"[5]).length); //resposta: 10.19
console.log("Escola" + " " + "de" + "Javascript"[0] + "Javascript"[4]); //resposta: "Escola deJs"
