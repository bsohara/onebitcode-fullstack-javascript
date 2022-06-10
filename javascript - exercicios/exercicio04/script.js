let ly = prompt("Digite a velocidade em anos-luz: ");

const pc = 0.306601;
const au = 63241.1;
const km = 9.5 * Math.pow(10, 12);

let chosenOption = parseInt(prompt("Digite a unidade que gostaria de converter:\n1-Parsec (ps)\n2-Unidade astronômica (AU)\n3-Quilômetros(km)"));


switch(chosenOption){
    case 1:
        alert(`Velocidade em anos-luz: ${ly} anos-luz.\nConversão em Parsec: ${ly * pc} pc.`);
        break;
    
    case 2:
        alert(`Velocidade em anos-luz: ${ly} anos-luz.\nConversão em Unidade Astronômica: ${ly * au} au.`);
        break;

    case 3:
        alert(`Velocidade em anos-luz: ${ly} anos-luz.\nConversão em quilômetros: ${ly * km} km.`);
        break;
    
    default:
        alert(`Velocidade em anos-luz: ${ly} anos-luz.\nUnidade não identificada: Conversão fora do escopo.`);
        
}
