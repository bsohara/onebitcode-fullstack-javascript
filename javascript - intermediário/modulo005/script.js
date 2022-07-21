class TransportSpaceship {
    constructor(name){
        this.name = name;
        this.currVelocity = 0;
    }

    set velocity(newVelocity){
        newVelocity > 120 ? this.currVelocity = 120 : this.currVelocity = newVelocity;
    }
}

let spaceship = new TransportSpaceship("Transportador");
spaceship.velocity = 100;

console.log(spaceship);

spaceship.velocity = 200;
console.log(spaceship);

class ResourceProcessStation {
    constructor(name, monthlyProcessedLoad) {
        this.name = name;
        this.monthlyProcessedLoad = monthlyProcessedLoad;
    }

    get weeklyProcessedLoad() {
        return this.monthlyProcessedLoad / 4;
    }
}

let resourceProcessor = new ResourceProcessStation("Iaia", 60000);
console.log(resourceProcessor.weeklyProcessedLoad);

resourceProcessor.monthlyProcessedLoad = 120;
console.log(resourceProcessor.weeklyProcessedLoad);