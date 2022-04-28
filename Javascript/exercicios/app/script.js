let departureDateEntry = prompt('Digite a data de partida: ');

let departureDate = moment(departureDateEntry, "DD/MM/YYYY");

let today = moment();

let dateDiff = today - departureDate;

let chosenOption = prompt('Escolha como gostaria de exibir o tempo de partida:\n1 - segundos\n2 - minutos\n3 - horas\n4 - dias');

if(chosenOption == "1"){
    let secondsOfDeparture = Math.round(dateDiff / 1000);
    alert(`Tempo de vôo: ${secondsOfDeparture} segundos.`);
}
else if (chosenOption == "2"){
    let minutesOfDeparture = Math.round(dateDiff / 1000 / 60);
    alert(`Tempo de vôo: ${secondsOfDeparture} minutos.`);
}
else if (chosenOption == "3"){
    let hoursOfDeparture = Math.round(dateDiff / 1000 / 3600);
    alert(`Tempo de vôo: ${hoursOfDeparture} horas.`);
}
else if (chosenOption == "4"){
    let daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24);
    alert(`Tempo de vôo: ${daysOfDeparture} dias.`);
}
else {
    alert(`Opção inválida`);
}