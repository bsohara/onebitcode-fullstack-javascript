function mainFunction() {
    alert("Pediremos, agora, o nome e a idade da pessoa mais velha e da mais nova.");

    var olderPersonName = prompt("Qual o nome da idade mais velha?");
    var olderPersonAge = prompt("Qual a idade da idade mais velha?");

    var youngerPersonName = prompt("Qual o nome da idade mais nova?");
    var youngerPersonAge = prompt("Qual a idade da idade mais nova?");

    calcAndPrint(olderPersonName, olderPersonAge, youngerPersonName, youngerPersonAge);

}

function calcAndPrint(a, b, c, d){
    var ageDiff = b - d;

    if (ageDiff <= 0) {
        document.write(`
        Nome da pessoa mais velha: <b>${a}</b><br>
        Idade da pessoa mais velha: <b>${b}</b><br>
        <br>
        Nome da pessoa mais nova: <b>${c}</b><br>
        Idade da pessoa mais nova: <b>${d}</b><br>
        <br>
        Diferença das idades: <b>Diferença inválida</b><br>
    `);
    } else {
        document.write(`
        Nome da pessoa mais velha: <b>${a}</b><br>
        Idade da pessoa mais velha: <b>${b}</b><br>
        <br>
        Nome da pessoa mais nova: <b>${c}</b><br>
        Idade da pessoa mais nova: <b>${d}</b><br>
        <br>
        Diferença das idades: <b> ${ageDiff} anos de diferença.</b> <br>
    `);
    }
}

mainFunction();