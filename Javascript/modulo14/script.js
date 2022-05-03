const PI = 3.1415;
var n = parseInt(prompt(`Qual número para ser calculado?`));

function calcArea(PI, numb, unit = 'm²'){
    var result = Math.ceil(PI * Math.pow(numb, 2));
    alert(`Result: ${result}${unit}`);
}

calcArea(PI, n);