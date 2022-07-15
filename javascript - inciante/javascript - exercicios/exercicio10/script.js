const spaceships =[
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
];

//1. filtra espaçonave com mais de 9 tripulantes
let spaceships9places = spaceships.filter(spaceship => { return spaceship[1] >= 9 }).map(spaceship => { return spaceship[0] });

//2. encontra as espaçonaves que têm possiblidade de engate
let ongoingHitchedSpaceship = spaceships.findIndex(spaceship => { return spaceship[2] == false; });

//3. destaca, em maiúsculo, todas as espaçonaves
let highlightedSapceships = spaceships.map(spaceship => { return spaceship[0].toUpperCase() });

//4. imprime mensagem com informações acima
let message = `Espaçonaves com mais de 9 tripulante:  ${spaceships9places.join(", ")}`
message += `\nPlataforma com processo de engate: ${ongoingHitchedSpaceship + 1}`
message += `\nEspaçonaves destacadas: ${highlightedSapceships.join(", ")}`

alert(message);