let spaceships = ["Demetrius", "Soul lobby", "Phoenix", "Puller", "Scape", "Cum", "Monster"];

/*
    spaceships.forEach(function(currentSpaceship, index) {
        console.log(`Nave: ${currentSpaceship} --> posição: ${index}`);
    })

    let upcasedSpaceship = spaceships.map(function(currentSpaceship) {
        let upcased = currentSpaceship.toUpperCase();
        return upcased;
    });

    console.log(upcasedSpaceship);
 */

spaceships.forEach((currentSpaceship, index) => {
  console.log(`Nave: ${currentSpaceship} --> posição: ${index}`);
});

let upcasedSpaceship = spaceships.map((currentSpaceship) => {
  let upcased = currentSpaceship.toUpperCase();
  return upcased;
});

console.log(upcasedSpaceship);

let space7chars = spaceships.filter(element => element.length >= 7);
console.log(space7chars);

let foundSpaceship7Chars = spaceships.find(element => {return element.length >= 7});
console.log(foundSpaceship7Chars);