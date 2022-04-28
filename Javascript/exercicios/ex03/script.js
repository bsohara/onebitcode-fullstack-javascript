var nomePiloto = prompt("Qual seu nome, piloto?");

var velocInicial = 0;
var velocAtual = prompt("Velocidade atual da espaçonave: ");


let confirmSpd = confirm(`Confirmar a velocidade? Velocidade atual: ${velocAtual}.`);

if(confirmSpd){
    velocInicial = velocAtual;
}

alert(`Nome do piloto: ${nomePiloto}\nVelocidade autal: ${velocAtual}km/s.`);

if(velocAtual < 0){
    alert(`Nave parada. Aumentaremos a velocidade quando andar.`);
}

else if (velocAtual > 0 && velocAtual <= 40){
    alert(`Velocidade baixa. Podemos aumentar mais um pouco.`);
}

else if (velocAtual > 40 && velocAtual <= 80){
    alert(`Parece uma boa velocidade para manter.`);
}

else if (velocAtual > 80 && velocAtual <= 100){
    alert(`Velocidade alta! Considere diminuir.`);
}

else {
    alert(`Velocidade perigosa! Controle automático ativado!`);
}

