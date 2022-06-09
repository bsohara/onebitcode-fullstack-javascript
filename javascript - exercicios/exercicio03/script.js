let piloto = prompt('Qual seu nome, piloto? ');
let velocidade = 0;

velocidade = parseInt(prompt('Qual a velocidade atual do foguete? '));
var confirma = confirm(`Gostaria de altera a velocidade? \nVelocidade atual: ${velocidade}km/s.`);

function imprimeMensagem(msg){
    alert(msg);
}

function verificaVelocidade(velocidade){
    if(velocidade > 0){
        if(velocidade < 40){
            imprimeMensagem('Você está devagar. Podemos aumentar a velocidade.');
        }
        else if(velocidade >= 40 && velocidade < 80){
            imprimeMensagem('Parece uma boa velocidade para manter.');
        }
        else if(velocidade >= 80 && velocidade < 100){
            imprimeMensagem('Velocidade alta. Considere diminuir.');
        }
        else {
            imprimeMensagem('Velocidade perigosa. Controle automático forçado.');
        }
    }
    else {
        imprimeMensagem('Nave está parada. Considere partir e aumentar a velocidade.');
    }
}



const alteraVelocidade = (piloto, velocidade, confirma) => {

    while(confirma==true){
        verificaVelocidade(velocidade);
        velocidade = parseInt(prompt('Qual a nova velocidade do foguete? '));
        confirma = confirm(`Gostaria de altera a velocidade? \nVelocidade atual: ${velocidade}km/s.`);
    }

    alert(`Nome do piloto: ${piloto}.\nVelocidade atual: ${velocidade}km/s.`)
}

alteraVelocidade(piloto, velocidade, confirma);

