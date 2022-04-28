let speed = prompt("Velocidade medida no momento: ");

function mainFunction(){
    verifySpeed(speed);
}

function print(phrase){
    document.write(phrase);
}

function verifySpeed(a){
    a < 100 ? print(`Estamos em uma velocidade aceitável.`) : print(`Opa! Estamos em uma velocidade maior que a permitida.`);
}

mainFunction();