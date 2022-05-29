let frutas = ['Maçã', 'Pêra', 'Laranja', 'Abacaxi', 'Goiaba'];

frutas.forEach(function(fruta, index){
    console.log(`Fruta ${index+1}: ${fruta}\nPosição no array: ${index}`);
});

let frutasComMaiusculo = frutas.map(function(fruta){
    let maiusculo = fruta.toUpperCase();
    return maiusculo;
});

console.log(frutasComMaiusculo);

let frutasCom7Caracteres = frutas.filter(element => {
    return element.lenght >= 7;
});

console.log(frutasCom7Caracteres);

