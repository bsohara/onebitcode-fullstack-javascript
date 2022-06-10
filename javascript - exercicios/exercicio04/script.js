let ly = prompt("Digite a velocidade em anos-luz: ");
let chosenUnit;
const pc = 0.306601;
const au = 63241.1;
const km = 9.5 * Math.pow(10, 12);

let chosenOption = parseInt(prompt("Digite a opção para escolher:\n1-Parsec (PC)\n2-Unidade astronômica (AU)\n3-Quilômetros (KM)"));

const calctoPC = (ly) => {
    var result = ly * pc;
    return result;
}

const calctoAU = (ly) => {
    var result = ly * au;
    return result;
}

const calctoKM = (ly) => {
    var result = ly * km;
    return result;
}

switch(chosenOption){
    case 1:
        chosenUnit = "Parsec";
        alert(`Velocidade em anos-luz: ${ly} anos-luz.\nConversão em ${chosenUnit}: ${calctoPC(ly)} pc.`);
        break;
    
    case 2:
        chosenUnit = "Unidade Astronômica";
        alert(`Velocidade em anos-luz: ${ly} anos-luz.\nConversão em ${chosenUnit}: ${calctoAU(ly)} au.`);
        break;

    case 3:
        chosenUnit = "Quilômetros";
        alert(`Velocidade em anos-luz: ${ly} anos-luz.\nConversão em ${chosenUnit}: ${calctoKM(ly)} km.`);
        break;
    
    default:
        alert(`Velocidade em anos-luz: ${ly} anos-luz.\nUnidade não identificada: Conversão fora do escopo.`);
        
}
