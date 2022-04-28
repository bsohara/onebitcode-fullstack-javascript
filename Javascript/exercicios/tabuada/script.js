let number = prompt('Qual número será inserido na tabuada?');
let i = 0;

document.write(`<h1>Tabuada do ${i}</h1>`);
for (i=0; i<=10; i++){
    document.write(`${number} * ${i} = ${number * i}<br>`);
}