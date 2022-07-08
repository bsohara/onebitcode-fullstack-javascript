const latinhas = ["Koka-Kola", "Esprite", "Guaraná Jesus"];
const numeros = [1, 2, 3, 4, 5];

//a. push --> Adicionar um novo elemento na última posição
latinhas.push("Coleção Especial");


//b. retrieve/search
//1. filter --> filtrar por algum elemento específico
const latinhasNaoEsprite = latinhas.filter((latinha) => {
  return latinha !== "Esprite";
});

//2. find --> encontra algum elemento dentro da array
const latinhaKoka = latinhas.find((latinha) => {
  return latinha === "Koka-kola";
});

//3. includes
console.log(latinhas.includes("Koka-kola"));
console.log(latinhas.includes("Coleção Especial", 1));

console.log(latinhasNaoEsprite);
console.log(latinhaKoka);


//c. update
const novaColecao = [...latinhas, "Dollynho"];
console.log(novaColecao);

//1. slice
console.log(latinhas.slice(0));       //[ 'Koka-Kola', 'Esprite', 'Guaraná Jesus', 'Coleção Especial' ]
console.log(latinhas.slice(1, -1));   //[ 'Esprite', 'Guaraná Jesus' ]
console.log(latinhas.slice(0, -1));   //[ 'Koka-Kola', 'Esprite', 'Guaraná Jesus' ]
console.log(latinhas.slice(0, 1));    //[ 'Koka-Kola' ]
console.log(latinhas.slice(0, -3));   //[ 'Koka-Kola' ]
console.log(novaColecao.slice(2));    //[ 'Koka-Kola' ]
console.log(novaColecao.slice(1));    //[ 'Guaraná Jesus', 'Coleção Especial', 'Dollynho' ]
console.log(novaColecao.slice(2, 2)); //[]
console.log(novaColecao.slice(-2));   //[ 'Coleção Especial', 'Dollynho' ]

//2. slice com variavel
const latinhasAtualizadas = latinhas.slice(-2);
console.log(latinhasAtualizadas);


//d. remove --> remove um elemento na última posição
latinhas.pop();
console.log(latinhas); //remove a latinha 'coleção especial'


//map --> 
const frutas = ["🍇", "🍎", "🍑", "🍍"];
const macas = frutas.map(fruta => {
    return "🍎"
});

console.log(frutas);
console.log(macas);

//reverse
const frutasInvertidas = frutas.reverse();
console.log(frutasInvertidas);

//forEach
frutas.forEach(fruta => {
    console.log(fruta);
})