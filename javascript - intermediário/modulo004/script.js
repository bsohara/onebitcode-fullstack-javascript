class Spaceship {
    constructor(name, crewQuantity, maxRecommendedVelocity) {
        this.name = name;
        this.crewQuantity = crewQuantity;
        this.maxRecommendedVelocity = maxRecommendedVelocity;
        this.currentVeloc = 0;
    }

    speedUp(acceleration) {
        this.currentVeloc > this.maxRecommendedVelocity ? alert("Velocidade ultrapassada!\nDiminua a velocidade") : this.currentVeloc +=  acceleration;
    }
}

class TransportSpaceship extends Spaceship {
    constructor(name, crewQuantity, maxRecommendedVelocity, maxWeight) {
        super(name, crewQuantity, maxRecommendedVelocity) //irá chamar o construtor da classe-pai
        this.maxWeight = maxWeight;
    }

    speedUp(acceleration){
        acceleration /= 2;
        alert(`Incrementando a velocidade em ${acceleration} km/s.`);
        super.speedUp(acceleration);
    }
}

let transport = new TransportSpaceship("Transportadora", 5, 120, 400);
transport.speedUp(210);
console.log(transport);