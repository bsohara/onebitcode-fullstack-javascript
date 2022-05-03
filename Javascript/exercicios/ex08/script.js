let piloto = prompt("Qual seu nome, piloto?");
let velocidade = 0;
let opcao = prompt(`Qual opção inserir? 
                    \n1 - acelerar
                    \n2 - desacelerar
                    \n3 - mostrar dados`);

function mostraDados(){
    alert(`Nome do piloto: ${piloto}\nVelocidade atual: ${velocidade}km/s.`);
}


function acelera(){
    velocidade = velocidade + 5;
    return velocidade;
}


function desacelera(){
    velocidade = velocidade - 5;
    return velocidade;
}


while(opcao < "4"){
    switch(opcao){
        case "1":
            acelera();
            break;

        case "2":
            if(velocidade <= 0){
                alert('Não é possível desacelerar. Está parado!');
                break;
            }
            else {
                desacelera();
                break;
            }

        case "3":
            mostraDados();
            break;

        default:
            console.log('Saindo do programa...');
            break;

    }
    opcao = prompt(`Qual opção inserir? 
                    \n1 - acelerar
                    \n2 - desacelerar
                    \n3 - mostrar dados
                    \nVelocidade atual: ${velocidade}km/s.`);
}