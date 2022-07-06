let nome = "Henrique";
let novoNome = "";
let caractereProibido = "i";

for(let i=nome.length-1; i>=0; i--){
    novoNome += nome[i];
    if(nome[i] === caractereProibido){
        break;
    }
}

console.log(novoNome);
