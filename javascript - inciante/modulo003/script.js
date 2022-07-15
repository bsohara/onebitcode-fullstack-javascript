let startDate = prompt('Digite a data de partida (formato DD/MM/YYYY): ');

let departDate = moment(startDate, 'DD/MM/YYYY');

let today = moment();

let dateDiff = today - departDate;

let chosenOption = prompt('Escolha o tempo de partida\n1-segundos\n2-minutos\n3-horas\n4-dias');

const alertMessages = (message) => {
    alert(message);
}

const calcSeconds = (dateDiff) => {
    return Math.round(dateDiff/1000);
} 

const calcMinutes = (dateDiff) => {
    return Math.round(dateDiff/1000/60);
} 

const calcHours = (dateDiff) => {
    return Math.round(dateDiff/1000/3600);
} 

const calcDays = (dateDiff) => {
    return Math.round(dateDiff/1000/3600/24);
} 

if(chosenOption == 1){
    let seconds = calcSeconds(dateDiff);
    alertMessages(`tempo de voo em segundos: ${seconds} segundos.`);
}
else if (chosenOption == 2){
    let minutes = calcMinutes(dateDiff);
    alertMessages(`tempo de voo em minutos: ${minutes} minutos.`);
}
else if (chosenOption == 3){
    let hours = calcHours(dateDiff);
    alertMessages(`tempo de voo em horas: ${hours} horas.`);
}
else if (chosenOption == 4){
    let days = calcDays(dateDiff);
    alertMessages(`tempo de voo em dias: ${days} dias.`);
}