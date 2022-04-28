let spaceship = "Elemental";
let speed = 100;

/*
1 - Condição 'E' (AND / &&)
*/
//console.log(spaceship === "Elemental" && spaceship.length > 0);
// V e V => V

//console.log(speed > 100 && spaceship > 0);
// F e V => F

//console.log(spaceship == "Elemental" && velocity > 20);
// V e F => F


/*
2 - Condição 'OU' (OR / ||)
*/
//console.log(spaceship === "Elemental" || spaceship.length > 0);
// V ou V => V

//console.log(speed > 100 || spaceship > 0);
// F ou V => V

//console.log(spaceship === "Golias" || velocity < 20);
// F ou F => F

/*
3 - Condição 'NÃO' (NOT / !)
*/
//console.log(!(spaceship === "Elemental"))
// !(V) => F