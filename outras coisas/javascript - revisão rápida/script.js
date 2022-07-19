//variáveis
console.log("1 - variáveis");
var a = 3;
var b = 5;

var letra1 = "a";
var letra2 = "b";

console.log(a);
console.log(b);
console.log(letra1);
console.log(letra2);

console.log(typeof a);
console.log(typeof b);
console.log(typeof letra1);
console.log(typeof letra2);

//operadores
//a - aritméticos
console.log("2 - aritméticos");
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(Math.pow(a,b));

//b - lógicos
console.log("3 - lógicos");
console.log(a==b);
console.log(a!=b);
console.log(a>b);
console.log(a==b || a<b);
console.log(letra1<letra2);
console.log(letra1>letra2 && a!=5);

//condicionais
console.log("4 - condicionais");
//a. padrão
console.log("a - padrão");
let idade = 18;
if(idade >= 18){
    console.log("Pode tirar a CNH.");
}
else {
    console.log("Ainda não.");
}

//b. condição ternária
console.log("b - ternária");
idade >= 18 ? console.log("Pode tirar a CNH.") : console.log("Ainda não.");

//iterações
console.log("5 - iterações");
let nomes = ["Bruno", "Breno", "Diego", "Diogo", "Guilherme", "Gerson", "Igor", "Joice", "Michelle", "Ulisses"];

console.log("a - loop for");
let i;
for(i=0; i<nomes.length; i++) {
    console.log(`${nomes[i]}`);
}

console.log("b - while");
var n = 0;
var x = 0;

while (n < 3) {
  n++;
  x += n;
  console.log(x);
}

console.log("c - do..while");
var resultado = '';
do {
   i += 1;
   resultado += i + ' ';
} while (i < 5);

console.log(resultado);