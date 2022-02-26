// var = pode armazenar N valores - n valores
// constante = deve-se armazenar de forma fixa - apenas 1 valor

function calculateTip(event){
    let bill = document.getElementById('bill').value;
    let servQual = document.getElementById('serviceQual').value;
    let people = document.getElementById('people').value;

    if(bill == '' || serviceQual == 0){
        alert("Preencha o valor.");
        return;
    }

    if(people <= 1 || people == ''){
        numOfPeople = 1;
        document.getElementById('each').style.display = "none";
    }
    else{
        document.getElementById('each').style.display = "block";
    }

    let total = (bill * servQual) / people;
    total = total.toFixed(2);

    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";

}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);