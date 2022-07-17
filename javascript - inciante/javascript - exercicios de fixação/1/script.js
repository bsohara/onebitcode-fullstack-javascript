let tabuada = parseInt(prompt("Qual tabuada quer mostrar?: "));

const imprimeTabuada = (tabuada) => {
    for(let i=1; i<11; i++){
        console.log(`${i} x ${tabuada} = ${i * tabuada}`);
    }
}

imprimeTabuada(tabuada);