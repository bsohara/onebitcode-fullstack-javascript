//let myArray = []
//- é mesma coisa que:
//let myArray = new Array();

class Spaceship {
    //construtor
    constructor(name) { //em crewQtd recebe um valor default já definido
        this.name = name;
        this.velocity = 0;
    }

    speedUp(acceleration) {
        let newVelocity = this.velocity += acceleration;
    }
}

let arthemis = new Spaceship("Arthemis");

console.log(arthemis);

arthemis.speedUp(10);
console.log(arthemis);

arthemis.speedUp(30);
console.log(arthemis);