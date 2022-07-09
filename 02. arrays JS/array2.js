const frutas = ["🍇", "🍎", "🍑", "🍍"];

//alternativa do loop padrão 'for'
//forma frequentemente utilizada no JavaScript
frutas.forEach(fruta => {
    console.log(fruta);
})

//opção de transformar seus elementos em algo novo, trazendo como resultado um novo array 
//- facilidade de realizar concatenações de operações, com emenda de outros métodos de arrays
//- ex: .map().filter
frutas.map(fruta => {
    console.log(fruta);
})

