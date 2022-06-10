let startDate = prompt('Digite a data de partida (formato DD/MM/YYYY): ');

let departDate = moment(startDate, 'DD/MM/YYYY');

let today = moment();

let dateDiff = today - departDate;

let chosenOption = prompt('Escolha o tempo de partida\n1-segundos\n2-minutos\n3-horas\n4-dias');

const alertMessages = (message) => {
    alert(message);
}


if(chosenOption == 1){
    let seconds = Math.round(dateDiff/1000);
    alertMessages(`tempo de voo em segundos: ${seconds} segundos.`);
}
else if (chosenOption == 2){
    let minutes = Math.round(dateDiff/1000/60);
    alertMessages(`tempo de voo em minutos: ${minutes} minutos.`);
}
else if (chosenOption == 3){
    let hours = Math.round(dateDiff/1000/3600);
    alertMessages(`tempo de voo em horas: ${hours} horas.`);
}
else if (chosenOption == 4){
    let days = Math.round(dateDiff/1000/3600/24);
    alertMessages(`tempo de voo em dias: ${days} dias.`);
}