let espaconave = prompt("Qual o nome da sua nave? ");
let resposta = prompt("Gostaria de fazer uma dobra?\n1-sim\n2-não");
let dobras = 0;

const fazerDobras = (resposta) => {
    while(resposta == "1"){
        dobras++;
        console.log(`Dobra nº: ${dobras}`);
        resposta = prompt("Gostaria de fazer mais uma dobra?\n1-sim\n2-não");
    }
    
    alert(`Nome da espaçonave: ${espaconave}.\nNúmero de dobras: ${dobras} dobras.`);
}

fazerDobras(resposta);

