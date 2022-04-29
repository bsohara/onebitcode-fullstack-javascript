let lyNumb = prompt('Quantos anos luz?');
let option = prompt('Qual unidade de medida você gostaria de usar ana conversão?\n• Unidades de medida: \n1 - Parsec (pc)\n2 - Unidade Astronômica (AU)\n3 - Quilômetros (km)');

switch (option) {
    case 1:
        document.write(`-- Unidade de medida escolhida: Parsec (pc)<br>`);
        let pcNumb = lyNumb * 0.306601;
        document.write(`• Distância em anos-luz: ${lyNumb} anos-luz.<br>`);
        document.write(`• Distância convertida em Parsec: ${pcNumb} pc.<br>`);
        break;

    case 2:
        document.write(`-- Unidade de medida escolhida: Unidade Astronômica (AU)<br>`);
        let auNumb = lyNumb * 63241.1;
        document.write(`• Distância em anos-luz: ${lyNumb} anos-luz.<br>`);
        document.write(`• Distância convertida em A.U.: ${auNumb} A.U.<br>`);
        break;

    case 3:
        document.write(`-- Unidade de medida escolhida: Quilômetros (km)<br>`);
        let kmNumb = lyNumb * 9.5 * Math.pow(10, 12);
        document.write(`• Distância em anos-luz: ${lyNumb} anos-luz.<br>`);
        document.write(`• Distância convertida em KM: ${kmNumb} km.<br>`);
        break;

    default:
        document.write(`• Distância em anos-luz: ${lyNumb} anos-luz.<br>`);
        document.write(`Unidade de medida astronômica inválida.<br>`);
}