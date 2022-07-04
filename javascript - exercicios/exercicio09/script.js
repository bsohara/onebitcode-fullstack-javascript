let speed = 150;

function breakSpd(speed, painel) {
  alert("Nave aterrisando");
  let newSpd = speed - 20;
  painel(newSpd);
  return newSpd;
}

let printSpd = (speed) => {
  alert("Nova Velocidade da nave é: " + speed + "km/s");
};

let Slowspeed = breakSpd(speed, printSpd);

while (speed > 0) {
  if (speed - 20 < 0) {
    alert("Nave Parada");
    break;
  } else {
    speed = breakSpd(speed, printSpd);
  }
}