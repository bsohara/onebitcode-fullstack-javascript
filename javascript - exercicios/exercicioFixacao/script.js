let celsius = parseFloat(prompt("Qual temperatura em Celsius?"));
let chosenOption;

function convertMenu() {
  let option;
  option = parseInt(
    prompt("Converter:\n1 - Celsius para Fahrenheit\n2 - Celsius para Kelvin")
  );
  return option;
}

function celsius4Fahr(celsius) {
  let fahrenheit = celsius * 1.8 + 32;
  return fahrenheit;
}

function celsius4Kelv(celsius) {
  let kelvin = celsius + 273;
  return kelvin;
}

do {
  chosenOption = convertMenu();
  switch (chosenOption) {
    case 1:
      let newFahr = celsius4Fahr(celsius);
      alert(
        `Temperatura em Celsius: ${celsius}°C.\nTemperatura em Fahrenheit: ${newFahr}°F.`
      );
    case 2:
      let newKelv = celsius4Fahr(celsius);
      alert(
        `Temperatura em Celsius: ${celsius}°C.\nTemperatura em Kelvin: ${newKelv} K.`
      );
    default:
      alert("Encerrando o programa de conversão.");
  }
} while (chosenOption != 3);
